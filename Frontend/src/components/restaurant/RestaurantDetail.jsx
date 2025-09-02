import { CalendarToday, LocationCity, LocationOn } from '@mui/icons-material'
import { Divider, FormControl, FormControlLabel, Grid, IconButton, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuCard from './MenuCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantById } from '../../redux/resturantSlice'

const categories = [
    "pizza",
    "biryani",
    "burger",
    "chicken",
    "rice"
]

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" }
]

const menus = [1, 1, 1, 1, 1, 1, 1]

const RestaurantDetail = () => {

    const  auth  = useSelector((state) => state.auth);
    const {restaurant}  = useSelector((state) => state.rest);

    const [foodType, setFoodType] = useState("all");

    const dispatch = useDispatch();

    const params = useParams();


    useEffect(() => {
        dispatch(getRestaurantById({ id: params.id, jwt: auth.jwt }));
         window.scrollTo(0, 0);
    },[])


    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name);

    }

    return (
        <div className='px-5 lg:px-20'>
            <section className=''>
                <h3 className='text-gray-500 py-2 mt-10'>Home/{restaurant?.address?.country}/{restaurant?.name}/{restaurant?.id}</h3>

                <div >
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <img src={restaurant?.images[0]} className='w-full h-[40vh] object-cover' alt="" />
                        </Grid>
                        <Grid size={6}>
                            <img src={restaurant?.images[1]} className='w-full h-[40vh] object-cover' alt="" />
                        </Grid>
                        <Grid size={6}>
                            <img src={restaurant?.images[2]} className='w-full h-[40vh] object-cover' alt="" />
                        </Grid>
                    </Grid>
                </div>

                <div className='pt-3 pb-5'>
                    <h1 className='font-semibold text-4xl'>{restaurant?.name}</h1>
                    <p className='text-gray-500'>
                        <span>{restaurant?.description}</span>
                    </p>
                    <div className='flex items-center gap-3 mt-3 text-gray-500'>
                        <LocationOn />
                        <span className='text-gray-500'>{restaurant?.address?.city}</span>
                    </div>
                    <div className='flex items-center gap-3 text-gray-500 mt-3'>
                        <CalendarToday />
                        <span className='text-gray-500'>{restaurant?.openingHours}</span>
                    </div>
                </div>
            </section>

            <Divider />

            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter p-5  shadow-md' >
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {foodTypes.map((item) =>
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio />}
                                            label={item.label} />
                                    )}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div className='mt-5'>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {categories.map((item) =>
                                        <FormControlLabel
                                            key={item}
                                            value={item.value}
                                            control={<Radio />}
                                            label={item} />
                                    )}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className='space-y-5 lg:w-[80%] lg:pl-10 menu'>
                    {
                        menus.map((item) => (
                            <MenuCard />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetail
