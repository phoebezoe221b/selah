"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ReflectionLibrary() {
  return (
    <section className="relative bg-[var(--sea-50)] py-20 sm:py-24 md:py-28">
      <div className="mx-auto w-[calc(100%-32px)] max-w-6xl sm:w-[calc(100%-48px)] md:px-2">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="
              text-center
              text-sm
              uppercase
              tracking-[0.35em]
              text-[var(--gold)]
              sm:text-base
              sm:tracking-[0.45em]
            "
          >
            Library
          </p>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-center
              text-base
              leading-7
              text-[var(--muted)]
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            A growing collection of reflections, poems and meditations
            inspired by the living Word of God.
          </p>

          <div
            className="
              mx-auto
              my-10
              h-px
              w-24
              bg-gradient-to-r
              from-transparent
              via-[var(--gold)]
              to-transparent
              sm:my-14
              sm:w-32
            "
          />
        </motion.div>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10">

          {/* ===================================================
              THE GOOD SHEPHERD
          =================================================== */}

          <motion.a
            href="/reflections/the-good-shepherd"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="
              group
              block
              overflow-hidden
              rounded-[26px]
              border
              border-[var(--border)]
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,.07)]
              sm:rounded-[32px]
              sm:shadow-[0_30px_80px_rgba(0,0,0,.08)]
              md:rounded-[36px]
            "
          >
            <div className="grid lg:grid-cols-2">

              {/* IMAGE */}

              <div
                className="
                  relative
                  h-[260px]
                  overflow-hidden
                  sm:h-[320px]
                  md:h-[380px]
                  lg:h-[420px]
                "
              >
                <Image
                  src="/images/good-shepherd.jpg"
                  alt="The Good Shepherd"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              {/* CONTENT */}

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  p-6
                  sm:p-8
                  md:p-10
                  lg:p-12
                "
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-[var(--gold)]
                    sm:text-sm
                    sm:tracking-[0.35em]
                  "
                >
                  Reflection
                </p>

                <h3
                  className="
                    mt-3
                    font-serif
                    text-3xl
                    leading-tight
                    text-[var(--sea-900)]
                    sm:mt-4
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  The Good Shepherd
                </h3>

                <p
                  className="
                    mt-5
                    text-base
                    leading-7
                    text-[var(--muted)]
                    sm:mt-7
                    sm:text-lg
                    sm:leading-8
                    md:mt-8
                    md:leading-9
                  "
                >
                  My worries and anxieties weigh heavily; they pull me down
                  like Earth&apos;s gravity. Yet the Good Shepherd reached out
                  with firm yet tender hands, lifted me upon His shoulders,
                  and restored my soul.
                </p>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-base
                    font-medium
                    text-[var(--sea-700)]
                    transition-all
                    duration-300
                    group-hover:gap-5
                    group-hover:text-[var(--gold)]
                    sm:mt-10
                    sm:text-lg
                    md:mt-12
                  "
                >
                  Read Reflection →
                </div>
              </div>
            </div>
          </motion.a>


          {/* ===================================================
              GOODNESS WITHIN
          =================================================== */}

          <motion.a
            href="/reflections/goodness-within"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="
              group
              block
              overflow-hidden
              rounded-[26px]
              border
              border-[var(--border)]
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,.07)]
              sm:rounded-[32px]
              sm:shadow-[0_30px_80px_rgba(0,0,0,.08)]
              md:rounded-[36px]
            "
          >
            <div className="grid lg:grid-cols-2">

              {/* IMAGE */}

              <div
                className="
                  relative
                  h-[260px]
                  overflow-hidden
                  sm:h-[320px]
                  md:h-[380px]
                  lg:h-[420px]
                "
              >
                <Image
                  src="/images/goodness-within.png"
                  alt="Goodness Within"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              {/* CONTENT */}

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  p-6
                  sm:p-8
                  md:p-10
                  lg:p-12
                "
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-[var(--gold)]
                    sm:text-sm
                    sm:tracking-[0.35em]
                  "
                >
                  Reflection
                </p>

                <h3
                  className="
                    mt-3
                    font-serif
                    text-3xl
                    leading-tight
                    text-[var(--sea-900)]
                    sm:mt-4
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  Goodness Within
                </h3>

                <p
                  className="
                    mt-5
                    text-base
                    leading-7
                    text-[var(--muted)]
                    sm:mt-7
                    sm:text-lg
                    sm:leading-8
                    md:mt-8
                    md:leading-9
                  "
                >
                  Biblical goodness is more than simply being a good person.
                  It is the goodness of God working within us and flowing
                  outward through a life that remains connected to Him.
                </p>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-base
                    font-medium
                    text-[var(--sea-700)]
                    transition-all
                    duration-300
                    group-hover:gap-5
                    group-hover:text-[var(--gold)]
                    sm:mt-10
                    sm:text-lg
                    md:mt-12
                  "
                >
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