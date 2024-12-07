import { useFormik } from 'formik';
import Input from '../../components/form/Input'
import Title from '../../components/ui/Title'
import { adminSchema } from '../../schema/admin';
import Link from 'next/link';
import axios from 'axios';
import { toast } from "react-toastify";
import { useRouter } from 'next/router';

const Index = () => {

    const { push } = useRouter()

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`, values);
            if (res.status === 200) {
                console.log(res.data);
                actions.resetForm();
                toast.success("Admin login success");
                push("/admin/profile")
            }
        } catch (error) {
            toast.error("Wrong username or password")
            console.log(error);
        }
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
                    <button className="btn-three btn-primary font-bold">Login</button>
                    <Link href="/">
                        <span className='text-[14px] underline cursor-pointer text-secondary'>Home Page</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export const getServerSideProps = (ctx) => {
    const myCookiec = ctx.req?.cookies || " ";
    if (myCookiec.token === process.env.ADMIN_TOKEN) {
        return {
            redirect: {
                destination: "/admin/profile",
                permanent: false,
            }
        }
    }

    return {
        props: {},
    }
}

export default Index