"use client";

import { motion } from "framer-motion";

export default function SelahRibbon() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--sea-50)] to-[var(--sea-100)]" />

      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.5, 0.25],
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
          blur-3xl
          bg-[radial-gradient(circle,rgba(185,226,212,.45),transparent_70%)]
        "
      />

      <div className="relative z-10 w-full max-w-5xl">

        {/* SELAH */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 80,
            scale: .85,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: .5,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            text-center
            font-serif
            text-6xl
            md:text-8xl
            lg:text-[8rem]
            tracking-[0.35em]
            text-[var(--sea-900)]
          "
        >
          SELAH
        </motion.h2>

        {/* Ribbon */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .5,
            duration: 1,
          }}
          className="
            relative
            mx-auto
            mt-8
            h-20
            w-full
            max-w-4xl
            origin-center
            overflow-hidden
            rounded-xl
            border
            border-[var(--gold)]
            bg-[var(--sea-800)]
            shadow-[0_20px_60px_rgba(0,0,0,.15)]
          "
        >
          {/* Gold shimmer */}

          <motion.div
            animate={{
              x: ["-120%", "150%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "linear",
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

            <span
              className="
                text-xl
                uppercase
                tracking-[0.5em]
                text-white
              "
            >
              Pause • Reflect • Listen
            </span>

          </div>

        </motion.div>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .9,
            duration: .8,
          }}
          className="
            mx-auto
            mt-14
            max-w-3xl
            text-center
            text-xl
            leading-9
            text-[var(--muted)]
          "
        >
          <span className="font-semibold text-[var(--sea-800)]">
            Selah
          </span>{" "}
          is a quiet space where simple meditations become writings,
          poems, answers, and revelations through the living Word of God.
        </motion.p>

        <div className="gold-divider mt-14" />

      </div>

    </section>
  );
}