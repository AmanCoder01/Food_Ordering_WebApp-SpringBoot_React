import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

const UserProfile = () => {

  const { auth } = useSelector(store => store);


  return (
    <div className='flex justify-center items-center h-full'>
      <div className='space-y-2 flex justify-center flex-col items-center'>
        <Avatar sx={{
          width: "8rem",
          height: "8rem"
        }} />

        <p className='text-gray-400'>{auth.user?.fullName}</p>
        <p className='text-gray-400'>{auth.user?.email}</p>

      </div>
    </div>
  )
}

export default UserProfile
