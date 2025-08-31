import React from 'react'
import CarouselItem from './CarouselItem';
import Slider from 'react-slick';
import { topMeal } from './topMeal';


const MultiItemCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows:false
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    topMeal.map((item, index) => 
                    <CarouselItem key={index} image={item.image} title={item.title} />)
                }
            </Slider>
        </div>
    )
}

export default MultiItemCarousel
