

import Logo from "../Images/logo.png";
import axios from "axios";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";




export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const Swal = require("sweetalert2");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        formData
      );

      const { email } = response.data;
      const { usernames } = response.data;
      localStorage.setItem("email", email);
      localStorage.setItem("usernames", usernames);

      console.log(response.data);
       window.location.href = 'Profile';

      Swal.fire("Good job!", email, "success");
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data); // Error message from the server
      } else {
        setError("An error occurred during login."); // Generic error message
      }
    }
  };

  //Google LOGIN
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          const { email } = res.data;
          const { name } = res.data;
          const { picture } = res.data;

          console.log(user.access_token);
          console.log(res.data);
          setProfile(res.data);
          localStorage.setItem("email", email);
          localStorage.setItem("name", name);
          localStorage.setItem("picture", picture);
          window.location.href = "Profile";
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div class="mx-auto my-28 flex w-full max-w-sm overflow-hidden rounded-lg border bg-white shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      <div
        class="hidden bg-cover bg-center lg:block lg:w-1/2"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500027014421-46ccc843776a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')`,
        }}
      ></div>

      <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div class="mx-auto flex justify-center">
          <img class="h-7 w-auto sm:h-8" src={Logo} alt="" />
        </div>

        <p class="mt-3 text-center text-xl text-gray-600 dark:text-gray-200">
          Welcome back!
        </p>

        <div class="mt-4 flex items-center justify-between"></div>
        <form onSubmit={handleSubmit}>
          <div class="mt-4">
            <label
              class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              <a
                href="#"
                class="text-xs text-gray-500 hover:underline dark:text-gray-300"
              >
                Forget Password?
              </a>
            </div>

            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              id="loggingPassword"
              class="block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
              type="password"
            />
          </div>

          <div class="mt-6">
            <button
              type="submit"
              class="w-full transform rounded-lg bg-blue-800 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>

        <button
          className="mt-4 flex w-full justify-center gap-3 rounded-lg border bg-white px-3 py-2 hover:bg-slate-50"
          onClick={() => login()}
        >
          <div className="mt-0.5 text-xl">
            <FcGoogle />
          </div>
          <div className="font-normal">Sign in with Google</div>
        </button>

        <div class="mt-4 flex items-center justify-center gap-1">
          <span class=" border-b dark:border-gray-600 md:w-1/6"></span>
          <p className="">Don’t have an account yet?</p>
          <a
            href="Registration"
            class="text-xs uppercase text-blue-500 hover:underline dark:text-gray-400"
          >
            sign up
          </a>
          <span class=" border-b dark:border-gray-600 md:w-1/6"></span>
        </div>
      </div>
    </div>
  );
}
