import Password from '../../components/profile/Password';
import Acount from '../../components/profile/Acount';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Order from '../../components/profile/Order';
import {  signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Profile = ({ user }) => {

  const { data: session } = useSession();
  const [tabs, setTabs] = useState(0);
  const { push } = useRouter();


  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out ?")) {
      signOut({ redirect: false });
      push("/auth/login");
    }
  };

  useEffect(() => {
    if (!session) {
      push("/auth/login");
    }
  }, [session, push]);
  return (
    <div className='flex px-10 py-5 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-0 mb-10'>
      <div className='lg:w-80 w-100 lg:text-start text-center flex-shrink-0'>
        <div className='relative flex flex-col items-center p-10 border border-b-0'>
          <Image
            // src="/images/admin.png"
            src={user.image ? user.image : "/images/admin.png"}
            alt=''
            width={100}
            height={100}
            className='rounded-full'
            priority
          />
          <b className="text-2xl mt-1">{user.fullName}</b>
        </div>
        <ul className=''>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 0 && "bg-primary text-white"}`} onClick={() => setTabs(0)}>
            <i className="fa-solid fa-house"></i>
            <button className='ml-2'>Acount</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 1 && "bg-primary text-white"}`} onClick={() => setTabs(1)}>
            <i className="fa-solid fa-key"></i>
            <button className='ml-2'>Password</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 2 && "bg-primary text-white"}`} onClick={() => setTabs(2)}>
            <i className="fa-solid fa-file-invoice"></i>
            <button className='ml-2'>Orders</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all`} onClick={handleSignOut}>
            <i className="fa-solid fa-right-to-bracket"></i>
            <button className='ml-2'>Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && (<Acount user={user} />)}
      {tabs === 1 && (<Password user={user} />)}
      {tabs === 2 && (<Order />)}
    </div>
  );
};

export async function getServerSideProps({ req, params }) {
  
  const user = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${params.id}`)

  return {
    props: {
      user: user ? user.data : null
    },
  };
}

export default Profile