import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Singup() {
  const navigate = useNavigate();
  const [formData, setFormDate] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const handlerChange = (e) => {
    setFormDate({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await fetch("/api/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const res = await data.json();
      if(res.success == false){
        setLoading(false)
        setError(res.message)
        return
      }
      setLoading(false)
      setError(null)
      navigate("/sign-in")
    } catch (error) {
      return error.message;
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-4">Sign-Up</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-5">
        <input
          id="name"
          type="text"
          className="border rounded-lg p-3 bg-white"
          placeholder="Enter Name"
          onChange={handlerChange}
        />
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
          {loading ? "Loading" : "Sign-Up"}
        </button>
      </form>
      <div className="flex my-4">
        <p>Have an Account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700 ml-2">Sign-In</span>
        </Link>
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
}
