/**
 * Anti-Bot Protection & Validation Engine
 * Guards all public endpoints (/api/apply-job, /api/submit-contact, /api/submit-lead, /api/submit-partner)
 * against automated crawlers, form spammers, and malicious scripts.
 */

import { NextRequest } from "next/server";

// ── In-Memory Rate Limiter (Sliding Window per IP) ──
interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per minute per IP

// Periodically clean up old IPs to prevent memory growth
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
      record.timestamps = record.timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (record.timestamps.length === 0) {
        rateLimitMap.delete(ip);
      }
    }
  }, 5 * 60 * 1000);
}

export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return req.headers.get("x-real-ip") || "unknown-ip";
}

export function checkRateLimit(ip: string): boolean {
  if (ip === "unknown-ip" || ip === "127.0.0.1" || ip === "::1") {
    return true; // Allow local dev
  }

  const now = Date.now();
  let record = rateLimitMap.get(ip);
  if (!record) {
    record = { timestamps: [] };
    rateLimitMap.set(ip, record);
  }

  // Filter timestamps within window
  record.timestamps = record.timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (record.timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  record.timestamps.push(now);
  return true;
}

// ── Indian Mobile Number Validation ──
// Indian mobile numbers must be exactly 10 digits starting with 6, 7, 8, or 9
const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

export function isValidIndianMobile(phone: string): boolean {
  const clean = (phone || "").replace(/\D/g, "");
  return INDIAN_MOBILE_REGEX.test(clean);
}

// ── Gibberish / Random String Detection ──
function countCaseTransitions(str: string): number {
  let transitions = 0;
  for (let i = 0; i < str.length - 1; i++) {
    const isUpper = str[i] >= "A" && str[i] <= "Z";
    const isLower = str[i] >= "a" && str[i] <= "z";
    const nextUpper = str[i + 1] >= "A" && str[i + 1] <= "Z";
    const nextLower = str[i + 1] >= "a" && str[i + 1] <= "z";
    if ((isUpper && nextLower) || (isLower && nextUpper)) {
      transitions++;
    }
  }
  return transitions;
}

export function isLikelyBotName(name: string): boolean {
  if (!name || typeof name !== "string") return true;
  const trimmed = name.trim();

  // Too short or too long
  if (trimmed.length < 2 || trimmed.length > 70) return true;

  // Contains HTML tags, scripts, or URLs
  if (/[<>{}[\]\\]|https?:\/\//i.test(trimmed)) return true;

  // Names should have letters
  if (!/[a-zA-Z]/.test(trimmed)) return true;

  // Words analysis
  const words = trimmed.split(/\s+/);

  for (const word of words) {
    // If a single word has 4 or more lower<->upper case transitions (e.g. cPIqFibUSWsnmDYv or RRbalaOekOHdRDpbsNeuiZ)
    if (countCaseTransitions(word) >= 4) {
      return true;
    }

    // Long single token with no vowels (e.g. "bcdfghjklmn")
    if (word.length >= 6 && !/[aeiouyAEIOUY]/.test(word)) {
      return true;
    }
  }

  return false;
}

// ── Dot-Spammer Email Detection ──
export function isSpamEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim().toLowerCase();

  const atIndex = trimmed.indexOf("@");
  if (atIndex === -1) return true;

  const username = trimmed.slice(0, atIndex);

  // Spambot pattern: o.mu.ki.suj.o.52 (4 or more dots in username)
  const dotCount = (username.match(/\./g) || []).length;
  if (dotCount >= 4) {
    return true;
  }

  return false;
}

// ── Honeypot Anti-Bot Field Check ──
// Bots automatically fill every input field they find in the DOM.
export function isHoneypotTriggered(body: Record<string, unknown>): boolean {
  const honeypotKeys = [
    "website_url_hp",
    "fax_number_hp",
    "company_fax_hp",
    "middle_name_hp",
    "confirm_address_hp",
  ];

  for (const key of honeypotKeys) {
    const val = body[key];
    if (typeof val === "string" && val.trim().length > 0) {
      return true;
    }
  }

  return false;
}

// ── Master Verification Helper ──
export interface AntiBotCheckResult {
  allowed: boolean;
  silentDrop?: boolean; // Return 200 to trick the bot, but DO NOT save or send email
  error?: string;
  statusCode?: number;
}

export function inspectSubmission(
  req: NextRequest,
  body: Record<string, unknown>,
  options: {
    name?: string;
    phone?: string;
    email?: string;
  }
): AntiBotCheckResult {
  // 1. Honeypot Check (Trap bots silently)
  if (isHoneypotTriggered(body)) {
    console.warn(`[Anti-Bot Honeypot Triggered] IP: ${getClientIp(req)} filled hidden trap field.`);
    return {
      allowed: false,
      silentDrop: true, // Silently drop so bot thinks it succeeded
    };
  }

  // 2. IP Rate Limiting Check
  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    console.warn(`[Anti-Bot Rate Limit Exceeded] IP: ${ip}`);
    return {
      allowed: false,
      error: "Too many submissions detected from your connection. Please wait 1-2 minutes before trying again.",
      statusCode: 429,
    };
  }

  // 3. Indian Mobile Number Check
  if (options.phone) {
    if (!isValidIndianMobile(options.phone)) {
      return {
        allowed: false,
        error: "Please enter a valid 10-digit Indian mobile number (must start with 6, 7, 8, or 9).",
        statusCode: 400,
      };
    }
  }

  // 4. Gibberish Name Check
  if (options.name) {
    if (isLikelyBotName(options.name)) {
      console.warn(`[Anti-Bot Gibberish Name Blocked] Name: "${options.name}" from IP: ${ip}`);
      return {
        allowed: false,
        silentDrop: true, // Silently drop so bot doesn't keep testing variations
      };
    }
  }

  // 5. Spam Email Check
  if (options.email) {
    if (isSpamEmail(options.email)) {
      console.warn(`[Anti-Bot Spam Email Blocked] Email: "${options.email}" from IP: ${ip}`);
      return {
        allowed: false,
        silentDrop: true,
      };
    }
  }

  return { allowed: true };
}

