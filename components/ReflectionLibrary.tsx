"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ReflectionLibrary() {
  return (
    <section className="relative bg-[var(--sea-50)] py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-lg uppercase tracking-[0.45em] text-[var(--gold)]">
            Library
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-[var(--muted)]">
            A growing collection of reflections, poems and meditations
            inspired by the living Word of God.
          </p>

          <div className="mx-auto my-14 h-px max-w-32 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
        </motion.div>

        {/* Cards */}
        <div className="mx-auto max-w-6xl space-y-10">

          {/* THE GOOD SHEPHERD */}
          <motion.a
            href="/reflections/the-good-shepherd"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="group block overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-[0_30px_80px_rgba(0,0,0,.08)]"
          >
            <div className="grid lg:grid-cols-2">

              {/* Image */}
              <div className="relative h-[360px] overflow-hidden md:h-[420px]">
                <Image
                  src="/images/good-shepherd.jpg"
                  alt="The Good Shepherd"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-12">

                <p className="text-sm uppercase tracking-[0.35em] text-[var(--gold)]">
                  Reflection
                </p>

                <h3 className="mt-4 font-serif text-4xl leading-tight text-[var(--sea-900)] md:text-5xl">
                  The Good Shepherd
                </h3>

                <p className="mt-8 text-lg leading-9 text-[var(--muted)]">
                  My worries and anxieties weigh heavily; they pull me down
                  like Earth&apos;s gravity. Yet the Good Shepherd reached out
                  with firm yet tender hands, lifted me upon His shoulders,
                  and restored my soul.
                </p>

                <div className="mt-12 flex items-center gap-3 text-lg font-medium text-[var(--sea-700)] transition-all duration-300 group-hover:gap-5 group-hover:text-[var(--gold)]">
                  Read Reflection →
                </div>

              </div>
            </div>
          </motion.a>


          {/* GOODNESS WITHIN */}
          <motion.a
            href="/reflections/goodness-within"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="group block overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-[0_30px_80px_rgba(0,0,0,.08)]"
          >
            <div className="grid lg:grid-cols-2">

              {/* Image */}
              <div className="relative h-[360px] overflow-hidden md:h-[420px]">
                <Image
                  src="/images/goodness-within.png"
                  alt="Goodness Within"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-12">

                <p className="text-sm uppercase tracking-[0.35em] text-[var(--gold)]">
                  Reflection
                </p>

                <h3 className="mt-4 font-serif text-4xl leading-tight text-[var(--sea-900)] md:text-5xl">
                  Goodness Within
                </h3>

                <p className="mt-8 text-lg leading-9 text-[var(--muted)]">
                  Biblical goodness is more than simply being a good person.
                  It is the goodness of God working within us and flowing
                  outward through a life that remains connected to Him.
                </p>

                <div className="mt-12 flex items-center gap-3 text-lg font-medium text-[var(--sea-700)] transition-all duration-300 group-hover:gap-5 group-hover:text-[var(--gold)]">
                  Read Reflection →
                </div>

              </div>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}