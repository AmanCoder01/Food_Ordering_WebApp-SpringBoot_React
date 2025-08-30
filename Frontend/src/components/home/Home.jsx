import React from 'react'
import "./home.css";
import MultiItemCarousel from './MultiItemCarousel';
import RestaurantCard from '../restaurant/RestaurantCard';

const Home = () => {

  const restaurant = [1, 1, 1, 1, 1, 1, , 1, 1];

  return (
    <div className='pb-10'>
      <section className='banner -z-50 relative flex flex-col justify-center items-center'>
        <div className='w-[50vw] z-10 text-center'>
          <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Foodie</p>
          <p className='text-gray-300 z-10 text-xl lg:text-4xl'>Taste the Convenience: Food, Fast and Delivered.</p>
        </div>

        <div className='cover absolute top-0 left-0 right-0'>

        </div>

        <div className='fadout'>

        </div>
      </section>


      <section className='p-10 lg:py-10 lg:px-20'>
        <h1 className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Meals</h1>
        <MultiItemCarousel />

      </section>

      <section className='p-10 lg:py-10 lg:px-20 pt-10'>
        <h1 className='text-2xl font-semibold text-gray-400 py-3 pb-8'>Order From Our Handpicked Favorites</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-x-3 gap-4'>
        {
          restaurant.map((item) => (
            <RestaurantCard />
            ))
          }
          </div>
      </section>
    </div>
  )
}

export default Home
