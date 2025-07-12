import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosinstance";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null);
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      seterror("Please enter a valid email!");
      return;
    }
    if (!password) {
      seterror("Please enter the password!");
      return;
    }
    seterror("");

    //API call

    try {
      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });
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
          <form action="" className="flex flex-col py-1" onSubmit={handleLogin}>
            <h4 className="text-xl mb-5 font-semibold">Login</h4>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="Email"
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
              Login
            </button>
            <p className="text-sm text-center mt-2">
              Not registered yet?{" "}
              <Link
                to="/signup"
                className="underline font-semibold text-sky-600"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
