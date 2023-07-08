import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

export default function Foot() {
  return (
    <footer className="bg-blueGray-200 relative border pb-6 pt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="fonat-semibold text-blueGray-700 text-3xl">
              Let's keep in touch!
            </h4>
            <h5 className="text-blueGray-600 mb-2 mt-0 text-lg">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mb-6 mt-6 lg:mb-0">
              <button
                className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 text-center font-normal text-blue-600 shadow-lg outline-none focus:outline-none"
                type="button"
              >
                <h3>
                  <AiOutlineTwitter />
                </h3>
              </button>
              <button
                className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-blue-800 shadow-lg outline-none focus:outline-none"
                type="button"
              >
                <AiFillFacebook />
              </button>
              <button
                className="mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-pink-400 shadow-lg outline-none focus:outline-none"
                type="button"
              >
                <AiFillInstagram />
              </button>
              <button
                className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-red-600 shadow-lg outline-none focus:outline-none"
                type="button"
              >
                <AiFillYoutube />
              </button>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="ml-auto w-full px-4 lg:w-4/12">
                <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                      href="About"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                      href="#"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                      href="#"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                      href="#"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                      href="Terms"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                      href="Contact"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-blueGray-300 my-6" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center md:w-4/12">
            <div className="text-blueGray-500 py-1 text-sm font-semibold">
              Copyright © <span id="get-current-year">2023</span>
              <a
                href="#"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              >
                {" "}
                Know-Your-Neighborhood
              </a>
              <a
                href="#"
                className="text-blueGray-500 hover:text-blueGray-800 ms-1"
              >
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
