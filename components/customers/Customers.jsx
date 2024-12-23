import React from 'react';
import Title from '../ui/Title';
import CustomerItem from './CustomerItem';
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {

    function NextBtn({ onClick }) {
        return <button
            className='link bg-primary border border-primary absolute -bottom-12 left-1/2 flex justify-center items-center w-10 h-10 rounded-full '
            onClick={onClick}>
            <IoIosArrowForward />
        </button>
    }

    function PrevBtn({ onClick }) {
        return <button
            className='link bg-primary border border-primary absolute -bottom-12 right-1/2 flex justify-center items-center w-10 h-10 rounded-full mr-2'
            onClick={onClick}
        ><IoIosArrowBack />
        </button>
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:1,
                },
            },
        ]
    };

    return (
        <div className='container mx-auto mt-12 mb-20 overflow-hidden'>
            <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
            <Slider {...settings}>
                <CustomerItem imgSrc="/images/download.jpg" />
                <CustomerItem imgSrc="/images/download.jpg" />
                <CustomerItem imgSrc="/images/download.jpg" />
                <CustomerItem imgSrc="/images/download.jpg" />
                <CustomerItem imgSrc="/images/download.jpg" />
            </Slider>
        </div>
    )
}

export default Customers