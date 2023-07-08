import React from 'react'

export default function Profil() {

   const email = localStorage.getItem("email");   
   const name = localStorage.getItem("name");
   const picture = localStorage.getItem("picture");
   const usernames = localStorage.getItem("usernames");

   if (!email) {
    window.location.href="/Login";
   }
  return (
    <div class="p-16">
      <div class="mt-24 bg-white p-8 shadow">
        {" "}
        <div class="grid grid-cols-1 md:grid-cols-3">
          {" "}
          <div class="order-last mt-20 grid grid-cols-3 text-center md:order-first md:mt-0">
            {" "}
            <div>
              {" "}
              <p class="text-xl font-bold text-gray-700">22</p>{" "}
              <p class="text-gray-400">Friends</p>{" "}
            </div>{" "}
            <div>
              {" "}
              <p class="text-xl font-bold text-gray-700">10</p>{" "}
              <p class="text-gray-400">Photos</p>{" "}
            </div>{" "}
            <div>
              {" "}
              <p class="text-xl font-bold text-gray-700">89</p>{" "}
              <p class="text-gray-400">Comments</p>{" "}
            </div>{" "}
          </div>{" "}
          <div class="relative">
            {" "}
            <div class="absolute inset-x-0 top-0 mx-auto -mt-24 flex h-48 w-48 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shadow-2xl">
              {picture ? (
                <img
                  src={picture}
                  class="h-24 w-auto rounded-full"
                  alt="profile"
                />
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
                  class="h-24 w-auto rounded-full"
                  alt="profile"
                />
              )}
            </div>{" "}
          </div>{" "}
          <div class="mt-32 flex justify-between space-x-8 md:mt-0 md:justify-center">
            <button class="transform rounded bg-blue-400 px-4 py-2 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg">
              {" "}
              Connect
            </button>{" "}
            <button class="transform rounded bg-gray-700 px-4 py-2 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg">
              {" "}
              Message
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div class="mt-20 border-b pb-12 text-center">
          {name ? (
            <h1 class="text-4xl font-medium text-gray-700">
              {name}
              <span class="font-light text-gray-500">27</span>
            </h1>
          ) : (
            <>
            <h1 class="text-4xl mb-2 font-medium text-gray-700">
              {usernames}             
            </h1>
            <h3>{email}</h3>
            </>
          )}
          <p class="mt-3 font-light text-gray-600">Bucharest, Romania</p>{" "}
          <p class="mt-8 text-gray-500">ENFJ - Creative and Happy Person</p>{" "}
        </div>{" "}
        <div class="mt-12 flex flex-col justify-center">
          {" "}
          <p class="text-center font-light text-gray-600 lg:px-16">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>{" "}
          <button class="mt-4 px-4 py-2  font-medium text-indigo-500">
            {" "}
            Show more
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
