import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Signin from "./Pages/signin";
import Singup from "./Pages/Singup";
import Profile from "./Pages/Profile";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Singup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
