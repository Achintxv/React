import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function SearchBar({ value, onChange, handleSearch, onClearsSearch }) {
  return (
    <div className="bg-zinc-100 rounded-md flex items-center w-80 py-1 px-2">
      <input
        type="text"
        className="outline-none w-full"
        placeholder="Search Notes"
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose className="mr-1 cursor-pointer text-zinc-500 hover:text-black" onClick={onClearsSearch}/>
      )}
      <FaMagnifyingGlass className="cursor-pointer text-zinc-500 hover:text-blue-500" onClick={handleSearch}/>
    </div>
  );
}

export default SearchBar;
