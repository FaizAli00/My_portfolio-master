import React from 'react';

const Login = () => {
  return (
    <section id="login" className="py-14 h-screen bg-gray-700">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-slate-200 text-center">Login</h2>
        <div className="max-w-xl mx-auto bg-gray-600 p-8 shadow-lg rounded-lg">
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block text-xl text-slate-200 mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-xl text-slate-200 mb-2">Password</label>
              <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-slate-200 font-semibold py-2 px-4 rounded">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
