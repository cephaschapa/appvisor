import Image from "next/image"
import  {GlobeAltIcon, MenuIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'

function Header() {
    return (
        <header className="w-full sticky top-0 z-50 shadow-md bg-white">
            <div className="px-5 lg:px-52 flex justify-between items-center h-20">
                {/* Logo */}
                <div className="relative flex h-10 cursor-pointer w-24 flex-grow items-center">
                    {/* <p className="font-semibold text-xl md:text-2xl lg:text-3xl text-purple-800">Appvisor</p> */}
                    <Image className="" src="/logos/152.png"  height={80} width={80}/>
                </div>
                {/* Search */}
                <div className="flex flex-grow items-center">
                    <div className="flex border border-gray-300 p-3 rounded-xl flex-grow">
                        <input className="text-sm flex flex-grow outline-none truncate" placeholder="Where do you want to go?"/>
                        <SearchIcon className="h-6 w-6 cursor-pointer ml-2 bg-transparent"/>
                    </div>
                </div>
                {/* Left items */}
                <div className="flex flex-grow justify-end space-x-4 items-center text-purple-800">
                    <button className="hidden md:inline text-white bg-purple-800 p-3 rounded-xl">Become a rider</button>
                    <button className="hidden md:inline text-purple-800 p-3 rounded-xl border border-purple-800">Order a bite</button>
                    <GlobeAltIcon className="hidden md:inline h-6 w-6 cursor-pointer"/>
                    <div className="border-0 flex cursor-pointer  space-x-2 md:border border-gray-300 p-3 rounded-xl">
                        <MenuIcon className="h-8 w-8 md:h-6 md:w-6"/>
                        <UserIcon className="h-6 w-6 hidden md:inline"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
