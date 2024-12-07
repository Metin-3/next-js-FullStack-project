import Title from '../../components/ui/Title';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../../redux/cartSlice';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Cart = ({ userList }) => {

    const { data: session } = useSession();
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const user = userList?.find((user) => user.email === session?.user?.email);
    const router = useRouter();

    const newOrder = {
        customer: user?.fullName,
        address: user?.address ? user?.address : "No address",
        total: cart.total,
        method: 0,
    };

    const createOrder = async () => {
        try {
            if (session) {
                if (confirm("Are you sure to order ?")) {
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, newOrder);
                    if (res.status === 201) {
                        router.push(`/order/${res.data._id}`);
                        dispatch(reset());
                        toast.success("Order created successfully", { autoClose: 1000, });
                    }
                }
            } else {
                toast.error("Please login first.", { autoClose: 1000, });
            }
        } catch (error) {
            toast.error("Please login first.", { autoClose: 1000, });
            console.log(error);
        }
    }


    return (
        <div className='min-h-[calc(100vh_-_433px)]'>
            <div className='flex justify-between items-center md:flex-row flex-col'>
                <div className='md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full '>
                    <div className='max-h-60 w-full overflow-auto'>
                        {cart?.products?.length > 0 ? (
                            <table className='w-full text-sm text-center text-gray-400 min-w-[1000px]'>
                                <thead className='text-xs text-gray-400 uppercase sticky top-0 bg-black'>
                                    <tr>
                                        <th scope='col' className='py-3 px-6'>PRODUCT</th>
                                        <th scope='col' className='py-3 px-6'>EXTRAS</th>
                                        <th scope='col' className='py-3 px-6'>PRICE</th>
                                        <th scope='col' className='py-3 px-6'>QUANTITY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.products.map((product, index) => (
                                        <tr className='bg-secondary border-gray-700 hover:bg-primary hover:text-black transition-all' key={index}>
                                            <td className='py-4 px-6 font-medium whitespace-nowrap  flex items-center gap-x-1 justify-center'>
                                                <Image
                                                    src={product?.img}
                                                    width={50}
                                                    height={50}
                                                    alt=''
                                                    priority
                                                />
                                                <span>{product.name}</span>
                                            </td>
                                            <td className='py-4 px-6 font-medium whitespace-nowrap'>
                                                {product.extras?.length > 0 ? (
                                                    product.extras.map((extra, index) => (
                                                        <span key={index}>
                                                            {extra.text}
                                                        </span>
                                                    )
                                                    )) : "No extras !"}
                                            </td>
                                            <td className='py-4 px-6 font-medium whitespace-nowrap '>
                                                {product.price}$
                                            </td>
                                            <td className='py-4 px-6 font-medium whitespace-nowrap'>
                                                {product.quantity}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : <p className='flex justify-center items-center font-semibold'>
                            No product...<i class="fa-solid fa-circle-exclamation mx-2 text-[20px]"></i>
                        </p>}
                    </div>
                </div>
                <div className='bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center p-12 text-white md:w-auto w-full md:text-start text-center h-100'>
                    <Title addClass="text-[40px]">CART TOTTAL</Title>
                    <div className='flex flex-col gap-y-2 my-4'>
                        <span><b>Subtotal:</b>{cart.total}$</span>
                        <span><b>Discount:</b> 0.00$</span>
                        <span><b>Total:</b>{cart.total}$</span>
                    </div>
                    <div>
                        <button className="link btn-primary mt-4 md:w-auto w-52" onClick={createOrder}>CHECKOUT NOW !</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);

    return {
        props: {
            userList: res.data ? res.data : [],
        },
    };
};

export default Cart;