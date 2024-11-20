import Image from "next/image"


const CustomerItem = ({ imgSrc }) => {
    return (
        <div className='container mt-5'>
            <div className="p-6 bg-secondary text-white rounded-[5px]">
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
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                />
            </div>
        </div>
    )
}

export default CustomerItem