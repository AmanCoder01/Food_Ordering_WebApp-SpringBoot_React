import { Button, FormControl, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../redux/auththentication/action'

const Register = () => {


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER"
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }



  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser({ userData: formData, navigate }))
  }

  return (
    <form onSubmit={handleSubmit} action="" className='space-y-4'>

      <h1 className='pb-4 text-center text-2xl font-semibold'>Register</h1>
      <div>
        <label htmlFor="">Full Name</label>
        <input type="text" placeholder='Enter full name' name='fullName' onChange={handleChange} value={formData.fullName}
          className='w-full py-2 h-13 outline-none bg-gray-900 px-4 rounded-md'
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Enter email' name='email' value={formData.email}
          onChange={handleChange} className='w-full py-2 h-13 outline-none bg-gray-900 px-4 rounded-md'
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter password' name='password' value={formData.password}
          onChange={handleChange} className='w-full py-2 h-13 outline-none bg-gray-900 px-4 rounded-md'
        />
      </div>
      <div>
        <label htmlFor="">Role</label> <br />
        <select name="role" value={formData.role} className='outline-none w-full h-13 bg-gray-900 px-4 rounded-md' onChange={handleRoleChange} id="">
          <option value="ROLE_CUSTOMER">Customer</option>
          <option value="ROLE_RESTAURANT_OWNER">Restaurant Owner</option>
        </select>
      </div>

      <Button type='submit' variant='contained' fullWidth sx={{
        marginTop: "10px"
      }}>
        Register
      </Button>


      <div className='pt-4'>
        <p className='text-md'>Already have an account? <Link className='font-semibold text-red-500 underline' to={"/account/login"}>Login</Link></p>
      </div>
    </form>
  )
}

export default Register
