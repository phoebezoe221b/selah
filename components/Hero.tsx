"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      {/* Background */}
      <div className="absolute inset-0">

        {/* Main Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--sea-50)] via-[var(--background)] to-[var(--sea-100)]" />

        {/* Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-20
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            blur-3xl
            bg-[radial-gradient(circle,rgba(191,228,214,.55),transparent_70%)]
          "
        />

        {/* Floating Particles */}
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{
              width: 6 + (i % 5) * 4,
              height: 6 + (i % 5) * 4,
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <div className="overflow-hidden">
          <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="
    font-serif
    text-5xl
    sm:text-6xl
    md:text-7xl
    lg:text-8xl
    font-medium
    flex
    flex-wrap
    items-center
    justify-center
    gap-4
    md:gap-8
  "
>
  <span className="text-[var(--sea-900)]">Stanley</span>

  <span
    className="
      italic
      text-[var(--gold)]
      text-[1.08em]
    "
  >
    Rhema
  </span>

  <span className="text-[var(--sea-900)]">Calvin</span>
</motion.h1>
</div>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.7,
            duration: 1,
          }}
          className="
            mt-10
            max-w-xl
            text-lg
            uppercase
            tracking-[0.35em]
            text-[var(--muted)]
          "
        >
          Thoughts Rooted in Scripture
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.5,
          }}
          className="absolute bottom-12 flex flex-col items-center"
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.45em]
              text-[var(--muted)]
            "
          >
            Scroll
          </p>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
          >
            <ChevronDown
              size={28}
              className="mt-4 text-[var(--gold)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}