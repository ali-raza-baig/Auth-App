import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registeruser } from '../Redux/UserSlice';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const loading = useSelector((state) => state.user.loading)
  const error = useSelector((state) => state.user.error)
  const success = useSelector((state) => state.user.user)

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        return console.log("Password must be same.")
      }
      const registerData = {
        name: username,
        email,
        password
      }
      dispatch(registeruser(registerData))

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (success && success.success === true) {
      navigate('/Verification')
    }
  }, [success, error])

  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex flex-col justify-center items-center w-full max-w-2xl">
        <form
          className="bg-slate-400 flex flex-col gap-5 my-20 p-8 md:p-12 rounded w-full"
          onSubmit={handleSubmitSignup}
        >
          <h2 className="text-3xl md:text-4xl text-center">SIGNUP</h2>
          <div className="flex flex-col gap-1">
            <label>Username</label>
            <input
              type="text"
              className="bg-gray-200 p-3 rounded w-full"
              placeholder="Enter your UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="email"
              className="bg-gray-200 p-3 rounded w-full"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              type="password"
              className="bg-gray-200 p-3 rounded w-full"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Confirm Password</label>
            <input
              type="password"
              className="bg-gray-200 p-3 rounded w-full"
              placeholder="Re-Enter your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="my-2">
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white w-full p-2 rounded-2xl"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
