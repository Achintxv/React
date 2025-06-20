import React from "react";
import { GoDotFill } from "react-icons/go";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="bg-yellow-500 rounded-t-2xl w-full min-h-screen"
    >
      <h1 className="text-[4vw] text-black tracking-tighter leading-none p-20">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-zinc-500 border-t-1 flex p-6">
        <div className="w-1/2">
          <h1 className="text-black text-[5vw]">Our approach:</h1>
          <button className="px-5 py-3 font-semibold bg-black rounded-3xl flex items-center tracking-tighter gap-6 hover:bg-white hover:text-black cursor-pointer">
            READ MORE <GoDotFill />
          </button>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-2xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
