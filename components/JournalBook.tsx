"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface JournalBookProps {
  title: string;
  scripture: string;
  slug: string;
}

export default function JournalBook({
  title,
  scripture,
  slug,
}: JournalBookProps) {
  return (
    <Link href={`/reflections/${slug}`}>
      <motion.div
        className="group relative h-[420px] w-[280px] cursor-pointer"
        whileHover="hover"
        initial="initial"
      >
        {/* Book */}
        <motion.div
          variants={{
            initial: {
              rotateY: 0,
              y: 0,
            },
            hover: {
              rotateY: -25,
              y: -20,
            },
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            relative 
            h-full 
            w-full
            rounded-r-xl
            bg-[#24302A]
            shadow-2xl
            transform-gpu
            preserve-3d
          "
          style={{
            transformStyle: "preserve-3d",
          }}
        >

          {/* Spine */}
          <div
            className="
              absolute 
              left-0 
              top-0
              h-full
              w-8
              rounded-l-xl
              bg-[#1B241F]
            "
            style={{
              transform:
                "translateZ(-20px)",
            }}
          />


          {/* Cover */}
          <div
            className="
              flex
              h-full
              flex-col
              items-center
              justify-center
              rounded-r-xl
              border
              border-[#B89B5E]/40
              px-8
              text-center
            "
          >

            <p
              className="
              mb-6
              text-sm
              tracking-[0.4em]
              text-[#B89B5E]
              "
            >
              SELAH
            </p>


            <h2
              className="
              font-serif
              text-4xl
              uppercase
              leading-tight
              text-[#F8F5EF]
              "
            >
              {title}
            </h2>


            <div
              className="
              my-8
              text-3xl
              text-[#B89B5E]
              "
            >
              ✝
            </div>


            <p
              className="
              text-sm
              italic
              text-[#F8F5EF]/70
              "
            >
              {scripture}
            </p>


            <motion.div
              variants={{
                initial:{
                  opacity:0,
                  y:20
                },
                hover:{
                  opacity:1,
                  y:0
                }
              }}
              className="
              mt-8
              text-sm
              tracking-wider
              text-[#B89B5E]
              "
            >
              Open Reflection →
            </motion.div>

          </div>


          {/* Pages */}
          <div
            className="
            absolute
            right-0
            top-4
            h-[calc(100%-32px)]
            w-4
            bg-[#E8E0D0]
            "
            style={{
              transform:
              "translateX(14px)"
            }}
          />

        </motion.div>

      </motion.div>
    </Link>
  );
}