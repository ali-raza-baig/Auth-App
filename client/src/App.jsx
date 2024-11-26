import React from 'react'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Verification from './pages/Verification'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/verification' element={<Verification />} />
    </Routes>
  )
}

export default App