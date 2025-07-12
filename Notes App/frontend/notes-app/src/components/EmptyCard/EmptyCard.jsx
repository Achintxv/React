import React from "react";

function EmptyCard({ imgSrc, message }) {
  return (
    <div className="flex items-center justify-center mt-20 flex-col">
      <img src={imgSrc} alt="No notes" className="w-40" />
      <p className="w-1/2 text-sm font-md text-slate-700 text-center leading-7">
        {message}
      </p>
    </div>
  );
}

export default EmptyCard;
