import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="bg-green-900 py-10 w-full rounded-t-2xl"
    >
      <div className="text border-t-2 border-b-2 border-zinc-500 w-full overflow-hidden whitespace-nowrap flex items-center">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
          className="text-[16vw] leading-none font-semibold pr-5 mb-6 tracking-tighter"
        >
          WE ARE OCHI.
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
          className="text-[16vw] leading-none font-semibold pr-5 mb-6 tracking-tighter"
        >
          WE ARE OCHI.
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
