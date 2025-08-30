import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import { ShoppingCart } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
      <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
        <h1 className='logo items-center space-x-4'>Foodie</h1>
      </div>

      <div className='flex items-center space-x-2 lg:space-x-10'>

        <div>
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>

        <div>
          <Avatar sx={{ backgroundColor: "white", color: pink.A400 }}>
            A
          </Avatar>
        </div>

        <div>
          <IconButton>
            <Badge color='primary' badgeContent={3}>
              <ShoppingCart sx={{ fontSize: "1.8rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Navbar
