"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  const particles = [
    { size: 6, left: "4%", top: "8%", delay: 0 },
    { size: 10, left: "17%", top: "18%", delay: 0.8 },
    { size: 14, left: "31%", top: "35%", delay: 1.4 },
    { size: 8, left: "47%", top: "12%", delay: 2 },
    { size: 12, left: "62%", top: "29%", delay: 0.4 },
    { size: 18, left: "76%", top: "48%", delay: 1.2 },
    { size: 7, left: "91%", top: "18%", delay: 2.2 },
    { size: 11, left: "8%", top: "67%", delay: 1.7 },
    { size: 15, left: "23%", top: "82%", delay: 0.6 },
    { size: 8, left: "42%", top: "72%", delay: 2.5 },
    { size: 13, left: "58%", top: "87%", delay: 1 },
    { size: 9, left: "83%", top: "76%", delay: 1.9 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--sea-50)] via-[var(--background)] to-[var(--sea-100)]" />

      {/* Central glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(191,228,214,.55),transparent_70%)]
          blur-3xl
        "
      />

      {/* Soft upper glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[450px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(255,255,255,.65),transparent_70%)]
          blur-3xl
        "
      />

      {/* Floating particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            duration: 4 + (index % 4),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white/70"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      {/* Very subtle bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </div>
  );
}