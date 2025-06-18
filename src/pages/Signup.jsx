import React from 'react'
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div>
        <section className="bg-slate-300 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-start">Sign Up</h2>
            <form>
                <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                    Enter Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border rounded"
                    required
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
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
                <Link to={"/signup"}>
                <button
                type="submit"
                className="w-full bg-pink-500 text-white font-bold py-2 rounded"
                >
                Sign Up
                </button>
                </Link>
            </form>
            </div>
        </section>
    </div>
  )
}

export default Signup