import Image from 'next/image'


const Order = () => {
    return (

        <div className='overflow-x-auto'>
            <div className='min-h-[calc(100vh_-_433px)] flex justify-center items-center flex-col p-10 min-w-[1000px]'>
                <div className='flex items-center flex-1 p-10 w-full'>
                    <table className='w-full text-sm text-center text-gray-400'>
                        <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                            <tr>
                                <th scope='col' className='py-3 px-6'>ORDER ID</th>
                                <th scope='col' className='py-3 px-6'>CUSTOMER</th>
                                <th scope='col' className='py-3 px-6'>ADRESS</th>
                                <th scope='col' className='py-3 px-6'>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-secondary border-gray-700 hover:bg-primary transition-all'>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                    34587309596047
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    Matin Hasanov
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    adress
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    467 $
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-between w-full p-10 bg-primary mt-8'>
                    <div className='relative flex flex-col items-center'>
                        <Image objectFit='contain' src="/images/paid.png" alt='' width={40} height={40} />
                        <span>Payment</span>
                    </div>
                    <div className='relative flex flex-col items-center'>
                        <Image objectFit='contain' src="/images/bake.png" alt='' width={40} height={40} />
                        <span>Preparing</span>
                    </div>
                    <div className='relative flex flex-col items-center'>
                        <Image objectFit='contain' src="/images/bike.png" alt='' width={40} height={40} />
                        <span>On the way</span>
                    </div>
                    <div className='relative flex flex-col items-center'>
                        <Image objectFit='contain' src="/images/delivered.png" alt='' width={40} height={40} />
                        <span>Delivered</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Order