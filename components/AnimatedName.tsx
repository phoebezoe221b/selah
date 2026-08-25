"use client";

import { motion } from "framer-motion";

export default function AnimatedName() {
  const words = [
    {
      text: "Stanley",
      className: "text-[var(--sea-900)]",
    },
    {
      text: "Rhema",
      className: "italic text-[var(--gold)] text-[1.08em]",
    },
    {
      text: "Calvin",
      className: "text-[var(--sea-900)]",
    },
  ];

  return (
    <div className="w-full overflow-visible px-1">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.16,
            },
          },
        }}
        className="
          flex
          w-full
          flex-nowrap
          items-center
          justify-center
          whitespace-nowrap
          font-serif
          font-medium

          gap-1
          text-[clamp(1.85rem,8vw,2.5rem)]

          sm:gap-3
          sm:text-5xl

          md:gap-6
          md:text-7xl

          lg:text-8xl
        "
      >
        {words.map((word) => (
          <motion.span
            key={word.text}
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className={word.className}
          >
            {word.text}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}