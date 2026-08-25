"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const reflections = [
  {
    title: "The Good Shepherd",
    href: "/reflections/the-good-shepherd",
    available: true,
    featured: true,
  },
  {
    title: "Goodness Within",
  href: "/reflections/goodness-within",
  available: true,
  featured: false,
  },
  {
    title: "Peace in the Storm",
    available: false,
    featured: false,
  },
];

export default function ReflectionLibrary() {
  return (
    <section className="py-28 bg-[var(--sea-50)]">
      <div className="section">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center uppercase tracking-[0.45em] text-sm text-[var(--gold)]">
            Library
          </p>

          <h2 className="mt-4 text-center font-serif text-5xl text-[var(--sea-800)]">
            More Writings
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-[var(--muted)]">
            A growing collection of reflections, poems and meditations inspired
            by the living Word of God.
          </p>

          <div className="gold-divider my-14" />

          <div className="grid max-w-6xl mx-auto gap-8 md:grid-cols-2 lg:grid-cols-3">

            {reflections.map((reflection) => (
              <motion.div
                key={reflection.title}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[var(--border)]
                  bg-white
                  p-8
                  shadow-[0_20px_60px_rgba(0,0,0,.06)]
                "
              >

                {/* Featured Badge */}

                {reflection.featured && (
                  <span
                    className="
                      absolute
                      right-5
                      top-5
                      rounded-full
                      bg-[var(--gold)]
                      px-4
                      py-1
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-white
                    "
                  >
                    Featured
                  </span>
                )}

                <h3 className="font-serif text-4xl leading-tight text-[var(--sea-900)]">
                  {reflection.title}
                </h3>

                <div className="mt-8 h-px bg-[var(--sea-200)]" />

                {reflection.available ? (
                  <Link
                    href={reflection.href!}
                    className="
                      mt-8
                      inline-flex
                      items-center
                      text-lg
                      font-medium
                      text-[var(--sea-700)]
                      transition-colors
                      hover:text-[var(--gold)]
                    "
                  >
                    Read Writing →
                  </Link>
                ) : (
                  <p
                    className="
                      mt-8
                      italic
                      text-[var(--muted)]
                    "
                  >
                    Currently Being Written
                  </p>
                )}

              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}