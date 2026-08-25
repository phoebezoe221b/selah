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
          Appears after scrolling beyond the hero
      ========================================================= */}

      <motion.div
        initial={false}
        animate={{
          opacity: showCornerSelah ? 1 : 0,
          x: showCornerSelah ? 0 : -160,
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
            px-5
            py-2.5
            shadow-[0_15px_40px_rgba(0,0,0,.18)]
            backdrop-blur-md
            sm:px-6
            sm:py-3
          "
        >
          <span
            className="
              whitespace-nowrap
              font-serif
              text-base
              tracking-[0.22em]
              text-white
              sm:text-lg
              sm:tracking-[0.28em]
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
          min-h-[100svh]
          overflow-hidden
          bg-[var(--background)]
        "
      >
        {/* Cinematic Background */}
        <HeroBackground />

        {/* =====================================================
            MAIN HERO CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[100svh]
            flex-col
            items-center
            justify-center
            px-4
            pb-24
            pt-16
            text-center
            sm:px-6
            sm:pb-20
            sm:pt-20
          "
        >
          {/* =====================================================
              STANLEY RHEMA CALVIN
          ===================================================== */}

          <div className="w-full max-w-full overflow-visible">
            <AnimatedName />
          </div>

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
              mt-6
              max-w-[330px]
              text-[10px]
              uppercase
              leading-5
              tracking-[0.22em]
              text-[var(--muted)]
              sm:mt-8
              sm:max-w-xl
              sm:text-sm
              sm:tracking-[0.3em]
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
              mt-7
              w-full
              max-w-[calc(100vw-32px)]
              sm:mt-10
              sm:max-w-4xl
              md:mt-12
            "
          >
            {/* =================================================
                SELAH TITLE
            ================================================= */}

            <h2
              className="
                font-serif
                text-4xl
                tracking-[0.22em]
                text-[var(--sea-900)]
                sm:text-5xl
                sm:tracking-[0.3em]
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
                mt-4
                h-14
                w-full
                max-w-3xl
                overflow-hidden
                rounded-lg
                border
                border-[var(--gold)]
                bg-[var(--sea-800)]
                shadow-[0_20px_60px_rgba(0,0,0,.15)]
                sm:mt-5
                sm:h-16
                sm:rounded-xl
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
                  w-20
                  -skew-x-12
                  bg-white/20
                  blur-md
                  sm:w-32
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
                  px-3
                "
              >
                <span
                  className="
                    whitespace-nowrap
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-white
                    sm:text-xs
                    sm:tracking-[0.35em]
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