import React from 'react'

function Signup() {
  return (
    <div>
       <div className="flex flex-col justify-center items-center">
        <form className="bg-slate-400 flex flex-col gap-5 my-20 p-12 rounded">
          <h2 className="text-4xl text-center">SIGNUP</h2>
          <div className="flex flex-col gap-1">
            <label>Username</label>
            <input
              type="text"
              className="bg-gray-200 p-3 rounded w-96"
              placeholder="Enter your UserName"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="Email"
              className="bg-gray-200 p-3 rounded w-96"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              type="Email"
              className="bg-gray-200 p-3 rounded w-96"
              placeholder="Enter your Password"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Confirm Password</label>
            <input
              type="Email"
              className="bg-gray-200 p-3 rounded w-96"
              placeholder="Re-Enter your Password"
            />
          </div>
          <div className='my-2'>
            <button className="bg-black text-white w-96 p-2 rounded-2xl">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
