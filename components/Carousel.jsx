import Image from 'next/image';
import Title from './ui/Title';
import Slider from 'react-slick';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: (dots) => (
            <div>
                <ul>{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className='w-3 h-3 border bg-white rounded-full mt-10'></div>
        ),
    };
    return (
        <div className='h-[90vh] w-full -top-[88px] before:absolute before:content before:left-0 before:top-0 before:w-full before:h-[100vh] before:bg-black before:opacity-30 before:z-10'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className="relative h-full w-full">
                    <Image
                        src="/images/header3.jpg"
                        alt=''
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <div className='relative z-20'>
                <Slider {...settings} className='!max-h-[500px] overflow-hidden mt-24'>
                    <div>
                        <div className='container mx-auto text-white flex flex-col items-start gap-y-10'>
                            <Title addClass="text-5xl">Fast Food Restaurant</Title>
                            <p className='text-sm sm:w-2/5 w-full'>
                                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                            </p>
                            <button className='btn-three text-secondary hover:text-white btn-primary'>Order Now</button>
                        </div>
                    </div>
                    <div>
                        <div className='container mx-auto text-white flex flex-col items-start gap-y-10'>
                            <Title addClass="text-5xl">Fast Food Restaurant</Title>
                            <p className='text-sm sm:w-2/5 w-full'>
                                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                            </p>
                            <button className='btn-three text-secondary hover:text-white btn-primary'>Order Now</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Carousel