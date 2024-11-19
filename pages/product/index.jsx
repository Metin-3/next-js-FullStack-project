import Title from '../../components/ui/Title'
import Image from 'next/image'
import React from 'react'

const index = () => {
    return (
        <div className='flex flex-wrap items-center justify-center h-screen gap-20 py-20 '>
            <div className='relative  md:flex-1 w-[50%] h-[50%] md:w-[80%] md:h-[80%] mx-20'>
                <Image src="/images/f1.png" alt='' layout='fill' objectFit='contain' />
            </div>
            <div className='md:flex-1 md:block flex flex-col items-center py-6'>
                <Title addClass="text-6xl">Good Pizza</Title>
                <span className='text-primary text-2xl font-bold underline underline-offset-8 my-4 inline-block'>10 $</span>
                <p className='text-sm my-4 md:pr-24 pr-0 text-center md:text-start'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores explicabo labore molestiae fugiat at sed?
                </p>
                <div>
                    <h4 className='text-xl font-bold'>Choose the size</h4>
                    <div className='flex items-center gap-x-20'>
                        <div className='relative w-8 h-8'>
                            <Image src="/images/size.png" alt='' layout='fill' />
                            <span className='absolute top-0 -right-7 text-xs bg-primary rounded-full px-[5px] font-medium'>Small</span>
                        </div>
                        <div className='relative w-12 h-12'>
                            <Image src="/images/size.png" alt='' layout='fill' />
                            <span className='absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px] font-medium'>Medium</span>
                        </div>
                        <div className='relative w-16 h-16'>
                            <Image src="/images/size.png" alt='' layout='fill' />
                            <span className='absolute top-0 -right-4 text-xs bg-primary rounded-full px-[5px] font-medium'>Large</span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-6 my-6'>
                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary' />
                        <span className='text-sm font-semibold'>Ketcup</span>
                    </label>
                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary' />
                        <span className='text-sm font-semibold'>Mayonez</span>
                    </label>
                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary' />
                        <span className='text-sm font-semibold'>Aci sos</span>
                    </label>
                </div>
                <button className='btn-primary mt-6'>Add To Card</button>
            </div>
        </div>
    )
}

export default index