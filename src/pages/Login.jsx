import React from 'react'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <section className="bg-slate-300 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl border border-pink-200 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-start">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email" >
                Enter Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Enter Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-bold font-serif py-2 rounded"
            >
              Login
            </button>
            <p className="text-gray-500">
              Dont have Account?{" "}
              <Link to="/signup" className="text-pink-500">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
  