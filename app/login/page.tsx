"use client";
import { FaSquareGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { MdKey } from "react-icons/md";
import loginCover from "@/public/login/login.jpg";
import Image from "next/image";
import { useState } from "react";

function Login() {
  const [tog, settog] = useState(true);

  const handleClick = () => {
    settog(!tog);
  };

  return (
    <div className="min-h-fit frm w-full py-8 rounded-lg md:py-0 md:w-2/3 mx-auto my-8 bg-secondary md:rounded-md">
      <div className="hidden md:relative md:flex md:w-1/2 h-fit ">
        <Image
          src={loginCover}
          className="w-full h-full rounded-lg object-cover"
          alt=""
        />
        <div className="absolute inset-0 p-4 w-full h-full flex flex-col justify-end items-start bg-gradient-to-t from-black/70 via-black/50 to-black/30 rounded-lg">
          <h1 className="text-6xl font-raleway font-black text-white">
            Welcome to DRAFT!
          </h1>
          <p className="text-xl font-medium text-white mt-8 mb-4">
            Ready to write?{" "}
            <span className="underline font-bold">
              {tog ? "Log in" : "Sign up"}
            </span>{" "}
            now to join our community and write your thought freely.
          </p>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 h-full">
        <div className="text-xl text-center font-semibold mb-4">
          <h1 className="text-2xl font-bold">{tog ? "Log In" : "Sign Up"}</h1>
        </div>
        <div className={`${tog ? "fcm text-center min-w-full" : "hidden"}`}>
          <div className="flex flex-col gap-4 px-8 md:px-16 w-full py-4">
            <div className="min-w-full">
              <div className="font-medium text-2xl text-gray-600 absolute mt-4 ml-2 w-11">
                <MdAlternateEmail />
              </div>
              <input
                className="peer py-4 pl-10 border border-red-200 outline-red-500 w-full rounded-md"
                placeholder="Email address"
                type="email"
              />
              <p className="-mt-4 invisible peer-invalid:visible peer-invalid:mt-2 text-pink-400 text-sm">
                Please provide a valid email address.
              </p>
            </div>
            <div>
              <div className="font-medium text-2xl text-gray-600 absolute mt-4 ml-2 w-11">
                <MdKey />
              </div>
              <input
                className="peer py-4 pl-10 border border-red-200 outline-red-500 w-full rounded-md"
                placeholder="Password"
                type="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              />
              <p className="-mt-4 invisible peer-invalid:visible peer-invalid:mt-2 text-pink-400 text-sm">
                Min. length 8, must include atlest one lowcase, uppercase and
                number.
              </p>
            </div>
            <div>
              <div>
                <button className="w-full bg-accent text-lg py-4 rounded-md">
                  {tog ? "Log in" : "Sign up"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${tog ? "hidden" : "fcm w-full text-center"}`}>
          <div className="flex flex-col gap-4 px-8 md:px-16 w-full py-4">
            <div>
              <div className="font-medium text-2xl text-gray-600 absolute mt-4 ml-2 w-11">
                <MdAlternateEmail />
              </div>
              <input
                className="py-4 pl-10 border border-red-200 outline-red-500 w-full rounded-md"
                placeholder="Email address"
                type="email"
              />
            </div>
            <div>
              <div className="font-medium text-2xl text-gray-600 absolute mt-4 ml-2 w-11">
                <MdKey />
              </div>
              <input
                className="py-4 pl-10 border border-red-200 outline-red-500 w-full rounded-md"
                placeholder="Password"
                type="password"
              />
            </div>
            <div>
              <div>
                <button className="w-full bg-accent text-lg py-4 rounded-md">
                  {tog ? "Log in" : "Sign up"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fcm min-w-76 gap-2">
          <h3 className="text-xl my-4">
            {tog ? "or, log in with" : "or, sign up with"}
          </h3>
          <div className="frm gap-4">
            <FaGoogle size="1.5rem" />
            <FaSquareFacebook size="1.5rem" />
            <FaSquareGithub size="1.5rem" />
          </div>
          <p>
            or
            <button onClick={handleClick} className="text-pink-500 mt-4 ml-2">
              {tog ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
