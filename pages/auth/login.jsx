import { useFormik } from 'formik';
import Input from '../../components/form/Input'
import Title from '../../components/ui/Title'
import { loginSchema } from '../../schema/login';
import Link from 'next/link';
import { getSession, signIn, useSession } from "next-auth/react"
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Login = () => {

    const { data: session } = useSession();
    const { push } = useRouter();
    const [currentUser, setCurrentUser] = useState();

    const onSubmit = async (values, actions) => {
        const { email, password } = values;
        let options = { redirect: false, email, password };
        try {
            const res = await signIn("credentials", options);
            actions.resetForm();
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
                setCurrentUser(res.data?.find((user) => user.email === session?.user.email));
                session && push("/profile/" + currentUser?._id);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [session, push, currentUser]);

    console.log(session)
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit,
        validationSchema: loginSchema,
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Your E-mail Adress",
            value: values.email,
            errorsMessage: errors.email,
            touched: touched.email,
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
        <div className='container mx-auto'>
            <form className='flex flex-col items-center my-20 md:w-1/2 w-full mx-auto' onSubmit={handleSubmit}>
                <Title addClass="text-[40px] mb-6">Login</Title>
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
                    <button className=" btn-three btn-primary font-bold" type="submit">Login</button>
                    <button className="btn-5 !rounded-none btn-primary !text-white !bg-secondary font-bold" type='button' onClick={() => signIn("github")}>
                        <i className="fa-brands fa-github"></i>  GitHub
                    </button>
                    <Link href="/auth/register">
                        <span className='text-[14px] underline cursor-pointer text-secondary'>Do you no have a account ?</span>
                    </Link>
                </div>
            </form>
        </div>
    )
};


export async function getServerSideProps({ req }) {
    const session = await getSession({ req });

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
    const user = res.data?.find((user) => user.email === session?.user.email);
    console.log(user)

    if (session && user) {
        return {
            redirect: {
                destination: "/profile/" + user._id,
                permanent: false,
            }
        }
    }

    return {
        props: {},
    };
}

export default Login