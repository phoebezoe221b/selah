"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface JournalCardProps {
  title: string;
  description: string;
  verse: string;
  href: string;
  featured?: boolean;
}

export default function JournalCard({
  title,
  description,
  verse,
  href,
  featured = false,
}: JournalCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -12,
        rotateX: 4,
        rotateY: -4,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-[var(--border)]
        bg-[#fffdf9]
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        transition-all
      `}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Gold Top Strip */}

      <div className="h-2 w-full bg-[var(--gold)]" />

      {/* Cover */}

      <div className="p-8 md:p-10">

        <span
          className="
            inline-block
            rounded-full
            bg-[var(--sea-100)]
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[var(--sea-800)]
          "
        >
          {featured ? "Featured Reflection" : "Reflection"}
        </span>

        <h3
          className="
            mt-6
            font-serif
            text-4xl
            text-[var(--sea-800)]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-6
            leading-8
            text-[var(--muted)]
          "
        >
          {description}
        </p>

        <div className="gold-divider mt-8 mb-8" />

        <p
          className="
            italic
            text-[var(--gold)]
          "
        >
          {verse}
        </p>

        <Link
          href={href}
          className="
            mt-10
            inline-flex
            items-center
            gap-3
            font-medium
            text-[var(--sea-800)]
            transition-all
            group-hover:gap-5
          "
        >
          Open Reflection

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Decorative Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-52
          w-52
          rounded-full
          bg-[var(--sea-100)]
          opacity-40
          blur-3xl
        "
      />
    </motion.article>
  );
}