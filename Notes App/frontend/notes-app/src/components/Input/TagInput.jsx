import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

function TagInput({ tags, setTags }) {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setinputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => 
                <span key={index} className="flex items-center text-sm bg-zinc-100 p-1 rounded">
              # {tag}
              <button
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              >
                <MdClose className="ml-1 bg-red-500 rounded hover:bg-red-700 text-white"/>
              </button>
            </span>
            )}
        </div>
      )}
      <div className="flex items-center gap-2 mt-2">
        <input
          type="text"
          value={inputValue}
          className="text-sm outline-none border border-zinc-400 p-1 rounded"
          placeholder="Add tags"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="flex items-center justify-center border rounded border-sky-600 hover:bg-sky-600"
          onClick={() => {
            addNewTag();
          }}
        >
          <MdAdd className="text-2xl text-sky-600 hover:text-white"></MdAdd>
        </button>
      </div>
    </div>
  );
}

export default TagInput;
