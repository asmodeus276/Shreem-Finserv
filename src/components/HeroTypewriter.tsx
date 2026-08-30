"use client";

import React, { useState, useEffect, useCallback } from "react";

interface HeroTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
  className?: string;
}

export const HeroTypewriter: React.FC<HeroTypewriterProps> = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDelay = 2000,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (isPaused) return;

    if (!isDeleting) {
      // Typing
      setDisplayText(currentWord.substring(0, displayText.length + 1));

      if (displayText.length === currentWord.length) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else {
      // Deleting
      setDisplayText(currentWord.substring(0, displayText.length - 1));

      if (displayText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [displayText, isDeleting, isPaused, wordIndex, words, pauseDelay]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-[3px] h-[0.85em] bg-[#BB0119] ml-1 align-middle animate-pulse rounded-full" />
    </span>
  );
};

export default HeroTypewriter;
