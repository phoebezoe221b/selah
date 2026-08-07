"use client";

import { motion } from "framer-motion";

const words = [
  {
    text: "Stanley",
    className: "text-[var(--sea-800)]",
    initial: { opacity: 0, x: -80, y: 10 },
  },
  {
    text: "Rhema",
    className: "text-[var(--gold)] italic",
    initial: { opacity: 0, y: 70 },
  },
  {
    text: "Calvin",
    className: "text-[var(--sea-800)]",
    initial: { opacity: 0, x: 80, y: 10 },
  },
];

export default function AnimatedLetters() {
  return (
    <div className="text-center">

      <h1
        className="
          flex
          flex-wrap
          justify-center
          items-center
          gap-5

          font-serif

          text-[54px]
          sm:text-[72px]
          md:text-[96px]
          lg:text-[122px]

          font-medium
          tracking-[-0.04em]
          leading-none
        "
      >
        {words.map((word, index) => (
          <motion.span
            key={word.text}
            initial={word.initial}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              delay: index * 0.45,
              duration: 1,
              ease: "easeOut",
            }}
            className={word.className}
          >
            {word.text}
          </motion.span>
        ))}
      </h1>

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
          delay: 1.6,
          duration: 0.8,
        }}
        className="
          mt-8

          text-base
          md:text-lg

          uppercase

          tracking-[0.45em]

          text-[var(--muted)]
        "
      >
        Thoughts Rooted in Scripture
      </motion.p>
    </div>
  );
}