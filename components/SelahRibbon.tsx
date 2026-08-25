"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function SelahRibbon() {
  const { scrollY } = useScroll();

  const [showCornerSelah, setShowCornerSelah] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show the small corner SELAH after leaving the opening hero + SELAH area.
    setShowCornerSelah(latest > 650);
  });

  return (
    <>
      {/* =========================================================
          CINEMATIC SELAH SECTION
      ========================================================= */}

      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--sea-50)] to-[var(--sea-100)]" />

        {/* Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
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
            bg-[radial-gradient(circle,rgba(185,226,212,.45),transparent_70%)]
            blur-3xl
          "
        />

        {/* Floating particles */}
        {[
          [6, 8, 6],
          [17, 22, 10],
          [29, 38, 14],
          [41, 55, 18],
          [54, 72, 22],
          [67, 89, 6],
          [80, 10, 10],
          [92, 27, 14],
          [8, 44, 18],
          [21, 61, 22],
          [34, 78, 6],
          [47, 95, 10],
          [60, 12, 14],
          [73, 29, 18],
          [86, 46, 22],
          [97, 63, 6],
        ].map(([left, top, size], index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white/70"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [-12, 12, -12],
            }}
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Main Content */}
        <div className="relative z-10 flex min-h-[90vh] items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-5xl"
          >
            {/* SELAH title */}
            <h2
              className="
                text-center
                font-serif
                text-6xl
                tracking-[0.35em]
                text-[var(--sea-900)]
                md:text-8xl
                lg:text-[8rem]
              "
            >
              SELAH
            </h2>

            {/* Ribbon */}
            <div
              className="
                relative
                mx-auto
                mt-8
                h-20
                w-full
                max-w-4xl
                overflow-hidden
                rounded-xl
                border
                border-[var(--gold)]
                bg-[var(--sea-800)]
                shadow-[0_20px_60px_rgba(0,0,0,.15)]
              "
            >
              <motion.div
                animate={{
                  x: ["-120%", "420%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-y-0
                  w-32
                  -skew-x-12
                  bg-white/20
                  blur-md
                "
              />

              <div className="flex h-full items-center justify-center">
                <span className="text-sm uppercase tracking-[0.4em] text-white md:text-xl">
                  Pause • Reflect • Listen
                </span>
              </div>
            </div>

           
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FIXED CORNER SELAH
      ========================================================= */}

      <motion.div
        initial={false}
        animate={{
          opacity: showCornerSelah ? 1 : 0,
          x: showCornerSelah ? 0 : -120,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-1/2
          z-[9999]
          -translate-y-1/2
        "
      >
        <div
          className="
            flex
            items-center
            rounded-r-full
            border
            border-l-0
            border-[var(--gold)]
            bg-[var(--sea-800)]
            px-6
            py-3
            shadow-[0_15px_40px_rgba(0,0,0,.18)]
          "
        >
          <span
            className="
              whitespace-nowrap
              font-serif
              text-lg
              tracking-[0.28em]
              text-white
            "
          >
            SELAH
          </span>
        </div>
      </motion.div>
    </>
  );
}