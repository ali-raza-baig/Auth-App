import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex flex-col justify-center items-center w-full max-w-lg">
        <form className="bg-slate-400 flex flex-col gap-8 my-20 p-8 md:p-12 rounded w-full">
          <h2 className="text-3xl md:text-4xl text-center">Login</h2>
          <div className="flex flex-col gap-1">
            <label>Email or Phone No:</label>
            <input
              type="text"
              className="bg-gray-200 p-3 rounded w-full"
              placeholder="Enter your email address or phone number"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              type="password"
              className="bg-gray-200 p-3 rounded w-full"
              placeholder="Enter your Password"
            />
            <p className="text-end my-1 text-sm md:text-base">
              <a href="#" className="text-blue-500 hover:underline">
                Forget password?
              </a>
            </p>
          </div>
          <div>
            <button className="bg-black hover:bg-gray-800 text-white w-full p-2 rounded-2xl">
              Login
            </button>
          </div>
          <div>
            <p className="text-center text-gray-800">
              Not a Member?{" "}
              <a href="#" className="text-blue-500 underline hover:no-underline">
                Signup Now
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
