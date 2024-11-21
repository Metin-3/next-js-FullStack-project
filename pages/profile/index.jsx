import { useFormik } from 'formik'
import Input from '../../components/form/Input'
import Title from '../../components/ui/Title'
import Image from 'next/image'
import React from 'react'
import { profileSchema } from '../../schema/profile'

const Profile = () => {

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      adress: '',
      job: '',
      bio: '',
    },
    onSubmit,
    validationSchema: profileSchema,
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorsMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorsMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your E-mail Adress",
      value: values.email,
      errorsMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "adress",
      type: "text",
      placeholder: "Your adress",
      value: values.adress,
      errorsMessage: errors.adress,
      touched: touched.adress,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Your job",
      value: values.job,
      errorsMessage: errors.job,
      touched: touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your bio",
      value: values.bio,
      errorsMessage: errors.bio,
      touched: touched.bio,
    },
  ]
  return (
    <div className='flex px-10 py-5 min-h-[calc(100vh_-_433px)]'>
      <div className='w-80 flex-shrink-0'>
        <div className='relative flex flex-col items-center p-10 border border-b-0'>
          <Image src="/images/download.jpg" alt='' width={100} height={100} className='rounded-full' />
          <b className='text-2xl  mt-1'>John Done</b>
        </div>
        <ul className=''>
          <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <i className="fa-solid fa-house"></i>
            <button className='ml-2'>Acount</button>
          </li>
          <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <i className="fa-solid fa-key"></i>
            <button className='ml-2'>Password</button>
          </li>
          <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <i className="fa-solid fa-file-invoice"></i>
            <button className='ml-2'>Orders</button>
          </li>
          <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <i className="fa-solid fa-right-to-bracket"></i>
            <button className='ml-2'>Exit</button>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit} className='p-8 flex-1'>
        <Title addClass="text-[40px]">Acount Settings</Title>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          <button className='btn-primary mt-4'>Update</button>
        </div>
      </form>
    </div>
  )
}

export default Profile