import MenuWrapper from '@/components/product/MenuWrapper'
import Campaigns from '../../components/Campaigns'
import Carousel from '../../components/Carousel'
import React from 'react'

const Index = () => {
  return (
    <div>
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
    </div>
  )
}

export default Index