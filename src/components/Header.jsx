import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="shadow-2xl py-4 flex items-center justify-between top-0 sticky bg-white  ">
      <div>
        <Link
          to="/"
          className="hover:text-pink-500 transition font-bold font-georgia text-2xl pl-10"
        >
          BabyGal
        </Link>
      </div>
      <nav className="md:flex space-x-12 text-lg font-serif text-black pr-10 hidden">
        <Link to="/courses" className="hover:text-blue-300 transition">
          Courses
        </Link>
        <Link to="/services" className="hover:text-blue-300 transition">
          Services
        </Link>
        <Link to="/events" className="hover:text-blue-300 transition">
          Events
        </Link>
        <Link to="/organizations" className="hover:text-blue-300 transition">
          Organizations
        </Link>
        <Link to="/contact" className="hover:text-blue-300 transition">
          Contact
        </Link>
      </nav>
      <div className="pr-10">
        <Link to={"/login"}>
          <button className="text-black font-serif px-4 py-2 border border-pink-500 rounded-xl hover:bg-pink-500 hover:text-black transition">
            Login/Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
