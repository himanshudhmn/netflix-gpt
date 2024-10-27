import React, { useState } from "react";
import Header from "./Header";

const Login = (props) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInClick = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-3xl pb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-black bg-opacity-60 border-solid border border-gray-500 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-black bg-opacity-60 border-solid border border-gray-500 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-black bg-opacity-60 border-solid border border-gray-500 rounded-lg"
        />
        <button className="py-2 my-8 bg-red-600 w-full rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInClick} className="cursor-pointer">
          <span className="text-gray-400">
            {isSignIn ? "New to Netflix?" : "Already a member ?"}
          </span>{" "}
          {isSignIn ? "Sign up now." : "Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
