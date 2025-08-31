import React from 'react'
import Navbar from '../navabr/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import RestaurantDetail from '../restaurant/RestaurantDetail'
import Cart from '../cart/Cart'
import Profile from '../profile/Profile'
import Auth from '../auth/Auth'

const CustomerRouter = ({ mode, setMode }) => {
  return (
    <div>
      <Navbar mode={mode} setMode={setMode} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account/:register' element={<Home />} />
        <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/my-profile/*' element={<Profile />} />
      </Routes>

      <Auth />
    </div>
  )
}

export default CustomerRouter
