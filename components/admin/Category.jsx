import { useEffect, useState } from 'react';
import Title from '../ui/Title';
import Input from '../form/Input';
import axios from 'axios';
import { toast } from 'react-toastify';

const Category = () => {
    const [inputTex, setInputTex] = useState();
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
                setCategories(res?.data);
            } catch (error) {
                console.log(error)
            }
        };
        getCategories();
    }, []);


    const handleCreate = async () => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, { title: inputTex });
            setCategories([...categories, res.data]);
            setInputTex("");
            toast.success("Create category successfully");
        } catch (error) {
            toast.error("Failed to create category");
            console.log(error)
        }
    };


    const handleDelete = async (id) => {
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`);
            setCategories(categories.filter((cat) => cat._id !== id));
            toast.success("Delete category successfully")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="lg:p-8 flex-1 lg:mt-5 mt-0">
            <Title addClass="text-[40px]">Category</Title>
            <div className='mt-5'>
                <div className='flex gap-2 flex-1 items-center'>
                    <Input
                        placeholder="Add a new category..."
                        onChange={(e) => setInputTex(e.target.value)}
                        value={inputTex}
                    />
                    <button
                        className="btn-primary font-bold !text-secondary"
                        onClick={handleCreate}
                    >Add</button>
                </div>
                <div className='mt-10 max-h-[250px] overflow-auto  pb-4'>
                    {categories.map((category) => (
                        <div className='flex justify-between mt-4' key={category._id}>
                            <b className='text-xl'>{category.title}</b>
                            <button className="btn-primary !bg-danger" onClick={() => handleDelete(category._id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category