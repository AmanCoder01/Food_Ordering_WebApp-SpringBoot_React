import { Avatar, Badge, Button, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import { DarkMode, LightMode, Person, ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../redux/themeSlice.js';

const Navbar = () => {

  const naviagte = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(store => store.auth);
  const { mode } = useSelector((state) => state.theme);


  const handleAvatarClick = () => {
    if (user.role === "ROLE_CUSTOMER") {
      naviagte("/my-profile")
    } else {
      naviagte("/admin/restaurat")
    }
  }

  const handleTheme = () => {
    dispatch(toggleMode());
  }


  return (
    <div className={`px-5 z-50 py-[.8rem] lg:px-20 flex justify-between sticky top-0 
     shadow-xl ${mode==="dark" ? "bg-[#ff4d2d]" : "bg-inherit"}`}>
      <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
        <Link  to="/" className={`logo items-center space-x-4 text-primary ${mode==="light" ? "text-[#ff4d2d]" : "text-inherit"} text-3xl font-bold`}>Foodie</Link>
      </div>

      <div className='flex items-center space-x-2 lg:space-x-6'>

        <div>
          <Button
            // variant="containe"
            onClick={handleTheme}
          >
            {mode == "dark" ? <LightMode color='secondary'/> : <DarkMode  />}
          </Button>
        </div>

        <div>
          <IconButton>
            <SearchIcon
              sx={{
                fontSize: "1.6rem",
                color: mode ==="light" ? "#ff4d2d" : "inherit"
              }}
            />
          </IconButton>
        </div>

        <div>
          {user ?

            <Avatar onClick={handleAvatarClick} sx={{ backgroundColor: "white", color: mode ==="light" ? "#ff4d2d" : "inherit"}}>
              {user?.fullName?.slice(0, 1).toUpperCase()}
            </Avatar>

            : <Link to={"/account/login"}>
              <Person sx={{ color: mode ==="light" ? "#ff4d2d" : "inherit", fontSize: "1.6rem" }} />
            </Link>}
        </div>

        <div>
          <IconButton onClick={() => naviagte("/cart")}>
            <Badge sx={{
              color: mode ==="light" ? "#ff4d2d" : "inherit"
            }} color='#ff4d2d' badgeContent={3}>
              <ShoppingCart sx={{ fontSize: "1.8rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Navbar
