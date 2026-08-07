"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface Props {
  progress: MotionValue<number>;
}

export default function ScrollStory({
  progress,
}: Props) {

  const y = useTransform(progress,[.35,.75],[220,0]);

  const opacity = useTransform(progress,[.35,.55],[0,1]);

  const scale = useTransform(progress,[.45,.75],[.8,1]);

  return (

<motion.section

style={{
y,
opacity,
scale
}}

className="
sticky
top-0
h-screen
flex
items-center
justify-center
pointer-events-none
"
>

<div className="text-center">

<h2

className="
font-serif
text-[90px]
md:text-[170px]
tracking-[.22em]
font-semibold
text-[#D4AF37]
drop-shadow-[0_0_40px_rgba(212,175,55,.35)]
"
>

SELAH

</h2>

<p

className="
mt-8
text-xl
leading-9
text-[#496964]
"
>

Pause.

<br/>

Reflect.

<br/>

Rest in the Word.

</p>

</div>

</motion.section>

  );

}