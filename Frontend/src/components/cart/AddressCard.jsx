import { Home } from '@mui/icons-material'
import { Button, Card } from '@mui/material'
import React from 'react'

const AddressCard = ({ item, showButton,handleSelectAddress }) => {

    
    return (
        <Card className=' w-64 p-4 rounded-sm space-y-3'>
            <div className='flex gap-6 items-center'>
                <Home />
                <p className='font-semibold text-lg'>Home</p>
            </div>

            <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente suscipit veritatis eum hic voluptas ipsa modi est molestias eos.
            </p>

            {
                showButton &&
                <Button onClick={()=>handleSelectAddress(item)} fullWidth variant='outlined'>Select</Button>
            }
        </Card>
    )
}

export default AddressCard
