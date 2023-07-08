import React from "react";
import { useState,useEffect } from "react";
import Logo from "../Images/logo.png";
import { googleLogout} from "@react-oauth/google";

export default function Head() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Get data from Local Storage
    const storedEmail = localStorage.getItem("email");
    // Update component state with the retrieved data
    setEmail(storedEmail);
  }, []);
 const logOut = () => {
   googleLogout();
   localStorage.clear();

   window.location.href = "Login";
   
 };
   

  

  return (
    <nav class="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2">
        <a href="/" class="flex items-center">
          <img className="w-40" src={Logo} alt="Logo"></img>
        </a>
        <div class="flex md:order-2">
          <div>
            {email ? (
              <div class="flex justify-between gap-4">
                <a href="profile">
                  <p className=" mt-1 pl-3 pr-4 pt-3 font-medium text-gray-900 md:bg-transparent md:p-0 md:hover:text-blue-700 ">
                    {" "}
                    Profile
                  </p>
                </a>
                <button
                  className="mr-3 rounded-lg bg-blue-700 px-6 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                  onClick={logOut}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex justify-between gap-3">
                <a href="Registration">
                  <button
                    type="button"
                    class="mr-3 rounded-lg bg-blue-700 px-6 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                  >
                    Sign Up
                  </button>
                </a>
                <a href="Login">
                  <button
                    type="button"
                    class="mr-3 rounded-lg bg-blue-700 px-6 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                  >
                    Sign In
                  </button>
                </a>
              </div>
            )}
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li>
              <a
                href="/"
                class="block rounded  py-2 pl-3 pr-4  text-gray-900 md:bg-transparent md:p-0 md:hover:text-blue-700 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="About"
                class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="Contact"
                class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
