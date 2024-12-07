import React, { useEffect, useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import Input from "../form/Input";
import { useRouter } from "next/router";
import PacmanLoader from "react-spinners/PacmanLoader";
import AOS from "aos";
import "aos/dist/aos.css";

const Search = ({ setIsSearchModal }) => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
                setProducts(res.data);
                setFiltered(res.data.slice(0, 5));
            } catch (error) {
                console.log(error);
            }
        };
        setTimeout(() => {
            getProducts();
        }, 1000)
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);

        const searchFilter = products.filter(
            (product) => product.title.toLowerCase().includes(e.target.value.toLowerCase())
        ).slice(0, 5);
        setFiltered(searchFilter)
    }

    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1000,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className="fixed w-screen h-screen z-50 top-0 left-0 after:content-[''] after:w-screen after:h-screen after:absolute after:top-0 after:left-0 grid place-content-center after:bg-black after:opacity-60" data-aos="zoom-in">
            <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
                <div className="w-full h-full grid place-content-center">
                    <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl">
                        <Title addClass="text-[40px] text-center">Search</Title>
                        <Input placeholder="Search..." onChange={handleSearch} />
                        {products.length > 0 ? (
                            <ul className="mt-4">
                                {filtered.length > 0 ? filtered.map((product) => (
                                    <li
                                        className="flex items-center justify-between px-2 py-1 hover:bg-primary transition-all cursor-pointer"
                                        key={product._id}
                                        onClick={() => {
                                            router.push(`/product/${product?._id}`);
                                            setIsSearchModal(false);
                                        }}
                                    >
                                        <div className="relative flex">
                                            <Image
                                                src={product?.img}
                                                width={48}
                                                height={48}
                                                alt={product?.title}
                                                priority
                                            />
                                        </div>
                                        <span className="font-bold">{product?.title}</span>
                                        <span className="font-bold">{product?.prices} $</span>
                                    </li>
                                )) : (
                                    <div className="flex justify-center items-center my-5">
                                        <p className="font-semibold">{"Product not found... "}</p>
                                        <i className="fa-solid fa-face-frown text-primary text-[30px] px-2"></i>
                                    </div>
                                )}
                            </ul>
                        ) : (
                            <div className="flex justify-center items-center py-5">
                                <PacmanLoader color="#fca311" />
                            </div>
                        )}
                        <button className="absolute top-4 right-4" onClick={() => setIsSearchModal(false)}>
                            <IoMdClose size={25} className="transition-all" />
                        </button>

                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default Search