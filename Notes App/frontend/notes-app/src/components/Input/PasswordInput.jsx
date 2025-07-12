import React, { useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

function PasswordInput({ value, onChange, placeholder }) {
  const [isShowPassword, setisShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setisShowPassword(!isShowPassword);
  };

  return (
    <div className="flex items-center bg-transparent border-1 border-zinc-400 px-1 rounded mb-4">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent outline-none rounded p-1"
      />
      {isShowPassword ? (
        <FaRegEye
          size={20}
          className="cursor-pointer text-sky-500"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <FaEyeSlash
          size={20}
          className="cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  );
}

export default PasswordInput;
