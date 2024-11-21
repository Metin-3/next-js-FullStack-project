import React from 'react'
import Title from '../ui/Title'

const Order = () => {
    return (
        <div className='lg:p-8 flex-1 lg:mt-0 mt-5'>
            <Title addClass="text-[40px] lg:text-start text-center">Orders</Title>
            <div className='overflow-x-auto w-full mt-5'>
                <table className='w-full text-sm text-center text-gray-400 min-w-[1000px]'>
                    <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>ID</th>
                            <th scope='col' className='py-3 px-6'>ADRESS</th>
                            <th scope='col' className='py-3 px-6'>DATE</th>
                            <th scope='col' className='py-3 px-6'>TOTAL</th>
                            <th scope='col' className='py-3 px-6'>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-secondary border-gray-700 hover:bg-primary transition-all'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                76876
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                adress
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                01-10-2022
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                67 $
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                preparing
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order