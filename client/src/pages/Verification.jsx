import React from "react";

function Verification() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <form className="bg-slate-400 flex flex-col gap-8 my-20 p-12 rounded w-[40rem]">
          <h2 className="text-4xl text-center">Find Your Account</h2>
          <p className="text-xl text-center">
           Verify your account with OTP
          </p>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              className="bg-gray-200 text-center p-3 rounded w-[35rem]"
              placeholder="Enter One Time Password"
            />
          </div>
          <div className="space-x-3 text-center">
            <button className="bg-black hover:bg-gray-800 text-white w-[35rem] px-3 py-2 my-5 rounded-xl">
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Verification;
