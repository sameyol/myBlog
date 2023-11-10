import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-blue-200 h-screen flex justify-center items-center">
        <div className="bg-white w-4/5 md:w-2/5 p-4">
          <h2 className="text-2xl my-4 text-center">Register</h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3 flex flex-col">
              <label htmlFor="email" className="text-gray-700">
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
              <label htmlFor="password" className="text-gray-700">
                <strong>Password</strong>
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
              value="Register"
              className="bg-blue-600 text-white w-full py-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-300"
            />
          </form>
          <Link to="/login" className="text-blue-500 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
