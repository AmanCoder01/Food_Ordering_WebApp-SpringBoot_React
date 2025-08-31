import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'

const RestaurantCard = () => {
  return (
    <Card className=' w-[18rem] hover:scale-105 transition ease-in-out duration-400 '>
        <div className={`${true? "cursor-pointer": "cursor-not-allowed"} relative `}>
            <img
            className='w-full h-[10rem] rounded-t-md object-cover'
            src="https://images.pexels.com/photos/12737816/pexels-photo-12737816.jpeg" alt="" />

            <Chip size='small' className='absolute top-2 left-2' color={true ? "success" : "error"} label={true? "open" : "close"}/>


            <div className='p-4 textPart lg:flex w-full justify-between'>   
                <div className='space-y-1'>
                    <p className='font-semibold text-lg '>Indian Fast Food</p>
                    <p className='text-gray-500 text-sm '>Craving it all? Dive into our global...</p>
                </div>

                <div>
                    <IconButton>
                        {true? <Favorite/> : <FavoriteBorder/> }
                    </IconButton>
                </div>
            </div>
        </div>
    </Card>
  )
}

export default RestaurantCard
