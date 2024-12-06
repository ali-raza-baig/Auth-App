import React, { useState } from 'react'
import Layout from '../Components/Layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ForgetPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email.trim() === '') {
      setMessage('Please enter a valid email address.')
    } else {
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_APP_API_URL}/forgetpassword`, { email })
        alert(data.message)
        if (data.success === true) {
          navigate("/login")
        }
      } catch (error) {
        console.log(error)
      }

    }
  }

  return (
    <Layout>
      <div>
        <div className="flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit} // Form submission handler
            className="bg-slate-400 flex flex-col gap-8 my-20 p-12 rounded w-[40rem]"
          >
            <h2 className="text-4xl text-center">Find Your Account</h2>
            <p className="text-xl">
              Please enter your register email address to grt password reset link.
            </p>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                value={email} // Bind input value to state
                onChange={handleInputChange} // Handle input changes
                className="bg-gray-200 p-3 rounded w-[35rem]"
                placeholder="Enter your Email Address"
              />
            </div>
            {message && <p className="text-red-500 text-center">{message}</p>} {/* Display feedback */}
            <div className="space-x-3 text-end">
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white px-3 py-2 rounded-xl"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ForgetPassword
