"use client";

import { motion } from "framer-motion";

export default function ScripturePause() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[var(--sea-50)]
          via-white
          to-[var(--sea-100)]
        "
      />

      <div className="section relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            mx-auto
            max-w-4xl
            rounded-[36px]
            border
            border-[var(--border)]
            bg-white/70
            p-12
            text-center
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            backdrop-blur
          "
        >
          <p
            className="
              uppercase
              tracking-[0.45em]
              text-sm
              text-[var(--gold)]
            "
          >
            Scripture Pause
          </p>

          <div className="gold-divider my-8" />

          <blockquote
            className="
              font-serif
              text-4xl
              leading-relaxed
              text-[var(--sea-800)]
              md:text-5xl
            "
          >
            “The Lord is my Shepherd;
            <br />
            I shall not want.”
          </blockquote>

          <p
            className="
              mt-8
              text-lg
              tracking-[0.2em]
              uppercase
              text-[var(--muted)]
            "
          >
            Psalm&nbsp;23:1
          </p>
        </motion.div>

      </div>
    </section>
  );
}