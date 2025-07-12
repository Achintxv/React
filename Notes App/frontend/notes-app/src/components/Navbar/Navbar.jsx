import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Navbar({ userInfo, onSearchNote, handleClearSearch }) {
  const [searchQuery, setsearchQuery] = useState("");

  const handleSearch = () => {
    if(searchQuery){
      onSearchNote(searchQuery)
    }
  };

  const onClearsSearch = () => {
    setsearchQuery("");
    handleClearSearch()
  };

  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div className="w-full flex items-center justify-between bg-white drop-shadow px-4 py-3 ">
        <h1 className="text-xl font-semibold">Notes</h1>
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setsearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearsSearch={onClearsSearch}
        />
        <ProfileInfo userInfo={userInfo} onLogout={onLogout}></ProfileInfo>
      </div>
    </>
  );
}

export default Navbar;
