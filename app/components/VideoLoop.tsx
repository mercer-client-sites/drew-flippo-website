"use client";

import { useEffect, useRef, useState } from "react";

type Clip = {
  src: string;
  label: string;
};

const clips: Clip[] = [
  { src: "/images/gallery/trapping/trapping-hero.mov", label: "Trapping" },
  { src: "/videos/burn.mov", label: "Prescribed Burn" },
  { src: "/videos/drill.mov", label: "Drilling" },
  { src: "/videos/turkey.mov", label: "Turkey" },
];

export default function VideoLoop() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // When the clip index changes, load and play the new source
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    const playPromise = v.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Autoplay was blocked — user can still tap to play
      });
    }
  }, [index]);

  const handleEnded = () => {
    setIndex((i) => (i + 1) % clips.length);
  };

  const current = clips[index];

  return (
    <div className="space-y-5">
      <div className="relative aspect-video w-full overflow-hidden bg-forest-950 border border-white/8">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleEnded}
          className="absolute inset-0 h-full w-full object-cover"
          key={current.src}
        >
          <source src={current.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.4)]" />

        {/* Current label */}
        <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-forest-950/70 backdrop-blur-sm px-3 py-1.5 border border-white/10">
          <span className="inline-block w-1.5 h-1.5 bg-amber-400 animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.25em] text-white uppercase">
            {current.label}
          </span>
        </div>
      </div>

      {/* Track / indicator row */}
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          {clips.map((clip, i) => (
            <button
              key={clip.src}
              onClick={() => setIndex(i)}
              aria-label={`Play ${clip.label}`}
              className={`h-1 w-10 transition-colors ${
                i === index ? "bg-amber-500" : "bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
        <span className="text-[11px] font-semibold tracking-[0.2em] text-white/25 uppercase">
          {String(index + 1).padStart(2, "0")} / {String(clips.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
