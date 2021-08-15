import Image from 'next/image'


function Banner() {
    return (
        <div className="relative h-[300px] md:h-[500px] xl:h-[800px]">
            <Image src="/cd.svg" layout="fill" objectFit="cover"/>
            <div className="absolute top-1/4 w-full text-center">
                <p className="text-sm md:text-3xl font-bold text-purple-800">Not sure where you want to go? Perfect.</p>
                <button className="text-white bg-purple-800 p-5 rounded-xl mt-10 shadow-lg transition duration-150 hover:shadow-2xl active:scale-95">Order a ride</button>
            </div>
        </div>
    )
}

export default Banner
