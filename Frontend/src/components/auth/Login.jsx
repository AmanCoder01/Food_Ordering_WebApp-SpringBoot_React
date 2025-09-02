import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/authSlice'

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    // 🔹 Get auth state from Redux
    const { isLoading, error, success, jwt } = useSelector((state) => state.auth);

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
            <div className='flex flex-col'>
                <label htmlFor="" className='mb-1'>Email</label>
                <input type="email" placeholder='Enter email' name='email' value={formData.email}
                    className='w-full py-2 h-13 outline-none border border-[#ddd] bg-[#fff9f6] px-4 rounded-md'
                    onChange={handleChange} />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='mb-1'>Password</label>
                <input type="password" placeholder='Enter password' name='password' value={formData.password}
                    onChange={handleChange} className='w-full py-2 h-13 outline-none border border-[#ddd] bg-[#fff9f6] px-4 rounded-md'
                />
            </div>

            <Button type='submit' variant='contained' disabled={isLoading} fullWidth sx={{
                marginTop: "10px",
                backgroundColor: "#ff4d2d"
            }}>
                {isLoading ? "Logging in..." : "Login"}
            </Button>

            {/* 🔹 Show error */}
            {/* {error && <p className='text-red-500 pt-1'>{error}</p>} */}

            <div className='pt-1'>
                <p className='text-md'>Don't have an account? <Link className='font-semibold text-[#ff4d2d] underline' to={"/account/register"}>Register</Link></p>
            </div>
        </form>
    )
}

export default Login
