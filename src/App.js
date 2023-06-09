import './App.css'
import House from './pages/house'
import HouseCreate from './pages/houseCreate'
import Houses from './pages/houses'
import SignUp from './pages/signUp'
import Profile from './pages/profile'
import Login from './pages/login'
import HouseEdit from './pages/houseEdit'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/houses/:id' element={<House />} />
        <Route path='/houses/myhouses' element={<Houses />} />
        <Route path='/bookings/:id' element={<House />} />
        <Route path='/bookings' element={<House />} />
        <Route path='/reviews/:id' element={<House />} />
        <Route path='/housecreate' element={<HouseCreate />} />
        <Route path='/' element={<Houses />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/houseedit' element={<HouseEdit />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
