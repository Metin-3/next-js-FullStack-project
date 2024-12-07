import Image from 'next/image';
import Title from '../ui/Title';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Order = () => {

    const [orders, setOrders] = useState([]);
    const status = ["preparing", "on the way", "delivered"];

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders`);
                setOrders(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getOrders();
    }, []);

    const handleStatus = async (id) => {
        const item = orders.find((order) => order._id === id);
        const currentStatus = item.status;

        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`,
                {
                    status: currentStatus + 1,
                }
            );
            setOrders([res.data, ...orders.filter((order) => order._id !== id)])
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="lg:p-8 flex-1 lg:mt-5 mt-0">
            <Title addClass="text-[40px]">Order</Title>
            <div className='overflow-x-auto w-full mt-5 !max-h-[400px] overflow-auto'>
                <table className='w-full text-sm text-center text-gray-400  xl:min-w-[1000px] min-w-[100%]'>
                    <thead className='sticky z-10 top-0  text-xs text-gray-400 uppercase bg-black'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>PRODUCT ID</th>
                            <th scope='col' className='py-3 px-6'>CUSTOMER</th>
                            <th scope='col' className='py-3 px-6'>TOTAL</th>
                            <th scope='col' className='py-3 px-6'>PAYMENT</th>
                            <th scope='col' className='py-3 px-6'>STATUS</th>
                            <th scope='col' className='py-3 px-6'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 && orders
                            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                            .map((order) => (
                                <tr className='bg-secondary hover:text-black border-gray-700 hover:bg-primary transition-all' key={order?._id}>
                                    <td className='py-4 px-6  font-medium whitespace-nowrap  gap-x-1'>
                                        {order?._id.substring(0, 10)}
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap'>
                                        {order?.customer}
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap'>
                                        {order?.total} $
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap'>
                                        {order?.method === 0 ? "Cash" : "Card"}
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap'>
                                        {status[order?.status]}
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap'>
                                        <button
                                            className="btn-primary !bg-success"
                                            onClick={() => handleStatus(order?._id)}
                                            disabled={order?.status > 1}
                                        >
                                            Next Stage
                                        </button>
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