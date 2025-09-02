import { AccountBalance, AddReaction, Event, Favorite, Logout, NotificationsActive, ShoppingBag } from '@mui/icons-material'
import { Divider, Drawer, useMediaQuery } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/authSlice'

const menus = [
    { title: "Orders", icon: <ShoppingBag /> },
    { title: "Favorites", icon: <Favorite /> },
    { title: "Addresses", icon: <AddReaction /> },
    { title: "Payments", icon: <AccountBalance /> },
    { title: "Notification", icon: <NotificationsActive /> },
    { title: "Events", icon: <Event /> },
    { title: "Logout", icon: <Logout /> },
]

const ProfileNavigation = ({ open, handleClose }) => {

    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleNavigate = (item) => {

        if (item.title === "Logout") {
            dispatch(logOut());
            navigate("/");
        } else {

            navigate(`/my-profile/${item.title.toLowerCase()}`)
        }

    }

    return (
        <Drawer
            onClose={handleClose}
            variant={isSmallScreen ? "temporary" : "permanent"}
            open={open}
            anchor='left'
            sx={{ zIndex: 1 }}>
            <div className='w-[20vw] h-[100vh] flex flex-col text-xl gap-4 pt-26'>
                {
                    menus.map((item, i) => (
                        <>
                            <div className='px-5  py-4  flex items-center space-x-5 cursor-pointer' onClick={() => handleNavigate(item)}>
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                            {/* {i !== menus.lenh - 1 && <Divider />} */}
                        </>
                    ))
                }
            </div>
        </Drawer>
    )
}

export default ProfileNavigation
