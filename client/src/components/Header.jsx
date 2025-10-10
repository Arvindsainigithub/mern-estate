import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-sm p-2">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to={"/"}>
          <h1 className=" text-sm sm:text-lg font-bold flex flex-wrap">
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700">State</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline hover:underline cursor-pointer">
              About
            </li>
          </Link>
          <Link to={"/sign-in"}>
            {" "}
            <li className="hover:underline cursor-pointer">Singin</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
