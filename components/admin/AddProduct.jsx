import Title from "../ui/Title";
import OutsideClickHandler from "react-outside-click-handler";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = ({ setIsProductModal }) => {

    const [file, setFile] = useState();
    const [imageSrc, setImageSrc] = useState();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("pizza");
    const [prices, setPrices] = useState([]);

    const [extra, setExtra] = useState("");
    const [extraOptions, setExtraOptions] = useState([]);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);
                setCategories(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [])

    const handleExtra = (e) => {
        if (extra) {
            if (extra.text && extra.price) {
                setExtraOptions((prev) => [...prev, extra]);
                setExtra(" ");
            }
        }
    }


    const handleOnChange = (changeEvent) => {
        const reader = new FileReader();

        reader.onload = function (onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            setFile(changeEvent.target.files[0]);
        };
        reader.readAsDataURL(changeEvent.target.files[0]);
    };

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    }

    const handleOnCreate = async () => {
        const data = new FormData();
        data.append("file", file);;
        data.append("upload_preset", "food-ordering");

        try {
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/dzxtyzkvr/image/upload",
                data
            );
            const { url } = uploadRes.data;
            const newProduct = {
                img: url,
                title,
                desc,
                category: category.toLowerCase(),
                prices,
                extraOptions,
            }

            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, newProduct);

            if (res.status === 201) {
                setIsProductModal(false);
                toast.success("Product created successfully !");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="fixed w-screen h-screen z-50 top-0 left-0 after:content-[''] after:w-screen after:h-screen after:absolute after:top-0 after:left-0 grid place-content-center after:bg-black after:opacity-60">
            <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
                <div className="w-full h-full grid place-content-center">
                    <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl">
                        <Title addClass="text-[40px] text-center">Add a New Product</Title>
                        <div className="flex flex-col text-sm mt-6">
                            <label className="flex  gap-2 items-center h-20">
                                <input
                                    type="file"
                                    onChange={handleOnChange}
                                    className="hidden"
                                />
                                <button className="!text-white btn-primary !rounded-none !bg-blue-600 pointer-events-none">
                                    Choose an image
                                </button>
                                {imageSrc && (
                                    <div>
                                        {/* eslint-disable @next/next/no-img-element */}
                                        <img src={imageSrc} alt="" className="w-20 h-20 rounded-full object-cover" />
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className="flex flex-col text-sm mt-4">
                            <span className="font-semibold mb-[2px]">Title</span>
                            <input
                                type="text"
                                placeholder="Write a title..."
                                className="border-2 py-2 outline-none px-2 text-sm"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col text-sm mt-4">
                            <span className="font-semibold mb-[2px]">Description</span>
                            <textarea
                                placeholder="Write a title..."
                                className="border-2 py-2  outline-none px-2 text-sm"
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col text-sm mt-4">
                            <span className="font-semibold mb-[2px]">Select category</span>
                            <select
                                className="border-2 py-2  outline-none px-2 text-sm"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                {categories.length > 0 && categories.map((category) => (
                                    <option
                                        value={category.title.toLowerCase()}
                                        key={category._id}
                                    >
                                        {category.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col text-sm mt-4">
                            <span className="font-semibold mb-[2px]">Prices</span>
                            {category === "pizza" ? (
                                <div className="flex gap-4 md:flex-nowrap flex-wrap overflow-hidden">
                                    <input
                                        type="number"
                                        placeholder="Small..."
                                        className="border-b-2 pl-0 py-2 outline-none px-2 text-sm"
                                        onChange={(e) => changePrice(e, 0)}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Medium..."
                                        className="border-b-2 pl-0 py-2 outline-none px-2 text-sm"
                                        onChange={(e) => changePrice(e, 1)}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Large..."
                                        className="border-b-2 pl-0 py-2 outline-none px-2 text-sm"
                                        onChange={(e) => changePrice(e, 2)}
                                    />
                                </div>
                            ) : (
                                <div className="flex gap-4 md:flex-nowrap flex-wrap overflow-hidden">
                                    <input
                                        type="number"
                                        placeholder="Small..."
                                        className="border-b-2 pl-0 py-2 outline-none px-2 text-sm"
                                        onChange={(e) => changePrice(e, 0)}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col text-sm mt-4">
                            <span className="font-semibold mb-[2px]">Extra</span>
                            <div className="flex gap-4 md:flex-nowrap flex-wrap overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Item..."
                                    className="border-b-2 pl-0 py-2 outline-none px-2 text-sm"
                                    name="text"
                                    onChange={(e) => setExtra({ ...extra, [e.target.name]: e.target.value })}
                                />
                                <input
                                    type="number"
                                    placeholder="Price..."
                                    className="border-b-2 pl-0 py-2 outline-none px-2 text-sm"
                                    name="price"
                                    onChange={(e) => setExtra({ ...extra, [e.target.name]: e.target.value })}
                                />
                                <button className="btn-primary" onClick={handleExtra}>Add</button>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {extraOptions.map((item, index) => (
                                    <span
                                        key={index}
                                        onClick={() => {
                                            setExtraOptions(extraOptions.filter((_, i) => i !== index))
                                        }}
                                        className=" border inline-block border-orange-500 text-orange-500 p-1 rounded-xl text-xs"
                                    >
                                        {item.text}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="btn-primary !bg-success" onClick={handleOnCreate}>Create</button>
                        </div>
                        <button className="absolute top-8 right-4" onClick={() => setIsProductModal(false)}>
                            <IoMdClose size={25} className="transition-all" />
                        </button>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default AddProduct