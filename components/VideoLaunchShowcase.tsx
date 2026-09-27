"use client";

import React, { useState, useEffect, useRef } from "react";

interface VideoMode {
  id: string;
  index: string;
  code: string;
  title: string;
  videoSrc: string;
  posterSrc: string;
  reelSrc: string;
  reelPoster: string;
}

const MODES: VideoMode[] = [
  {
    id: "vault",
    index: "01",
    code: "SOVEREIGN_VAULT",
    title: "Zero-Knowledge Financial Vault",
    videoSrc: "/videos/zenledger-air-gapped-vault.mp4",
    posterSrc: "/videos/zenledger-air-gapped-vault.jpg",
    reelSrc: "/videos/zenledger-air-gapped-vault-reel.mp4",
    reelPoster: "/videos/zenledger-air-gapped-vault-reel.jpg",
  },
  {
    id: "solver",
    index: "02",
    code: "VITERBI_SOLVER",
    title: "Deterministic Statement Solver",
    videoSrc: "/videos/zenledger-statement-solver.mp4",
    posterSrc: "/videos/zenledger-statement-solver.jpg",
    reelSrc: "/videos/zenledger-statement-solver-reel.mp4",
    reelPoster: "/videos/zenledger-statement-solver-reel.jpg",
  },
  {
    id: "quant",
    index: "03",
    code: "HACKER_QUANT",
    title: "Multi-Asset Hacker Quant Hub",
    videoSrc: "/videos/zenledger-quant-engine.mp4",
    posterSrc: "/videos/zenledger-quant-engine.jpg",
    reelSrc: "/videos/zenledger-quant-engine-reel.mp4",
    reelPoster: "/videos/zenledger-quant-engine-reel.jpg",
  },
];

export function VideoLaunchShowcase() {
  const [activeTab, setActiveTab] = useState<string>("vault");
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);
  const [modeSelection, setModeSelection] = useState<"auto" | "landscape" | "portrait">("auto");
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Viewport detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.matchMedia("(max-width: 768px)").matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeMode = MODES.find((m) => m.id === activeTab) || MODES[0];

  // Resolve active format: auto maps to portrait on mobile (<768px), landscape on desktop
  const activeAspect: "landscape" | "portrait" =
    modeSelection === "auto"
      ? isMobileDevice
        ? "portrait"
        : "landscape"
      : modeSelection;

  const activeSrc = activeAspect === "portrait" ? activeMode.reelSrc : activeMode.videoSrc;
  const activePoster = activeAspect === "portrait" ? activeMode.reelPoster : activeMode.posterSrc;

  // Autoplay with volume enforcement
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.currentTime = 0;
    vid.muted = isMuted;

    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If browser blocks unmuted autoplay without prior user interaction,
        // fallback to muted autoplay so playback is never blocked, and note it.
        vid.muted = true;
        setIsMuted(true);
        vid.play().catch(() => {});
      });
    }
  }, [activeSrc]);

  // Audio unmute toggle handler
  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="relative my-20 border-t-2 border-b-2 border-white/20 bg-black py-12 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Background Film Grain Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Top Control Bar: Channels on Left, Viewport Routing on Right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 border border-white/10 bg-black p-2">
          {/* Channel Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {MODES.map((mode) => {
              const isSelected = activeTab === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveTab(mode.id)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-none flex items-center gap-2 border ${
                    isSelected
                      ? "bg-white text-black border-white font-bold"
                      : "bg-black text-gray-400 border-white/10 hover:border-white/40 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] opacity-60">[{mode.index}]</span>
                  <span>{mode.code}</span>
                  <span className={`h-1.5 w-1.5 rounded-none ${isSelected ? "bg-black" : "bg-white/20"}`} />
                </button>
              );
            })}
          </div>

          {/* Aspect Ratio Switcher */}
          <div className="flex items-center gap-1 self-end md:self-center border border-white/10 p-1 bg-black">
            <button
              onClick={() => setModeSelection("auto")}
              className={`px-3 py-1 font-mono text-[10px] tracking-widest uppercase transition-none border ${
                modeSelection === "auto"
                  ? "bg-white text-black border-white font-bold"
                  : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              AUTO ({isMobileDevice ? "9:16 REEL" : "16:9 CINEMA"})
            </button>
            <div className="h-4 w-px bg-white/20" />
            <button
              onClick={() => setModeSelection("landscape")}
              className={`px-3 py-1 font-mono text-[10px] tracking-widest uppercase transition-none border ${
                modeSelection === "landscape"
                  ? "bg-white text-black border-white font-bold"
                  : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              16:9
            </button>
            <button
              onClick={() => setModeSelection("portrait")}
              className={`px-3 py-1 font-mono text-[10px] tracking-widest uppercase transition-none border ${
                modeSelection === "portrait"
                  ? "bg-white text-black border-white font-bold"
                  : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              9:16 REEL
            </button>
          </div>
        </div>

        {/* Clean, Full-Width Cinema Video Container with ZERO overlay clutter */}
        <div className="flex justify-center w-full">
          <div
            className={`relative w-full border border-white/20 bg-black overflow-hidden shadow-2xl transition-all duration-300 ${
              activeAspect === "portrait"
                ? "max-w-[440px] aspect-[9/16]"
                : "w-full max-w-7xl aspect-[16/9]"
            }`}
          >
            {/* Pure Uninterrupted Video Viewport */}
            <video
              ref={videoRef}
              key={activeSrc}
              autoPlay
              loop
              playsInline
              preload="auto"
              poster={activePoster}
              className="w-full h-full object-cover"
            >
              <source src={activeSrc} type="video/mp4" />
            </video>

            {/* Subtle Minimal Audio Control Toggle (Bottom-Right) */}
            <button
              onClick={toggleAudio}
              className="absolute bottom-4 right-4 z-30 flex items-center gap-2 px-3 py-1.5 bg-black/80 hover:bg-white hover:text-black text-white border border-white/30 backdrop-blur font-mono text-[10px] tracking-widest uppercase transition-none"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? (
                <>
                  <svg className="w-3.5 h-3.5 fill-current text-amber-400" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                  <span>[UNMUTE_AUDIO]</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                  <span>[AUDIO_ACTIVE]</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Minimalist Industrial Footer Bar */}
        <div className="mt-3 flex items-center justify-between w-full font-mono text-[10px] text-gray-500 uppercase tracking-widest px-1">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-none bg-emerald-400 animate-pulse" />
            <span>
              {activeAspect === "portrait" ? "REEL: 1080×1920 (9:16)" : "CINEMA: 1920×1080 (16:9)"} // AUTOPLAY_STREAMING
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={activeMode.videoSrc}
              download
              className="text-gray-400 hover:text-white border-b border-white/20 transition-none"
            >
              [↓ 16:9 MP4]
            </a>
            <a
              href={activeMode.reelSrc}
              download
              className="text-gray-400 hover:text-white border-b border-white/20 transition-none"
            >
              [↓ 9:16 REEL]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
