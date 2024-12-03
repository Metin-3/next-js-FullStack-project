import Title from "../ui/Title";
import OutsideClickHandler from "react-outside-click-handler";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const AddProduct = ({ setIsProductModal }) => {

    const [file, setFile] = useState();
    const [imageSrc, setImageSrc] = useState();


    const handleOnChange = (changeEvent) => {
        const reader = new FileReader();

        reader.onload = function (onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            setFile(changeEvent.target.files[0]);
        };
        reader.readAsDataURL(changeEvent.target.files[0]);
        console.log(imageSrc);

    };

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
                                    onChange={(e) => handleOnChange(e)}
                                    className="hidden"
                                />
                                <button className="btn-primary !rounded-none !bg-blue-600 pointer-events-none">
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
                            <input type="text" placeholder="Write a title..." className="border-2 py-2 outline-none px-2 text-sm" />
                        </div>
                        <div className="flex flex-col text-sm mt-4">
                            <span className="font-semibold mb-[2px]">Description</span>
                            <textarea placeholder="Write a title..." className="border-2 py-2  outline-none px-2 text-sm" />
                        </div>
                        <div className="flex flex-col text-sm mt-4">
                            <span className="font-semibold mb-[2px]">Select category</span>
                            <select name="" id="" className="border-2 py-2  outline-none px-2 text-sm">
                                <option value="1">Ctegory 1</option>
                                <option value="2">Ctegory 2</option>
                                <option value="3">Ctegory 3</option>
                                <option value="4">Ctegory 4</option>
                            </select>
                        </div>

                        <div className="flex flex-col text-sm mt-4">
                            <span className="font-semibold mb-[2px]">Price</span>
                            <div className="flex gap-4 md:flex-nowrap flex-wrap overflow-hidden">
                                <input type="number" placeholder="Small..." className="border-b-2 pl-0 py-2 outline-none px-2 text-sm" />
                                <input type="number" placeholder="Medium..." className="border-b-2 pl-0 py-2 outline-none px-2 text-sm" />
                                <input type="number" placeholder="Large..." className="border-b-2 pl-0 py-2 outline-none px-2 text-sm" />
                            </div>
                        </div>

                        <div className="flex flex-col text-sm mt-4">
                            <span className="font-semibold mb-[2px]">Extra</span>
                            <div className="flex gap-4 md:flex-nowrap flex-wrap overflow-hidden">
                                <input type="text" placeholder="Item..." className="border-b-2 pl-0 py-2 outline-none px-2 text-sm" />
                                <input type="number" placeholder="Price..." className="border-b-2 pl-0 py-2 outline-none px-2 text-sm" />
                                <button className="btn-primary">Add</button>
                            </div>
                            <div className="mt-2">
                                <span className=" border inline-block border-orange-500 text-orange-500 p-1 rounded-xl text-xs">Ketcup</span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="btn-primary !bg-success">Create</button>
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