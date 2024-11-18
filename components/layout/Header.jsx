import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";

const Header = () => {

    const [isSearchModal, setIsSearchModal] = useState(false)
    const [isMenuModal, setIsMenuModal] = useState(false)
    const router = useRouter()
    return (
        <div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"}`}>
            <div className="container mx-auto text-white flex justify-between items-center h-full">
                <Logo />
                <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto h-screen w-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${isMenuModal === true && "!grid place-content-center"}`}>
                    <ul className="flex  gap-x-2 sm:flex-row flex-col items-center">
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <a href="#">Home</a>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <a href="#">Menu</a>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <a href="#">About</a>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <a href="#">Book Table</a>
                        </li>
                    </ul>
                    {isMenuModal && (
                        <button className="absolute top-4 right-4" onClick={() => setIsMenuModal(false)}>
                            <IoMdClose size={25} className="transition-all" />
                        </button>
                    )}
                </nav>
                <div className="flex gap-x-4 items-center">
                    <a href="#" className="hover:text-primary transition-all"><FaUserAlt /></a>
                    <a href="#" className="hover:text-primary transition-all"><FaShoppingCart /></a>
                    <button onClick={() => setIsSearchModal(true)}><FaSearch />
                    </button>
                    <a href="#" className="md:inline-block hidden">
                        <button className="btn-primary">Order Online</button>
                    </a>
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