import { useEffect, useState } from 'react';
import Title from '../ui/Title';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const Order = () => {

    const [orders, setOrders] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);
    const { data: session } = useSession();
    // const status = ["preparing", "on the way", "delivered"];

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders`);
                setOrders(res.data.filter((order) => order.customer === currentUser?.fullName));
            } catch (error) {
                console.log(error);
            }
        };
        getOrders();
    }, [currentUser]);


    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
                setCurrentUser(res.data.filter((user) => user.email === session.user.email)[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
    }, [session]);

    console.log(orders)
    return (
        <div className='lg:p-8 flex-1 lg:mt-0 mt-5'>
            <Title addClass="text-[40px] lg:text-start text-center">Orders</Title>
            <div className='overflow-x-auto w-full mt-5 max-h-[400px]'>
                <table className='w-full text-sm text-center text-gray-400 xl:min-w-[1000px] min-w-[100%]'>
                    <thead className='text-xs text-gray-400 uppercase bg-black'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>ID</th>
                            <th scope='col' className='py-3 px-6'>ADRESS</th>
                            <th scope='col' className='py-3 px-6'>DATE</th>
                            <th scope='col' className='py-3 px-6'>TOTAL</th>
                            <th scope='col' className='py-3 px-6'>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr className='bg-secondary border-gray-700 hover:bg-primary transition-all' key={order?._id}>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                    {order._id.slice(0, 5)}...
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    {order.address}
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    {order.createdAt.slice(0, 10)}
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    {order.total} $
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    preparing
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order