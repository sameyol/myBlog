import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { Footer, Navbar } from "../components";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(isFetching);
  return (
    <>
    <Navbar />
    <div className="bg-blue-200 h-screen flex justify-center items-center">
      <div className="bg-white w-4/5 md:w-2/5 p-4">
        <h2 className="text-2xl my-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3 flex flex-col">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              name="email"
              className="w-full py-2 outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="password">
              <strong>password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              name="password"
              className="w-full py-2 outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Login"
            disabled = {isFetching}
            className="bg-blue-600 text-white w-full py-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-red-200"
          />
        </form>
        <Link to="/signup" className="">
          Don't have an account? Register
        </Link>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default Login;
