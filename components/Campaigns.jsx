import Image from "next/image"
import Title from "./ui/Title"
import { FaShoppingCart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CampaignItem = () => {

    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1000,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4" data-aos="zoom-in">
            <div className="relative sm:h-36 sm:w-36 h-36 w-36 after:[''] border-[5px] border-primary rounded-full overflow-hidden">
                <Image
                    className="hover:scale-105 transition-all"
                    src="/images/o1.jpg"
                    fill
                    alt=""
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="text-white">
                <Title addClass="text-2xl">Tasty Thursdays</Title>
                <div className="font-dancing">
                    <span className="text-[40px]">20%</span>
                    <span className="text-xl inline-block ml-1">off</span>
                </div>
                <button className="btn-primary flex items-center gap-x-1">
                    <span>Order</span>
                    <span>Now</span>
                    <FaShoppingCart size={20} />
                </button>
            </div>
        </div>
    )
}



const Campaigns = () => {
    return (
        <div className="flex flex-wrap container mx-auto pb-20 gap-6 overflow-hidden">
            <CampaignItem />
            <CampaignItem />
        </div>
    )
}

export default Campaigns