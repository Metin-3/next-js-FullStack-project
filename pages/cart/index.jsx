import Title from '../../components/ui/Title'
import Image from 'next/image'
import React from 'react'

const Cart = () => {
    return (
        <div className='min-h-[calc(100vh_-_200px)]'>
            <div className='flex justify-between items-center'>
                <div className='min-h-[calc(100vh_-_200px)] flex items-center flex-1'>
                    <table>
                        <thead>
                            <tr>
                                <th>PRODUCT</th>
                                <th>EXTRAS</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Image src="/images/f1.png" width={50} height={50} alt='' />
                                    <span>Good Pizza</span>
                                </td>
                                <td>
                                    <span>mayonez, aci sos, ketcup</span>
                                </td>
                                <td>
                                    20 $
                                </td>
                                <td>
                                    67 $
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='bg-secondary min-h-[calc(100vh_-_200px)] flex flex-col justify-center p-4 text-white'>
                    <Title addClass="text-[40px]">CART TOTTAL</Title>
                    <div className='flex flex-col gap-y-2 my-4'>
                        <span><b>Subtotal:</b> 20$</span>
                        <span><b>Discount:</b> 0.00$</span>
                        <span><b>Total:</b> 40$</span>
                    </div>
                    <button className="btn-primary">CHECKOUT NOW !</button>
                </div>
            </div>
        </div>
    )
}

export default Cart