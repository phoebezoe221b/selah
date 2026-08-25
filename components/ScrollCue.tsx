"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollCue() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 2.6,
      }}
      className="
        absolute
        bottom-8
        flex
        flex-col
        items-center
        md:bottom-10
      "
    >
      <p
        className="
          text-[10px]
          uppercase
          tracking-[0.45em]
          text-[var(--muted)]
          md:text-xs
        "
      >
        Scroll
      </p>

      <motion.div
        animate={{
          y: [0, 9, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown
          size={28}
          strokeWidth={1.5}
          className="mt-3 text-[var(--gold)]"
        />
      </motion.div>
    </motion.div>
  );
}