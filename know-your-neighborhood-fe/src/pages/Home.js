import React from "react";
import "../index.css";

export default function Home() {
  

  return (
    <>
      <div class="container mx-auto px-6 py-36 text-center">
        <div class="mx-auto max-w-lg">
          <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            Get involved, get connected, know your neighborhood.{" "}
         
          </h1>
          <p class="mt-6 text-gray-500 dark:text-gray-300">
            Discover your neighborhood's unique personalities, talents, and
            resources. Join us in building a stronger community.
          </p>
          <button class="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">
            Get Started
          </button>
        </div>

        <div class="mt-10 flex justify-center">
          <img
            class="h-96 w-full rounded-xl bg-bottom object-cover object-center lg:w-4/5"
            src="https://images.pexels.com/photos/4262010/pexels-photo-4262010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Family"
          />
        </div>
      </div>
    </>
  );
}
