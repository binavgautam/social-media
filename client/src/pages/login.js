import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useField } from "../hooks/useField";

export default function Login() {
  const username = useField();
  const password = useField();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    username.reset();
    password.reset();
  };

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpeg" alt="iphone" />
      </div>
      <div className="flex flex-col w-2/5">
        <h1 className="flex justify-center">
          <img
            className="flex mt-2 mb-4"
            src="/images/logo.png"
            alt="Instagram"
          />
        </h1>
        <div className="py-2">
          <form onSubmit={onSubmit}>
            <input
              className="test-sm text-gray w-full mr-3 py-5 px-4 h-2 outline-none"
              placeholder="Username"
              {...username.fields}
            />
            <input
              className="test-sm text-gray w-full mr-3 py-5 px-4 h-2 outline-none mt-3 "
              placeholder="Password"
              {...password.fields}
            />
            <button></button>
          </form>
        </div>
        <div className="flex flex-col items-center ">
          <div>
            <button className="bg-blue-500 hover:bg-blue-00 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </div>
          <div className="py-5">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
