import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState(''); // State for new password
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
    const [message, setMessage] = useState(''); // Feedback message
    const [successMessage, setSuccessMessage] = useState(''); // Success feedback

    const params = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form default submission
        if (!newPassword || !confirmPassword) {
            setMessage('Both fields are required.');
        } else if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match.');
        } else {
            try {
                const { data } = await axios.post(
                    `${import.meta.env.VITE_APP_API_URL}/resetpassword/${params.token}`,
                    { password: newPassword, token: params.token }
                );
                if (data.success) {
                    setSuccessMessage('Password reset successful! You can now log in.');
                    setMessage('');
                } else {
                    setMessage('Password reset failed. Please try again.');
                }
            } catch (error) {
                setMessage('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <form
                    onSubmit={handleSubmit} // Form submission handler
                    className="bg-slate-400 flex flex-col gap-8 my-20 p-12 rounded w-[40rem]"
                >
                    <h2 className="text-4xl text-center">Set New Password</h2>
                    <p className="text-xl">
                        Please enter and confirm your new password.
                    </p>
                    <div className="flex flex-col gap-1">
                        <input
                            type="password" // New password field
                            value={newPassword} // Bind to state
                            onChange={(e) => setNewPassword(e.target.value)} // Update state
                            className="bg-gray-200 p-3 rounded w-[35rem]"
                            placeholder="Enter your new password"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <input
                            type="password" // Confirm password field
                            value={confirmPassword} // Bind to state
                            onChange={(e) => setConfirmPassword(e.target.value)} // Update state
                            className="bg-gray-200 p-3 rounded w-[35rem]"
                            placeholder="Confirm your new password"
                            required
                        />
                    </div>
                    {message && <p className="text-red-500 text-xl text-center">{message}</p>} {/* Error feedback */}
                    {successMessage && (
                        <>
                            <p className="text-black text-xl text-center">{successMessage}</p>
                            <button
                                className="bg-green-500 hover:bg-green-700 px-3 py-2 rounded-xl text-white mt-4"
                                onClick={() => navigate('/login')} // Correctly navigate to login page
                            >
                                Login Now
                            </button>
                        </>
                    )} {/* Success feedback */}
                    <div className="text-end">
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
    );
};

export default ResetPassword;
