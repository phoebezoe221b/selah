"use client";

import { motion } from "framer-motion";

const particles = [
  {
    left: "8%",
    top: "12%",
    size: 10,
    duration: 8,
    delay: 0,
  },
  {
    left: "22%",
    top: "72%",
    size: 18,
    duration: 10,
    delay: 1,
  },
  {
    left: "38%",
    top: "28%",
    size: 14,
    duration: 9,
    delay: 2,
  },
  {
    left: "52%",
    top: "58%",
    size: 22,
    duration: 11,
    delay: .5,
  },
  {
    left: "68%",
    top: "18%",
    size: 16,
    duration: 8,
    delay: 1.8,
  },
  {
    left: "82%",
    top: "78%",
    size: 12,
    duration: 9,
    delay: 2.3,
  },
  {
    left: "90%",
    top: "40%",
    size: 20,
    duration: 12,
    delay: 3,
  },
];

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Main Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[var(--sea-50)]
          via-[var(--background)]
          to-[var(--sea-100)]
        "
      />

      {/* Top Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(184,228,212,.45),transparent_70%)]
          blur-3xl
        "
      />

      {/* Floating Particles */}

      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white/70 shadow-md"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-6, 6, -6],
            opacity: [0.25, 0.9, 0.25],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bottom Fade */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-40
          w-full
          bg-gradient-to-t
          from-[var(--background)]
          to-transparent
        "
      />
    </div>
  );
}