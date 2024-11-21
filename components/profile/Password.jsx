import Input from '../form/Input';
import Title from '../ui/Title';
import { useFormik } from 'formik';
import { updatePasswordSchema } from '../../schema/updatePassword';

const Password = () => {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
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
                <button className='btn-primary mt-4' type='submit'>Update</button>
            </div>
        </form>
    )
}

export default Password