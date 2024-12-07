import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const CustomerItem = ({ imgSrc }) => {

    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1000,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className='mt-5 mx-4' data-aos="zoom-in-up">
            <div className="p-6 bg-secondary text-white rounded-[5px] hover:text-secondary hover:bg-primary productTransition">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam necessitatibus quo quibusdam facere deleniti adipisci exercitationem asperiores, architecto blanditiis sed repudiandae et, maxime commodi impedit. Soluta nostrum nisi rem.
                </p>
                <div className="flex flex-col mt-4">
                    <span className="text-lg font-semibold">Moana Michel</span>
                    <p className="text-[15px]">Lorem, ipsum.</p>
                </div>
            </div>
            <div className="relative w-28 h-28 border-8 border-primary rounded-full mt-8 before:content-[''] before:absolute before:top-0 flex justify-center before:-translate-y-4 before:rotate-45 before:bg-primary before:w-5 before:h-5">
                <Image
                    src={imgSrc}
                    alt="customer"
                    fill
                    className="rounded-full"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </div>
    )
}

export default CustomerItem