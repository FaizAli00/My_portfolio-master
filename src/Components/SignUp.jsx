import React from 'react';

const Signup = () => {
  return (
    <section id="signup" className="py-16 bg-gray-600">
      <div className="container mx-auto ">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-slate-200 text-center">Sign Up</h2>
        <div className="max-w-xl mx-auto bg-gray-700 p-8 shadow-lg rounded-lg">
          <form>
            <div className="mb-6 ">
              <label htmlFor="name" className="block text-xl text-slate-200 mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your name" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-xl text-slate-200 mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-xl text-slate-200 mb-2">Password</label>
              <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-xl text-slate-200 mb-2">Retype Password</label>
              <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Re Enter your password" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-slate-200 font-semibold py-2 px-4 rounded">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
