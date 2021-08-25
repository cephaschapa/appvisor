import Image from "next/image"
import  {GlobeAltIcon, MenuIcon, SearchIcon, UserGroupIcon, UserIcon} from '@heroicons/react/outline'
import {useState} from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import {useRouter} from 'next/router'

function Header({placeholder}) {
    const [search, setSearch] = useState('')
    const [num, setNum] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const router = useRouter()
    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const searchQuery = () => {
        setSearch('')
        router.push({
            pathname: '/search',
            query:{
                location:search,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests: num,
            }
        })
    }
    return (
        <header className="w-full sticky top-0 z-50 shadow-md bg-white">
            <div className="px-5 lg:px-52 flex justify-between items-center h-20">
                {/* Logo */}
                <div className="relative flex h-10 cursor-pointer w-24 flex-grow items-center">
                    {/* <p className="font-semibold text-xl md:text-2xl lg:text-3xl text-purple-800">Appvisor</p> */}
                    <Image className="" src="/logos/152.png"  height={80} width={80} onClick={() => router.push('/')}/>
                </div>
                {/* Search */}
                <div className="flex flex-grow items-center">
                    <div className="flex border border-gray-300 p-3 rounded-xl flex-grow">
                        <input value={search} className="text-sm flex flex-grow outline-none truncate" placeholder={placeholder? placeholder: "Where do you want to go?"} onChange={(e)=>{
                            setSearch(e.target.value)
                            console.log(search)
                        }}/>
                        <SearchIcon className="h-6 w-6 cursor-pointer ml-2 bg-transparent"/>
                    </div>
                </div>
                {/* Left items */}
                <div className="flex flex-grow justify-end space-x-4 items-center text-purple-800">
                    <button className="hidden md:inline text-white bg-purple-800 p-3 rounded-xl">Become a driver</button>
                    <button className="hidden md:inline text-purple-800 p-3 rounded-xl border border-purple-800">Become a driver</button>
                    <GlobeAltIcon className="hidden md:inline h-6 w-6 cursor-pointer"/>
                    <div className="border-0 flex cursor-pointer  space-x-2 md:border border-gray-300 p-3 rounded-xl">
                        <MenuIcon className="h-8 w-8 md:h-6 md:w-6"/>
                        <UserIcon className="h-6 w-6 hidden md:inline"/>
                    </div>
                </div>
            </div>
           {
               search &&  <div className="flex flex-col items-center">
                   <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={["#673ab7"]} onChange={handleSelect}/>
                   <div className="flex flex-col w-1/2 space-y-3 py-2 lg:w-96">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold flex-grow">Number of guests</p>
                            <div className="flex items-center">
                                <UserGroupIcon className="h-6 w-6"/>
                                <input value={num} onChange={(e)=>setNum(e.target.value)} type="number" className="w-16 px-2 outline-none bg-gray-100 ml-1 h-12 text-sm rounded-2xl" placeholder="#"/> 
                             </div>
                        </div>
                        <div className="flex justify-between">
                            <button className="p-3 border border-purple-800 rounded-2xl text-purple-800">Cancel</button>
                            <button className="p-3 bg-purple-800 text-white rounded-2xl" onClick={searchQuery}>Search</button>
                        </div>
                   </div>
               </div>
           }
        </header>
    )
}

export default Header
