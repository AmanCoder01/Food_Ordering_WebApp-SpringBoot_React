import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToFavorite } from "../../redux/authSlice.js"

const RestaurantCard = ({ item }) => {



    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { jwt, user } = useSelector((state) => state.auth);



    const handleRoute = () => {
        navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`)
    }

    const isFavorited =  user?.favorites.some(fav => fav.id === item.id);


    const handleAddTofavorite = () => {
        console.log("dd");

        dispatch(addToFavorite({ jwt, id: item.id }));
    }


    return (
        <Card className=' w-[18rem] hover:scale-95 transition ease-in-out duration-400 '>
            <div className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative `}>
                <img onClick={handleRoute}
                    className='w-full h-[10rem] rounded-t-md object-cover'
                    src={item.images[1]} alt="" />

                <Chip size='small' className='absolute top-2 left-2' color={item.open ? "success" : "error"} label={item.open ? "open" : "close"} />


                <div className='p-4 textPart lg:flex w-full justify-between'>
                    <div className='space-y-1'>
                        <p className='font-semibold text-lg '>{item.name}</p>
                        <p className=' text-sm '>{item.description}</p>
                    </div>

                    <div>
                        <IconButton onClick={handleAddTofavorite}>
                            {isFavorited ? <Favorite sx={{
                                color: "#ff4d2d"
                            }} /> : <FavoriteBorder />}
                        </IconButton>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default RestaurantCard
