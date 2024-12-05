import Title from '../../components/ui/Title';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../../redux/cartSlice';

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className='min-h-[calc(100vh_-_433px)]'>
            <div className='flex justify-between items-center md:flex-row flex-col'>
                <div className='md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full '>
                    <table className='w-full text-sm text-center text-gray-400 min-w-[1000px]'>
                        <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                            <tr>
                                <th scope='col' className='py-3 px-6'>PRODUCT</th>
                                <th scope='col' className='py-3 px-6'>EXTRAS</th>
                                <th scope='col' className='py-3 px-6'>PRICE</th>
                                <th scope='col' className='py-3 px-6'>QUANTITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.map((product) => (
                                <tr className='bg-secondary border-gray-700 hover:bg-primary transition-all' key={product.id}>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                        <Image src="/images/f1.png" width={50} height={50} alt='' priority />
                                        <span>{product.name}</span>
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                        {product.extras.map((extra) => (
                                            <span key={extra.id}>
                                                {extra.text}
                                            </span>
                                        ))}
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                        {product.price}$
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                        {product.quantity}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center p-12 text-white md:w-auto w-full md:text-start text-center h-100'>
                    <Title addClass="text-[40px]">CART TOTTAL</Title>
                    <div className='flex flex-col gap-y-2 my-4'>
                        <span><b>Subtotal:</b>{cart.total}$</span>
                        <span><b>Discount:</b> 0.00$</span>
                        <span><b>Total:</b>{cart.total}$</span>
                    </div>
                    <div>
                        <button className="btn-primary mt-4 md:w-auto w-52" onClick={() => dispatch(reset())}>CHECKOUT NOW !</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart