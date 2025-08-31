import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/auththentication/action'

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser({ userData: formData, navigate }))
    }


    return (
        <form onSubmit={handleSubmit} className='space-y-4'>

            <h1 className='pb-4 text-center text-2xl font-semibold'>Login</h1>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter email' name='email' value={formData.email}
                    className='w-full py-2 h-13 outline-none bg-gray-900 px-4 rounded-md'
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter password' name='password' value={formData.password}
                    onChange={handleChange} className='w-full py-2 h-13 outline-none bg-gray-900 px-4 rounded-md'
                />
            </div>

            <Button type='submit' variant='contained' fullWidth sx={{
                marginTop: "10px"
            }}>
                Login
            </Button>


            <div className='pt-4'>
                <p className='text-md'>Don't have an account? <Link className='font-semibold text-red-500 underline' to={"/account/register"}>Register</Link></p>
            </div>
        </form>
    )
}

export default Login
