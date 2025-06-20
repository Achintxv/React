import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex gap-5 px-10 items-center">
      <div className="container w-1/2 h-[60vh]">
        <div className="relative flex items-center justify-center card w-full h-full rounded-xl bg-green-800">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute text-[12px] left-10 bottom-10 text-yellow-100 border-1 px-2 py-1 border-yellow-100 rounded-2xl">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="container w-1/2 h-[60vh] flex gap-5">
        <div className="relative card w-1/2 h-full rounded-xl flex items-center justify-center bg-[#212121] border-1 border-white">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-5 bottom-10 text-yellow-100 text-[12px] border-1 px-2 py-1 border-yellow-100 rounded-2xl uppercase">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className=" relative card w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center border-1 border-white">
          <img
            className="w-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-5 bottom-10 text-[12px] text-yellow-100 border-1 px-2 py-1 border-yellow-100 rounded-2xl uppercase">
            Businesss Bootcamp Alumini
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
