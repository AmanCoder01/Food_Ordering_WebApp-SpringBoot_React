import { CalendarToday, LocationCity, LocationOn } from '@mui/icons-material'
import { Divider, FormControl, FormControlLabel, Grid, IconButton, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuCard from './MenuCard'

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

const menus = [1,1,1,1,1,1,1]

const RestaurantDetail = () => {

    const [foodType, setFoodType] = useState("all");

    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name);

    }

    return (
        <div className='px-5 lg:px-20'>
            <section className=''>
                <h3 className='text-gray-500 py-2 mt-10'>Home/India/Indian fast food/3</h3>

                <div >
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <img src="https://images.pexels.com/photos/12737816/pexels-photo-12737816.jpeg" className='w-full h-[40vh] object-cover' alt="" />
                        </Grid>
                        <Grid size={6}>
                            <img src="https://images.pexels.com/photos/12737816/pexels-photo-12737816.jpeg" className='w-full h-[40vh] object-cover' alt="" />
                        </Grid>
                        <Grid size={6}>
                            <img src="https://images.pexels.com/photos/12737816/pexels-photo-12737816.jpeg" className='w-full h-[40vh] object-cover' alt="" />
                        </Grid>
                    </Grid>
                </div>

                <div className='pt-3 pb-5'>
                    <h1 className='font-semibold text-4xl'>Indian Fast Food</h1>
                    <p className='text-gray-500'>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facere praesentium expedita deleniti ratione consequuntur! Quos quasi sit quis sunt culpa, error natus at modi ea veritatis iusto quaerat voluptates adipisci doloribus. Vel beatae corporis exercitationem culpa aliquid asperiores blanditiis.</span>
                    </p>
                    <div className='flex items-center gap-3 mt-3 text-gray-500'>
                        <LocationOn />
                        <span className='text-gray-500'>Noida</span>
                    </div>
                    <div className='flex items-center gap-3 text-gray-500 mt-3'>
                        <CalendarToday />
                        <span className='text-gray-500'>Mon-Sun: 9:00 AM - 9:00 PM (Today)</span>
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
                        <Divider/>
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
                            menus.map((item)=>(
                                <MenuCard/>
                            ))
                        }
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetail
