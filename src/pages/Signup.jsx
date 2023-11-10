import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUsers } from "../actions/userActions";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const validateForm = () => {
    const errors = {
      name: "",
      email: "",
      password: "",
      cPassword: "",
    };

    if (!name) {
      errors.name = "Full name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is not valid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (password !== cPassword) {
      errors.cPassword = "Passwords do not match";
    }

    return errors;
  };

  const registerUser = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.values(validationErrors).every((val) => val === "")) {
      const user = {
        name,
        email,
        password,
      };

      // Dispatch your registration action here
      dispatch(registerUsers(user));

      toast.success("Registration Successful");
      navigate("/login");
    } else {
      setFormErrors(validationErrors);
    }
  };

  return (
    <div className="bg-blue-200 h-screen flex justify-center items-center">
      <div className="bg-white w-4/5 md:w-2/5 p-4">
        <h2 className="text-2xl my-4 text-center">Register</h2>
        <form onSubmit={registerUser}>
          <div className="mb-3">
            <label htmlFor="fullName">
              <strong>Full Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your fullname"
              autoComplete="off"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control rounded-0"
            />
            <div className="text-danger">{formErrors.name}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control rounded-0"
            />
            <div className="text-danger">{formErrors.email}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control rounded-0"
            />
            <div className="text-danger">{formErrors.password}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="cPassword">
              <strong> Confirm Password</strong>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              autoComplete="off"
              name="cPassword"
              value={cPassword}
              onChange={(e) => setCpassword(e.target.value)}
              className="form-control rounded-0"
            />
            <div className="text-danger">{formErrors.cPassword}</div>
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-1">
            Register
          </button>
        </form>
        <Link to="/login" className="">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
