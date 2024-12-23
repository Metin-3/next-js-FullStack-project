import axios from 'axios';
import MenuWrapper from '../../components/product/MenuWrapper'
import React from 'react'

const Index = ({ categoryList, productList }) => {

  return (
    <div className='pt-10'>
      <MenuWrapper categoryList={categoryList} productList={productList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const category = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);
  const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  return {
    props: {
      categoryList: category.data ? category.data : [],
      productList: product.data ? product.data : [],
    },
  };
};

export default Index