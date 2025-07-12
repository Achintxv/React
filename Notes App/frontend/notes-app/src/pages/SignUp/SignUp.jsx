import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { validateEmail } from "../../utils/helper";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosinstance";

function SignUp() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name) {
      seterror("Please enter your name!");
      return;
    }
    if (!validateEmail(email)) {
      seterror("Please enter valid email");
      return;
    }
    if (!password) {
      seterror("Please enter password");
      return;
    }
    seterror("");

    //API call
    try {
      const response = await axiosInstance.post("/create-account", {
        fullName: name,
        email: email,
        password: password,
      });
      if(response.data && response.data.error){
        seterror(response.data.message)
        return
      }
      if(response.data && response.data.accessToken){
        localStorage.setItem("token", response.data.accessToken)
        navigate("/dashboard")
      }
    } catch (error) {
      if(error.response && error.response.data && error.response.data.message){
        seterror(error.response.data.message)
      }else{
        seterror("An unexpected error occured. Please try again!")
      }
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-center justify-center mt-20">
        <div className="border border-zinc-200 p-4 rounded shadow">
          <form className="flex flex-col py-1" onSubmit={handleSignup}>
            <h4 className="text-xl mb-5 font-semibold">SignUp</h4>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              className="border-1 rounded outline-none border-zinc-400 mb-4 p-1"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="border-1 rounded outline-none border-zinc-400 mb-4 p-1"
            />
            <PasswordInput
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            {error && <p className="text-red-500 text-sm pb-1">{error}</p>}
            <button
              type="submit"
              className="cursor-pointer bg-sky-500 text-white rounded pb-1 hover:bg-sky-700"
            >
              Create an account{" "}
            </button>
            <p className="text-sm text-center mt-2">
              Already have an account?
              <Link
                to="/login"
                className="underline ml-1 font-semibold text-sky-600"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
