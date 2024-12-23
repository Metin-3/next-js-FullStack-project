import React from "react";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { profileSchema } from '../../schema/profile';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from "react-toastify";

const Acount = ({ user }) => {

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${user._id}`, values)
            toast.success("Profile update successfully")
        } catch (err) {
            console.log(err)
        }
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullName: user?.fullName,
            phoneNumber: user?.phoneNumber,
            email: user?.email,
            adress: user?.adress,
            job: user?.job,
            bio: user?.bio,
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
            value: values?.fullName,
            errorsMessage: errors.fullName,
            touched: touched.fullName,
        },
        {
            id: 2,
            name: "phoneNumber",
            type: "number",
            placeholder: "Your Phone Number",
            value: values?.phoneNumber,
            errorsMessage: errors.phoneNumber,
            touched: touched.phoneNumber,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Your E-mail Adress",
            value: values?.email,
            errorsMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 4,
            name: "adress",
            type: "text",
            placeholder: "Your adress",
            value: values?.adress,
            errorsMessage: errors.adress,
            touched: touched.adress,
        },
        {
            id: 5,
            name: "job",
            type: "text",
            placeholder: "Your job",
            value: values?.job,
            errorsMessage: errors.job,
            touched: touched.job,
        },
        {
            id: 6,
            name: "bio",
            type: "text",
            placeholder: "Your bio",
            value: values?.bio,
            errorsMessage: errors.bio,
            touched: touched.bio,
        },
    ]
    return (
        <form onSubmit={handleSubmit} className='lg:p-8 flex-1 lg:mt-0 mt-5'>
            <Title addClass="text-[40px] lg:text-start text-center">Acount Settings</Title>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                {inputs.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                ))}
                <button className='btn-three btn-primary mt-4' type='submit'>Update</button>
            </div>
        </form>
    )
}

export default Acount