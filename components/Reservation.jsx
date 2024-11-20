import React from 'react'
import Title from './ui/Title'
import Input from './form/Input'
import { useFormik } from 'formik'

const Reservation = () => {

    const onSubmit = async (values,actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
    };

    const { values, handleSubmit, handleChange} = useFormik({
        initialValues: {
            fullName: '',
            phoneNumber: '',
            email: '',
            persons: '',
            date: '',
        },
        onSubmit,
    });

    console.log(values);


    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
            value: values.fullName,
        },
        {
            id: 2,
            name: "phoneNumber",
            type: "number",
            placeholder: "Your Phone Number",
            value: values.phoneNumber,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Your E-mail Adress",
            value: values.email,
        },
        {
            id: 4,
            name: "persons",
            type: "number",
            placeholder: "How Many Persons  ?",
            value: values.persons,
        },
        {
            id: 5,
            name: "date",
            type: "datetime-local",
            placeholder: "Your E-mail Adres",
            value: values.date,
        },
    ]
    return (
        <div className='container mx-auto py-12'>
            <Title addClass="text-[40px] mb-10">Book A Table</Title>
            <div className='flex justify-between flex-wrap-reverse  gap-10'>
                <form className='lg:flex-1 w-full' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-y-4'>
                        {inputs.map((input) => (
                            <Input key={input.id} {...input} onChange={handleChange} />
                        ))}
                    </div>
                    <button className="btn-primary mt-4" type='submit'>BOOK NOW</button>
                </form>
                <div className='lg:flex-1 w-full'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361190753!2d-74.30933632161008!3d40.69753995481267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2saz!4v1732046123380!5m2!1sen!2saz"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className='w-full h-full'
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Reservation