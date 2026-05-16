"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      id="scroll-progress" 
      style={{ width: `${width}%` }} 
      className="pointer-events-none"
    />
  );
}
