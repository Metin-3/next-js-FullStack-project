import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

import AOS from "aos";
import "aos/dist/aos.css";

const MenuItem = ({ product }) => {

    const cart = useSelector((state) => state.cart);
    const findCart = cart.products.find((item) => item._id === product._id);
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(
        addProduct({
          ...product,
          extras: [{ text: "empty" }],
          price: product.prices[0],
          quantity: 1,
        })
      );
    };

    useEffect(() => {
        AOS.init({
          once: false,
          duration: 1000,
          easing: "ease-out-cubic",
        });
      }, []);
    
    return (
        <div className='bg-secondary rounded-3xl' data-aos="zoom-in">
            <div className='w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl'>
                <Link href={`/product/${product?._id}`}>
                    <div className='relative w-40 h-40 hover:rotate-[360deg] hover:scale-110 productTransition'>
                        <Image
                            src={product.img}
                            alt={product?.title || 'Product'}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </Link>
            </div>
            <div className='text-white p-[25px]'>
                <h4 className='text-xl font-semibold'>{product?.title || 'No Title'}</h4>
                <p className='text-15px'>
                    {product?.desc || 'No Description'}
                </p>
                <div className='flex justify-between items-center mt-4'>
                    <span className='font-bold'>{product?.prices?.[0] || 0} $</span>
                    <button
                        className='btn-5 !border-none !text-white !bg-primary btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center'
                        disabled={findCart}
                        onClick={handleClick}
                    >
                        <FaShoppingCart size={18}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuItem