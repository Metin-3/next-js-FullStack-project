import Title from '../../components/ui/Title';
import Image from 'next/image';
import { useState } from 'react';
import { addProduct } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const itemsExtra = [
    {
        id: 1,
        name: "Extra 1",
        price: 1,
    },
    {
        id: 2,
        name: "Extra 2",
        price: 2,
    },
    {
        id: 3,
        name: "Extra 3",
        price: 3,
    },
];

const foodItems = [
    {
        id: 1,
        name: "Pizza 1",
        price: 20,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores explicabo labore molestiae fugiat at sed?",
        extraOption: [
            {
                id: 1,
                name: "Extra 1",
                price: 10,
            },
        ]
    },
];

const index = () => {

    const [prices, setPrices] = useState([10, 20, 30]);
    const [price, setPrice] = useState(prices[0]);
    const [size, setSize] = useState(0);
    const [extraItems, setExtraItems] = useState(itemsExtra);
    const [extras, setExtras] = useState([]);

    const cart = useSelector((state) => state.cart);

    const dispathc = useDispatch()

    console.log(cart);


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
        dispathc(addProduct({...foodItems[0], extras, price, quantity: 1}))
    }

    return (
        <div className='flex flex-wrap items-center justify-center md:h-[calc(100vh_-_88px)] gap-5 py-20 '>
            <div className='relative  md:flex-1 w-36 h-36 md:w-[80%] md:h-[80%] mx-auto'>
                <Image src="/images/f1.png" alt='' layout='fill' objectFit='contain' />
            </div>
            <div className='md:flex-1 md:block flex flex-col items-center py-6'>
                <Title addClass="text-6xl">Good Pizza</Title>
                <span className='text-primary text-2xl font-bold underline underline-offset-8 my-4 inline-block'>
                    {price} $
                </span>
                <p className='text-sm my-4 md:pr-24 pr-0 text-center md:text-start'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores explicabo labore molestiae fugiat at sed?
                </p>
                <div>
                    <h4 className='text-xl font-bold'>Choose the size</h4>
                    <div className='flex items-center gap-x-20'>
                        <div className='relative w-8 h-8 cursor-pointer' onClick={() => handleSize(0)}>
                            <Image src="/images/size.png" alt='' layout='fill' />
                            <span className='absolute top-0 -right-7 text-xs bg-primary rounded-full px-[5px] font-medium'>Small</span>
                        </div>
                        <div className='relative w-12 h-12 cursor-pointer' onClick={() => handleSize(1)}>
                            <Image src="/images/size.png" alt='' layout='fill' />
                            <span className='absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px] font-medium'>Medium</span>
                        </div>
                        <div className='relative w-16 h-16 cursor-pointer' onClick={() => handleSize(2)}>
                            <Image src="/images/size.png" alt='' layout='fill' />
                            <span className='absolute top-0 -right-4 text-xs bg-primary rounded-full px-[5px] font-medium'>Large</span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-6 my-6'>
                    {extraItems.map((item) => (
                        <label className='flex items-center gap-x-1' key={item.id}>
                            <input type="checkbox" className='w-5 h-5 accent-primary' onChange={(e) => handleChange(e, item)} />
                            <span className='text-sm font-semibold'>{item.name}</span>
                        </label>
                    ))}

                </div>
                <button className='btn-primary mt-6' onClick={handleClick}>Add To Card</button>
            </div>
        </div>
    )
}

export default index