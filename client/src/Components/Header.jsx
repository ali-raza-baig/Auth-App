import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Redux/UserSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-evenly bg-gray-500 py-3 '>
            <div className='text-2xl font-semibold'> Auth App</div>
            <div className=''>
                {!user ? <>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 m-2 rounded' onClick={() => navigate("/login")}>Login</button>
                    <button className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 m-2 rounded' onClick={() => navigate("/signup")}>Signup</button>
                </> : <>
                    <button className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 m-2 rounded' onClick={() => dispatch(logout())}> Logout</button>
                </>
                }
            </div>
        </div>
    )
}

export default Header