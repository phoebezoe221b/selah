"use client";

import { motion } from "framer-motion";

export default function WhyIWrite() {
  return (
    <section className="relative py-32">

      <div className="section">

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <p
            className="
              uppercase
              tracking-[0.45em]
              text-sm
              text-[var(--gold)]
            "
          >
            Why I Write
          </p>

          <h2
            className="
              mt-5
              font-serif
              text-5xl
              md:text-6xl
              text-[var(--sea-800)]
            "
          >
            Every Reflection Begins with a Pause
          </h2>

          <div className="gold-divider my-10" />

          <div
            className="
              rounded-[36px]
              border
              border-[var(--border)]
              bg-white/80
              p-10
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              backdrop-blur
            "
          >
            <p
              className="
                text-lg
                leading-9
                text-[var(--muted)]
              "
            >
              I do not write because I have all the answers.
              <br />
              <br />
              I write because God continues to teach me through His Word.
              These reflections are moments of stillness—simple meditations
              that become poems, prayers, questions, answers, and reminders
              of His faithfulness.
              <br />
              <br />
              My hope is that as you pause here, you will hear His voice
              more clearly, find hope in His promises, and discover the
              quiet joy of walking with Christ each day.
            </p>

            <p
              className="
                mt-10
                font-serif
                text-3xl
                italic
                text-[var(--gold)]
              "
            >
              — Stanley Rhema Calvin
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}