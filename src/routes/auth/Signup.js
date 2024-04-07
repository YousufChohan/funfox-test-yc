import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/images/bg-example.png";
import { VscClose } from "react-icons/vsc";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../constants/url";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.password ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.mobile ||
      !formData.confirmPassword
    ) {
      window.alert("Please fill all the fields.");
      return;
    }
    try {
      await signUp(); // Call the signUp function
      // Additional logic after successful signup if needed
    } catch (error) {
      setErrors(error);

      // Handle error if needed
      console.error("Signup failed:", error);
    }
  };

  const signUp = async () => {
    try {
      const response = await axios.post(`${REACT_APP_BASE_URL}/signup`, {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        mobile: formData.mobile, // Assuming mobile is added to the formData
      });

      console.log("Signup response:", response.data.message);
      // Additional logic after successful signup if needed

      if (response.data.message === "Account Created Sucessfully") {
        window.alert("Your account has been created. Please Login.");
        navigate("/login");
      } else {
        window.alert("Error in creating an account, please try again later.");
      }
    } catch (error) {
      setErrors(error);

      console.error("Signup failed:", error);

      // Handle signup error

      throw error;
    }
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <>
      <div
        className="flex py-16 w-100 items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="mx-4 flex flex-col py-6 px-6 rounded-md bg-slate-400 w-[25rem] relative items-center">
          {/* Use a Link component for navigation */}
          <Link
            to="#"
            className="w-5 h-5 absolute right-3 top-3 cursor-pointer"
            onClick={handleGoBack}
          >
            <VscClose className="w-5 h-5 font-bold" />
          </Link>
          <h2 className="text-center font-bold text-primary">
            Signup to funfox
          </h2>

          {/* Signup Form */}
          <form className="mt-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`appearance-none border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs italic">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`appearance-none border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs italic">{errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`appearance-none border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>

            {/* mobile */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mobile"
              >
                mobile
              </label>
              <input
                type="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`appearance-none border ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs italic">{errors.mobile}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`appearance-none border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`appearance-none border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs italic">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>

            {/* Sign up prompt */}
            <p className="mt-4 text-gray-700">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
