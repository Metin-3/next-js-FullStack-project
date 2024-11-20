import { useFormik } from 'formik';
import Input from '../../components/form/Input'
import Title from '../../components/ui/Title'
import { adminSchema } from '../../schema/admin';
import Link from 'next/link';


const Index = () => {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit,
        validationSchema: adminSchema,
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Your enter username",
            value: values.username,
            errorsMessage: errors.username,
            touched: touched.username,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Your password",
            value: values.password,
            errorsMessage: errors.password,
            touched: touched.password,
        },
    ]
    return (
        <div className='container mx-auto py-3'>
            <form className='flex flex-col items-center my-20 md:w-1/2 w-full mx-auto' onSubmit={handleSubmit}>
                <Title addClass="text-[40px] mb-6">Admin Login</Title>
                <div className='flex flex-col gap-y-3 w-full'>
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    ))}
                </div>
                <div className='flex flex-col w-full gap-y-3 mt-6'>
                    <button className="btn-primary font-bold">Login</button>
                    <Link href="/">
                        <span className='text-[14px] underline cursor-pointer text-secondary'>Home Page</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Index