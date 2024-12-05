import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
function Verification() {
  // State to handle OTP input
  const [otp, setOtp] = useState("");
  const navigate = useNavigate()

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_APP_API_URL}/varifyaccount`, { token: otp })
      // console.log(data)
      if (data.success === true) {
        navigate("/login");
      }
    } catch (error) {

    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-100">
      <div className="flex flex-col justify-center items-center w-full max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-400 flex flex-col gap-6 p-8 md:p-12 rounded w-full"
        >
          <p className="text-sm md:text-xl text-center text-gray-700">
            Verify your account with OTP
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="bg-gray-200 text-center p-3 rounded w-full"
              placeholder="Enter One Time Password"
              maxLength="6" // Example: OTP length restriction
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white w-full py-2 rounded-lg"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Verification;
