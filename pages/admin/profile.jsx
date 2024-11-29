import Image from 'next/image';
import React, { useState } from 'react';
import Products from '../../components/admin/Products';
import Order from '../../components/admin/Order';
import Category from '../../components/admin/Category';
import Footer from '../../components/admin/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const Profile = () => {

  const [tabs, setTabs] = useState(0);
  const { push } = useRouter();

  const closeAdminAccount = async () => {
    try {
      if (confirm("Are you sure you want to close your Admin Account ?")) {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
        if (res.status === 200) {
          push("/admin");
          toast.success("Admin account closed");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex px-10 py-5 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-0 mb-10'>
      <div className='lg:w-80 w-100 lg:text-start text-center flex-shrink-0'>
        <div className='relative flex flex-col items-center p-10 border border-b-0'>
          <Image src="/images/admin.png" alt='' width={100} height={100} className='rounded-full' priority />
          <b className='text-2xl  mt-1'>Admin</b>
        </div>
        <ul className=''>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 0 && "bg-primary text-white"}`} onClick={() => setTabs(0)}>
            <i className="fa-solid fa-burger"></i>
            <button className='ml-2'>Products</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 1 && "bg-primary text-white"}`} onClick={() => setTabs(1)}>
            <i className="fa-solid fa-file-invoice"></i>
            <button className='ml-2'>Orders</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 2 && "bg-primary text-white"}`} onClick={() => setTabs(2)}>
            <i className="fa-solid fa-table-list"></i>
            <button className='ml-2'>Categories</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 3 && "bg-primary text-white"}`} onClick={() => setTabs(3)}>
            <i className="fa-solid fa-window-maximize"></i>
            <button className='ml-2'>Footer</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all`} onClick={closeAdminAccount}>
            <i className="fa-solid fa-right-to-bracket"></i>
            <button className='ml-2'>Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && (<Products />)}
      {tabs === 1 && (<Order />)}
      {tabs === 2 && (<Category />)}
      {tabs === 3 && (<Footer />)}
    </div>
  )
}


export const getServerSideProps = (ctx) => {
  const myCookiec = ctx.req?.cookies || " ";
  if (myCookiec.token !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      }
    }
  }

  return {
    props: {},
  }
}

export default Profile