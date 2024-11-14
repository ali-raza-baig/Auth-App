import React from 'react'

function ForgetPassword() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <form className="bg-slate-400 flex flex-col gap-8 my-20 p-12 rounded w-[40rem]">
          <h2 className="text-4xl text-center">Find Your Account</h2>
          <p className='text-xl'>Please enter your email address or mobile number to search for your account.</p>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              className="bg-gray-200 p-3 rounded w-[35rem]"
              placeholder="Enter your Email Address"
            />
          </div>
          <div className='space-x-3 text-end'>
            <button className="bg-black hover:bg-gray-800 text-white px-3 py-2 rounded-xl">Cancel</button>
            <button className='bg-black hover:bg-gray-800 text-white px-3 py-2 rounded-xl'>Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword
