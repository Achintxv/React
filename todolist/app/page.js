"use client";
import React, { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function page() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = <h1>No task available</h1>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex items-center mb-2 justify-between">
            <h5 className="flex items-center gap-3 text-[1.5vw] font-semibold">
              <FaDotCircle className="text-[1.3vw]" />
              {t.title}
            </h5>
            <h6 className="text-gray-300">
              {t.desc}
            </h6>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="text-[2vw] text-white bg-red-600 rounded p-1.5 hover:bg-red-800"
            >
              <MdDelete />
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-3xl text-center">
        My To-do List
      </h1>
      <form onSubmit={submitHandler} className="bg-zinc-900">
        <input
          type="text"
          className="border-1 border-white text-white rounded-md m-5 p-1"
          placeholder="Enter task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-1 border-white text-white rounded-md m-5 p-1"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-red-600 px-3 py-1.5 text-white rounded-xl hover:bg-red-800">
          Add
        </button>
      </form>
      <hr />
      <div className="p-5 text-white bg-zinc-700 border-b-1">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default page;
