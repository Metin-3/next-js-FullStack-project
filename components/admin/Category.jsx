import { useState } from 'react';
import Title from '../ui/Title';
import Input from '../form/Input';

const Category = () => {
    const [inputTex, setInputTex] = useState();
    const [categories, setCategories] = useState([]);

    return (
        <div className="lg:p-8 flex-1 lg:mt-5 mt-0">
            <Title addClass="text-[40px]">Category</Title>
            <div className='mt-5'>
                <div className='flex gap-2 flex-1 items-center'>
                    <Input
                        placeholder="Add a new category..."
                        onChange={(e) => setInputTex(e.target.value)}
                        value={inputTex}
                    />~~~~
                    {inputTex}
                    <button className="btn-primary" onClick={() => {
                        setCategories([...categories, inputTex])
                        setInputTex("")
                    }}>Add</button>
                </div>
                <div className='mt-10'>
                    {categories.map((category, index) => (
                        <div className='flex justify-between mt-4' key={index}>
                            <b className='text-xl'>{category}</b>
                            <button className="btn-primary !bg-danger" onClick={() => setCategories(categories.filter((cat) => cat !== category))}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category