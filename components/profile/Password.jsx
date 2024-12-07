import Input from '../form/Input';
import Title from '../ui/Title';
import { useFormik } from 'formik';
import { updatePasswordSchema } from '../../schema/updatePassword';
import axios from 'axios';
import { toast } from 'react-toastify';

const Password = ({ user }) => {

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values)
            toast.success("Password update successfully")
            actions.resetForm();
        } catch (err) {
            console.log(err)
        }
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        enableReinitialize: true,
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        onSubmit,
        validationSchema: updatePasswordSchema,
    });

    const inputs = [
        {
            id: 1,
            name: "password",
            type: "password",
            placeholder: "Your password",
            value: values.password,
            errorsMessage: errors.password,
            touched: touched.password,
        },
        {
            id: 2,
            name: "confirmPassword",
            type: "password",
            placeholder: "Your password again",
            value: values.confirmPassword,
            errorsMessage: errors.confirmPassword,
            touched: touched.confirmPassword,
        },
    ]
    return (
        <form onSubmit={handleSubmit} className='lg:p-8 flex-1 lg:mt-0 mt-5'>
            <Title addClass="text-[40px] lg:text-start text-center">Password</Title>
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

export default Password