import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Chip, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
    return (
        <div className='  p-2 rounded-2xl'>
            <div className='flex items-center gap-4'>
                <img src="https://images.pexels.com/photos/12737816/pexels-photo-12737816.jpeg" className='w-[5rem] h-[5rem] object-cover rounded-sm' alt="" />


                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className='w-full lg:space-y-3 space-y-1'>
                        <p className='pl-1'>Biryani</p>

                        <div className='flex items-center'>
                            <IconButton>
                                <RemoveCircleOutline />
                            </IconButton>
                            <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                5
                            </div>
                            <IconButton>
                                <AddCircleOutline />
                            </IconButton>
                        </div>
                    </div>

                    <p>₹2006</p>
                </div>

            </div>

            <div className='pt-3 space-x-2'>
                {
                    [1, 1, 2].map((item) => (
                        <Chip label={"bread"} />
                    ))
                }
            </div>
        </div>
    )
}

export default CartItem
