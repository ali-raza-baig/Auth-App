import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser } from '../Redux/UserSlice';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.user.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailOrPhone || !password) {
      alert("Please enter both email/phone and password");
      return;
    }
    const userCredentials = { email: emailOrPhone, password };
    await dispatch(loginuser(userCredentials));
  };

  useEffect(() => {
    if (user && user.success === true) {
      alert("Login Successfully");
      navigate("/")
    }
  }, [user])

  return (
    <Layout>
      <div className="flex justify-center items-center px-4">
        <div className="flex flex-col justify-center items-center w-full max-w-lg">
          <form
            className="bg-slate-400 flex flex-col gap-8 my-20 p-8 md:p-12 rounded w-full"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl md:text-4xl text-center">Login</h2>
            {error && typeof error === 'string' ? (
              <div className="text-red-500 text-center">{error}</div>
            ) : error && error.message ? (
              <div className="text-red-500 text-center">{error.message}</div>
            ) : null}
            {/* {success && <div className="text-white text-center">{success}</div>} */}
            <div className="flex flex-col gap-1">
              <label>Email or Phone No:</label>
              <input
                type="text"
                className="bg-gray-200 p-3 rounded w-full"
                placeholder="Enter your email address or phone number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
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
              <p className="text-end my-1 text-sm md:text-base">
                <Link to={'/forget-password'} className="text-blue-500 hover:underline">
                  Forget password?
                </Link>
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white w-full p-2 rounded-2xl"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
            <div>
              <p className="text-center text-gray-800 text-xl">
                Not a Member?{' '}
                <Link
                  to={"/signup"}
                  className="text-blue-500 underline hover:no-underline"
                >
                  Signup Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
