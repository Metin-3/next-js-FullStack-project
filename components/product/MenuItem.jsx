import Image from 'next/image'
import React from 'react'

const MenuItem = () => {
    return (
        <div>
            <div className='relative w-40 h-40 z-50'>
                <Image src="/images/f1.png" alt='' layout='fill'/>
            </div>
        </div>
    )
}

export default MenuItem