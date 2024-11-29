import Image from 'next/image'
import React from 'react'
import Title from './ui/Title'

const About = () => {
    return (
        <div className='bg-secondary py-14'>
            <div className="container mx-auto flex items-center gap-20  justify-center flex-wrap-reverse">
                <div className='relative sm:h-[600px] sm:w-[445px] w-[300px] h-[500px]'>
                    <Image src="/images/about-img.png" alt='' fill priority />
                </div>
                <div className='text-white md:w-1/2 text-center lg:text-start'>
                    <Title addClass="text-[40px]">We Are Feane</Title>
                    <p className='my-5'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All
                    </p>
                    <button className='btn-primary'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default About