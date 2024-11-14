import React from "react";

function Login() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <form className="bg-slate-400 flex flex-col gap-8 my-20 p-12 rounded">
          <h2 className="text-4xl text-center">Login</h2>
          <div className="flex flex-col gap-1">
            <label>Email or Phone No:</label>
            <input
              type="text"
              className="bg-gray-200 p-3 rounded w-96"
              placeholder="Enter your email address or phone number"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              type="password"
              className="bg-gray-200 p-3 rounded w-96"
              placeholder="Enter your Password"
            />
            <p className="text-end my-1">Forget password?</p>
          </div>
          <div>
            <button className="bg-black hover:bg-gray-800 text-white w-96 p-2 rounded-2xl">Login</button>
          </div>
          <div>
            <p className="text-center text-gray-800">Not a Member? <u><span>Signup Now</span></u></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
