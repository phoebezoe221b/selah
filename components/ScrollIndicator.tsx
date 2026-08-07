"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2.2,
        duration: 1,
      }}
      className="mt-24 flex flex-col items-center"
    >
      <p
        className="
          text-sm
          uppercase
          tracking-[0.45em]
          text-[var(--muted)]
        "
      >
        Scroll
      </p>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mt-4"
      >
        <ChevronDown
          size={28}
          className="text-[var(--gold)]"
          strokeWidth={1.6}
        />
      </motion.div>
    </motion.div>
  );
}