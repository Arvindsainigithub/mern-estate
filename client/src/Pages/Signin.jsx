import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailur,
  signInSuccess,
} from "../redux/user/userSlice.js";
import Oauth from "./Oauth.jsx";

export default function Singup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormDate] = useState({});
  const {loading,error}=useSelector((state)=>state.user)
  const handlerChange = (e) => {
    setFormDate({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const data = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const res = await data.json();
      if (res.success == false) {
        dispatch(signInFailur(res.message));
        return;
      }
      dispatch(signInSuccess(res));
      console.log("Here is success message:",res)
      navigate("/");
    } catch (error) {
      dispatch(signInFailur(error.message));
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-4">Sign-Up</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-5">
        <input
          id="email"
          type="email"
          className="border rounded-lg p-3 bg-white"
          placeholder="Enter Email"
          onChange={handlerChange}
        />
        <input
          id="password"
          type="password"
          className="border rounded-lg p-3 bg-white"
          placeholder="Enter Password"
          onChange={handlerChange}
        />
        <button className="bg-slate-700 p-3 rounded-lg hover:opacity-95 disabled:opacity-80 uppercase text-white cursor-pointer">
          {loading ? "Loading" : "Sign-In"}
        </button>
      <Oauth/>
      </form>
      <div className="flex my-4">
        <p>Dont have an Account</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700 ml-2">Sign-Up</span>
        </Link>
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
}
