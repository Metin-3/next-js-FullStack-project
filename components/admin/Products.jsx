import React, { useEffect, useState } from 'react'
import Title from '../ui/Title'
import Image from 'next/image'
import axios from 'axios';
import { toast } from 'react-toastify';

const Products = () => {

    const [products, setProducts] = useState([]);

    const handleDelete = async (id) => {
        try {
            if (confirm("Are you sure you want to delete this product ?")) {
                const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);

                if (res.status === 200) {
                    toast.success("Product Deleted !");
                    getProducts();
                };
            };

        } catch (error) {
            console.log(error)
        }
    }

    const getProducts = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
            setProducts(res.data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getProducts();
    }, []);


    console.log(products);
    return (
        <div className="lg:p-8 flex-1 lg:mt-5 mt-0">
            <Title addClass="text-[40px]">Products</Title>
            <div className='overflow-x-auto w-full mt-5 !max-h-[400px] overflow-auto'>
                <table className='w-full text-sm text-center text-gray-400 xl:min-w-[1000px]'>
                    <thead className=' sticky top-0  text-xs text-gray-400 uppercase bg-black'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>IMAGE</th>
                            <th scope='col' className='py-3 px-6'>ID</th>
                            <th scope='col' className='py-3 px-6'>TITLE</th>
                            <th scope='col' className='py-3 px-6'>PRICE</th>
                            <th scope='col' className='py-3 px-6'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 && products.map((product) => (
                            <tr className='bg-secondary border-gray-700 hover:text-black hover:bg-primary transition-all' key={product._id}>
                                <td className='py-4 px-6 font-medium whitespace-nowrap  flex items-center gap-x-1 justify-center'>
                                    <Image
                                        src={product.img}
                                        alt={product.title || 'Product'}
                                        width={50}
                                        height={50}
                                        priority
                                    />
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap '>
                                    {product._id.substring(0, 8)}...
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap'>
                                    {product.title}
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap'>
                                    {product.prices[0]} $
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap'>
                                    <button className="!text-white btn-primary !bg-danger" onClick={() => handleDelete(product._id)}>DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products