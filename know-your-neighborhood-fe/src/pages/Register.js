
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

import backgroundImage from "../Images/Regist.jpg";
import Logo from "../Images/logo.png";
import Login from "./Login";


export default function Register() {
 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    usernames: "",
  });
  const [error, setError] = useState("");
   const Swal = require("sweetalert2");
const handleRegister = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      'http://localhost:8080/register',
      formData
    );
    
   Swal.fire("Good job!",(response.data), "success"); //for ceklis error for silang
   window.location.href='Login';

  } catch (error) {
    if (error.response && error.response.data) {
      setError(error.response.data); 
       alert("ikan");
    } else {
      alert("ikan"); 
    }
  }
};

  return (
    <div class="mx-auto my-28 flex w-full max-w-sm overflow-hidden rounded-lg border bg-white shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      <div
        class="hidden bg-cover bg-center lg:block lg:w-1/2"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div class="mx-auto flex justify-center">
          <img class="h-7 w-auto sm:h-8" src={Logo} alt="" />
        </div>

        <p class="mt-3 text-center text-xl font-semibold text-gray-600 dark:text-gray-200">
          Sign Up
        </p>

        <div class="mt-4 flex items-center justify-between"></div>

        <form onSubmit={handleRegister}>
          <div class="mt-4">
            <label
              class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.usernames}
              onChange={(e) =>
                setFormData({ ...formData, usernames: e.target.value })
              }
              required
              id="LoggingEmailAddress"
              class="block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
             
            />
          </div>
          <div class="mt-4">
            <label
              class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              id="LoggingEmailAddress"
              class="block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>

          <div class="mt-4">
            <div class="flex justify-between">
              <label
                class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
                for="loggingPassword"
              >
                Password
              </label>
            </div>

            <input
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              id="loggingPassword"
              class="block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
              type="password"
            />
          </div>
          <div className="text-right">
            <a
              href="google.com"
              class="text-xs text-gray-500 hover:underline dark:text-gray-300"
            >
              Forget Password?
            </a>
          </div>

          <div class="mt-6">
            <button
              type="submit"
              class="w-full transform rounded-lg bg-blue-800 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div class="mt-4 flex items-center justify-center gap-1">
          <span class=" border-b dark:border-gray-600 md:w-1/6"></span>
          <p className="">Don’t have an account yet?</p>
          <a
            href="Registration"
            class="text-xs uppercase text-blue-500 hover:underline dark:text-gray-400"
          >
            sign in
          </a>
          <span class=" border-b dark:border-gray-600 md:w-1/6"></span>
        </div>
      </div>
    </div>
  );
}
