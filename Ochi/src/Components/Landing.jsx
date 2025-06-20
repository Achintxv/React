import { Button } from "bootstrap";
import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1 "
    >
      <div className="font-bold text-[5vw] px-10 mt-40 leading-[5vw] tracking-tighter]">
        {["WE CREATE", "EYE-OPENING", "PRESENTATION"].map((item, index) => {
          return (
            <div className="masker flex overflow-hidden w-fit items-center">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8.5vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[8.5vw] h-[4.2vw] rounded relative top-[0.4vw]"
                >
                  <img
                    className="rounded w-full h-full"
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt=""
                  />
                </motion.div>
              )}
              <h1>{item}</h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-700 mt-20 flex justify-between items-center p-5">
        {[
          "For public and private companies",
          "From the first pitch of IPO",
        ].map((item, index) => (
          <p>{item}</p>
        ))}
        <div className="start flex items-center gap-2">
          <button className="border-1 text-white px-2.5 py-1 rounded-full hover:bg-white hover:text-black cursor-pointer">
            START A PROJECT
          </button>
          <div className="w-8 h-8 border-1 flex items-center justify-center rounded-full hover:bg-white hover:text-black cursor-pointer">
            <FaLongArrowAltUp className="rotate-[45deg]" />
          </div>
        </div>
      </div>
      <h1 className="flex justify-center text-zinc-700 ml-10">Scroll down</h1>
    </div>
  );
}

export default Landing;
