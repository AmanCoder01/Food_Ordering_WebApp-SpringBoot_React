import { Avatar, Badge, Button, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import { DarkMode, LightMode, Person, ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ mode, setMode }) => {

  const naviagte = useNavigate();

  const { auth } = useSelector(store => store);


  return (
    <div className={`px-5 z-50 py-[.8rem] lg:px-20 flex justify-between sticky top-0 
    ${mode=="light" ? "bg-white": "bg-[#e91e63]"}`}>
      <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
        <Link to="/" className='logo items-center space-x-4 text-3xl font-bold'>Foodie</Link>
      </div>

      <div className='flex items-center space-x-2 lg:space-x-10'>

        <Button
          // variant="containe"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode == "dark" ? <LightMode color='secondary'/>   : <DarkMode/>}
        </Button>

        <div>
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>

        <div>
          {auth.user ?

            <Link to={"/my-profile"}>
              <Avatar sx={{ backgroundColor: "white", color: pink.A400 }}>
                {auth?.user?.fullName?.slice(0, 1).toUpperCase()}
              </Avatar>
            </Link>

            : <Link to={"/account/login"}>
              <Person />
            </Link>}
        </div>

        <div>
          <IconButton onClick={() => naviagte("/cart")}>
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
