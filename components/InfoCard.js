import Image from "next/image"
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"

function InfoCard({des, img,total,loc, lat, lon, location, price, star, title}) {
    return (
        <div key={img} className="flex bg-gray-50 cursor-pointer hover:opacity-80 rounded-2xl transition duration-150 hover:shadow-lg p-2 mb-3">
            <div className="relative h-40 w-52">
                <Image className="rounded-2xl" src={img} layout="fill" objectFit="cover"/>
            </div>
            <div className="flex flex-col w-full px-2">
                <div className="flex justify-between w-full mt-2">
                    <p className="text-gray-400 ">{loc}</p>
                    <HeartIcon className="h-6 w-6"/>
                </div>
                <div className="">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <p className="mt-2 text-gray-400">{des}</p>
                </div>
                <div className="flex">
                    <div className="flex h-18 items-end w-full">
                        <StarIcon className="h-6 w-6 text-yellow-500"/>
                        <p className="">{star}</p>
                    </div>
                    <div className="flex flex-col h-16 bg-gray-50 w-52 justify-end items-end space-y-3">
                        <p className="font-bold text-lg lg:text-2xl">{price}</p>
                        <p className="text-gray-400">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
