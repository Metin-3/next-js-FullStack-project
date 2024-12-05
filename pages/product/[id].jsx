import React from 'react';
import Title from '../../components/ui/Title';
import Image from 'next/image';
import { useState } from 'react';
import { addProduct } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const index = ({ food }) => {

    const [prices, setPrices] = useState(food.prices);
    const [price, setPrice] = useState(prices[0]);
    const [size, setSize] = useState(0);
    const [extraItems, setExtraItems] = useState(food?.extraOptions);
    const [extras, setExtras] = useState([]);

    const cart = useSelector((state) => state.cart);

    const dispathc = useDispatch()

    const handleSize = (sizeIndex) => {
        const difference = prices[sizeIndex] - prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    }

    const changePrice = (number) => {
        setPrice(price + number)
    }

    const handleChange = (e, item) => {
        const checked = e.target.checked;

        if (checked) {
            changePrice(item.price)
            setExtras([...extras, item])
        } else {
            changePrice(-item.price)
            setExtras(extras.filter((extra) => extra.id !== item.id));
        }
    };


    const handleClick = () => {
        dispathc(addProduct({ ...food, extras, price, quantity: 1 }))
    }

    return (
        <div className='flex flex-wrap items-center justify-center md:h-[calc(100vh_-_88px)] gap-5 py-20 '>
            <div className='relative  md:flex-1 w-36 h-36 md:w-[80%] md:h-[80%] mx-auto'>
                <Image src={food?.img} alt='' fill objectFit='contain' priority />
            </div>
            <div className='md:flex-1 md:block flex flex-col items-center py-6'>
                <Title addClass="text-6xl">{food?.title}</Title>
                <span className='text-primary text-2xl font-bold underline underline-offset-8 my-4 inline-block'>
                    {price} $
                </span>
                <p className='text-sm my-4 md:pr-24 pr-0 text-center md:text-start'>
                    {food?.desc}
                </p>
                <div>
                    <h4 className='text-xl font-bold'>Choose the size</h4>
                    {food.category === "pizza" && (
                        <div className='flex items-center gap-x-20'>
                            <div className='relative w-8 h-8 cursor-pointer' onClick={() => handleSize(0)}>
                                <Image src="/images/size.png" alt='' fill priority />
                                <span className='absolute top-0 -right-7 text-xs bg-primary rounded-full px-[5px] font-medium'>Small</span>
                            </div>
                            <div className='relative w-12 h-12 cursor-pointer' onClick={() => handleSize(1)}>
                                <Image src="/images/size.png" alt='' fill priority />
                                <span className='absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px] font-medium'>Medium</span>
                            </div>
                            <div className='relative w-16 h-16 cursor-pointer' onClick={() => handleSize(2)}>
                                <Image src="/images/size.png" alt='' fill priority />
                                <span className='absolute top-0 -right-4 text-xs bg-primary rounded-full px-[5px] font-medium'>Large</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex gap-x-6 my-6'>
                    {extraItems.map((item) => (
                        <label className='flex items-center gap-x-1' key={item._id}>
                            <input type="checkbox" className='w-5 h-5 accent-primary' onChange={(e) => handleChange(e, item)} />
                            <span className='text-sm font-semibold'>{item.text}</span>
                        </label>
                    ))}

                </div>
                <button className='btn-primary mt-6' onClick={handleClick}>Add To Card</button>
            </div>
        </div>
    )
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`
    );
    return {
        props: {
            food: res.data ? res.data : null,
        },
    };
};

export default index