import Image from 'next/image'

function PlacesCard({location, distance,image}) {
    return (
        <div className=" flex bg-gray-100 m-2 items-center rounded-xl cursor-pointer space-y-1 transition duration-150 hover:bg-gray-150 hover:scale-105">
            <div className="relative h-16 w-16">
                <Image src={image} layout="fill" className="rounded-xl"/>
            </div>
            <div className="px-2">
                <p className="font-bold">{location}</p>
                <p className="text-sm">{distance}</p>
            </div>
        </div>
    )
}

export default PlacesCard
