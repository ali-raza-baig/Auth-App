import React from 'react'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Verification from './pages/Verification'
import Login from './pages/Login'
import Home from './pages/Home'
import { useSelector } from 'react-redux'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
const App = () => {
  const user = useSelector((state) => state.user.user)
  return (
    <Routes>
      <Route path='/' element={user ? <Home /> : <Signup />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/verification' element={<Verification />} />
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='/:token' element={<ResetPassword />} />
    </Routes>
  )
}

export default App