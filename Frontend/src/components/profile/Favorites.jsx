import React from 'react'
import RestaurantCard from '../restaurant/RestaurantCard'
import { useSelector } from 'react-redux'

const Favorites = () => {

  const { user } = useSelector((state) => state.auth);

  return (
    <div >
      <section className='p-5 lg:p-18'>
        <h1 className='text-center text-2xl font-semibold'>Favorites</h1>

        <div className=' mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3 gap-4'>
          {
            user?.favorites.map((item, index) => (
              <RestaurantCard item={item} key={index} />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Favorites