import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkLoginValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  const toggleSignInClick = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkLoginValidation(
      emailRef.current?.value,
      pwdRef.current?.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current?.value,
        pwdRef.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: "",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current?.value,
        pwdRef.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG}
          alt="background-img"
          className="h-screen object-cover md:h-fit"
        />
      </div>
      <form
        className="absolute bg-black p-12 w-9/12 md:w-3/12 my-52 md:my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
        onClick={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl pb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-black bg-opacity-60 border-solid border border-gray-500 rounded-lg"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-black bg-opacity-60 border-solid border border-gray-500 rounded-lg"
        />
        <input
          ref={pwdRef}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-black bg-opacity-60 border-solid border border-gray-500 rounded-lg"
        />
        <p className="text-sm text-red-600">{errorMessage}</p>
        <button
          className="py-2 my-8 bg-red-600 w-full rounded-md"
          onClick={handleButtonClick}
        >
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
