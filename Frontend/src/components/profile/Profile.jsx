import React, { useState } from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Orders from './Orders';
import Favorites from './Favorites';
import Addresses from './Addresses';
import Events from './Events';

const Profile = () => {

    const [openSidebar,setOpenSidebar] = useState(false);

    return (
        <div className='lg:flex justify-between'>
            <div className='sticky h-[80vh] lg:w-[20%]'>
                <ProfileNavigation open={openSidebar}/>
            </div>
            <div className='lg:w-[80%]'>
                    <Routes>
                        <Route path='/' element={<UserProfile/>}/>
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/favorites' element={<Favorites/>}/>
                        <Route path='/addresses' element={<Addresses/>}/>
                        <Route path='/events' element={<Events/>}/>
                    </Routes>
            </div>
        </div>
    )
}

export default Profile
