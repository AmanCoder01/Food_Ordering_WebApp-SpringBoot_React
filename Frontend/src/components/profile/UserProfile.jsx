import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

const UserProfile = () => {

  const { auth ,theme} = useSelector(store => store);


  return (
    <div className='flex justify-center items-center h-full'>
      <div className='space-y-2 flex justify-center flex-col items-center'>
        <Avatar sx={{
          width: "8rem",
          height: "8rem"
        }} />

        <p className={`${theme.mode === "dark" ? "text-gray-400": "text-gray-700"} text-2xl`}>{auth.user?.fullName}</p>
        <p className={`${theme.mode === "dark" ? "text-gray-400": "text-gray-700"} text-xl`}>{auth.user?.email}</p>

      </div>
    </div>
  )
}

export default UserProfile
