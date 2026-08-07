"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedReflection() {
  return (
    <section className="relative py-32 bg-[var(--background)]">
      <div className="section">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center uppercase tracking-[0.45em] text-sm text-[var(--gold)]">
            Featured Reflection
          </p>

          <h2 className="mt-4 text-center font-serif text-5xl text-[var(--sea-800)]">
            The Good Shepherd
          </h2>

          <div className="gold-divider my-12" />

          <Link href="/reflections/the-good-shepherd">
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                group
                overflow-hidden
                rounded-[36px]
                border
                border-[var(--border)]
                bg-white
                shadow-[0_30px_80px_rgba(0,0,0,.08)]
                cursor-pointer
              "
            >
              <div className="grid lg:grid-cols-2">

                {/* IMAGE */}

                <div className="relative h-[420px] overflow-hidden">

                  <motion.div
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="h-full w-full"
                  >
                    <Image
                      src="/images/good-shepherd.jpg"
                      alt="The Good Shepherd"
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>

                {/* CONTENT */}

                <div className="flex flex-col justify-center p-12">

                  <h3 className="font-serif text-5xl leading-tight text-[var(--sea-900)]">
                    The Good Shepherd
                  </h3>

                  <p className="mt-8 text-lg leading-9 text-[var(--muted)]">
                    My worries and anxieties weigh heavily; they pull me down
                    like Earth's gravity. Yet the Good Shepherd reached out
                    with firm yet tender hands, lifted me upon His shoulders,
                    and restored my soul.
                  </p>

                  <motion.div
                    whileHover={{
                      x: 8,
                    }}
                    className="
                      mt-12
                      flex
                      items-center
                      gap-3
                      text-lg
                      font-medium
                      text-[var(--sea-700)]
                    "
                  >
                    Read Reflection →

                  </motion.div>

                </div>

              </div>
            </motion.div>
          </Link>

        </motion.div>

      </div>
    </section>
  );
}