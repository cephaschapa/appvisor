import Image from 'next/image'
function MedCard({image, title}) {
    return (
        <div className="space-y-3 tran duration-150 hover:scale-105 ease-out cursor-pointer">
            <div className="relative h-80 w-80">
                <Image src={image} layout="fill" className="rounded-xl"/>
            </div>
            <p className="text-gray-500">{title}</p>
        </div>
    )
}

export default MedCard
