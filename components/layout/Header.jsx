import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from 'react-redux';

const Header = () => {

    const [isSearchModal, setIsSearchModal] = useState(false);
    const [isMenuModal, setIsMenuModal] = useState(false);
    const cart = useSelector((state) => state.cart);
    const router = useRouter();

    //!============= scrol navbar =================
    // const [navbar, setNavbar] = useState(false);

    // const changeBackground = () => {
    //     if (window.scrollY <= 200) {
    //         setNavbar(true)
    //     } else {
    //         setNavbar(false)
    //     }
    // };
    // window.addEventListener("scroll", changeBackground);


    return (
        <div className={`h-[5.5rem] z-50 relative w-full  ${router.asPath === "/" ? "bg-transparent " : "bg-secondary !fixed"}`}>
            <div className="container mx-auto text-white flex justify-between items-center h-full">
                <Logo />
                <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto h-screen w-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden z-50 ${isMenuModal === true && "!grid place-content-center"}`}>
                    <ul className="flex  gap-x-2 sm:flex-row flex-col items-center">
                        <li className={`relative px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ${router.asPath === "/" && "text-primary"}`}>
                            <Link href="/" className="link-two" onClick={() => setIsMenuModal(false)}>Home</Link>
                        </li>
                        <li className={`relative px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ${router.asPath === "/menu" && "text-primary"}`}>
                            <Link href="/menu" className="link-two" onClick={() => setIsMenuModal(false)}>Menu</Link>
                        </li>
                        <li className={`relative px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ${router.asPath === "/about" && "text-primary"}`}>
                            <Link href="/about" className="link-two" onClick={() => setIsMenuModal(false)}>About</Link>
                        </li>
                        <li className={`relative px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ${router.asPath === "/reservation" && "text-primary"}`}>
                            <Link href="/reservation" className="link-two" onClick={() => setIsMenuModal(false)}>Book Table</Link>
                        </li>
                    </ul>
                    {isMenuModal && (
                        <button className="absolute top-4 right-4" onClick={() => setIsMenuModal(false)}>
                            <IoMdClose size={25} className="transition-all" />
                        </button>
                    )}
                </nav>
                <div className="flex gap-x-4 items-center">
                    <Link href="/auth/login" className={`hover:text-primary transition-all cursor-pointer ${(router.asPath.includes("profile") || router.asPath.includes("auth")) && "text-primary"}`}>
                        <FaUserAlt size={18} />
                    </Link>
                    <Link href="/cart" className={`hover:text-primary transition-all cursor-pointer relative ${router.asPath === "/cart" && "text-primary"}`}>
                        <FaShoppingCart size={18} />
                        <span className="w-5 h-5 grid place-content-center rounded-full bg-primary text-xs absolute -top-[13px] -right-3 text-secondary font-bold">
                            {cart.products.length === 0 ? "0" : cart.products.length}
                        </span>
                    </Link>
                    <button onClick={() => setIsSearchModal(true)} className="cursor-pointer">
                        <FaSearch size={18} />
                    </button>
                    <Link href="/menu" className="md:inline-block hidden">
                        <button className="btn-three hover:text-white btn-primary">Order Online</button>
                    </Link>
                    <button className="sm:hidden inline-block" onClick={() => setIsMenuModal(true)}>
                        <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
                    </button>
                </div>
            </div>
            {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
        </div>
    )
}

export default Header