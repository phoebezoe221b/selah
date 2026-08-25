"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import HeroBackground from "./HeroBackground";
import AnimatedName from "./AnimatedName";
import ScrollCue from "./ScrollCue";

export default function Hero() {
  const { scrollY } = useScroll();

  const [showCornerSelah, setShowCornerSelah] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowCornerSelah(latest > 650);
  });

  return (
    <>
      {/* =========================================================
          FIXED HORIZONTAL SELAH
          Appears on the left after the user scrolls past the hero
      ========================================================= */}

      <motion.div
        initial={false}
        animate={{
          opacity: showCornerSelah ? 1 : 0,
          x: showCornerSelah ? 0 : -140,
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
            rounded-r-full
            border
            border-l-0
            border-[var(--gold)]
            bg-[var(--sea-800)]
            px-6
            py-3
            shadow-[0_15px_40px_rgba(0,0,0,.18)]
            backdrop-blur-md
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

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[var(--background)]
        "
      >
        {/* Cinematic Background */}
        <HeroBackground />

        {/* Main Hero Content */}
        <div
          className="
            relative
            z-10
            flex
            min-h-screen
            flex-col
            items-center
            justify-center
            px-6
            pb-20
            pt-20
            text-center
          "
        >
          {/* =====================================================
              STANLEY RHEMA CALVIN
          ===================================================== */}

          <AnimatedName />

          {/* =====================================================
              TAGLINE
          ===================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-8
              max-w-xl
              text-sm
              uppercase
              tracking-[0.3em]
              text-[var(--muted)]
              md:mt-10
              md:text-lg
              md:tracking-[0.35em]
            "
          >
            Thoughts Rooted in Scripture
          </motion.p>

          {/* =====================================================
              SELAH
              Large SELAH on the FIRST SCREEN
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 1.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-10
              w-full
              max-w-4xl
              md:mt-12
            "
          >
            {/* SELAH Title */}

            <h2
              className="
                font-serif
                text-5xl
                tracking-[0.3em]
                text-[var(--sea-900)]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              SELAH
            </h2>

            {/* =================================================
                HORIZONTAL SELAH RIBBON
            ================================================= */}

            <div
              className="
                relative
                mx-auto
                mt-5
                h-16
                w-full
                max-w-3xl
                overflow-hidden
                rounded-xl
                border
                border-[var(--gold)]
                bg-[var(--sea-800)]
                shadow-[0_20px_60px_rgba(0,0,0,.15)]
                md:h-20
              "
            >
              {/* Moving Shine */}

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

              {/* Ribbon Text */}

              <div
                className="
                  relative
                  flex
                  h-full
                  items-center
                  justify-center
                "
              >
                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    text-white
                    md:text-lg
                    md:tracking-[0.5em]
                  "
                >
                  Pause • Reflect • Listen
                </span>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              SCROLL CUE
          ===================================================== */}

          <ScrollCue />
        </div>
      </section>
    </>
  );
}