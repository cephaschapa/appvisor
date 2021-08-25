import Head from "next/head"
import { useRouter } from "next/router"
import FilterBtn from "../components/FilterBtn"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {format} from 'date-fns'
import InfoCard from "../components/InfoCard"


function Search({searchResults}) {
    console.log(searchResults)
    const router = useRouter()
    // console.log(router.query)

    const {startDate, endDate, location, numberOfGuests} = router.query
    console.log(startDate, endDate, location, numberOfGuests)

    const startdate = format(new Date(startDate), "dd, MMMM, yy")
    const enddate = format(new Date(endDate), "dd, MMMM, yy")

    const range = `${startdate} ${enddate}`



    return (
        <div>
            <Head>
                <title>Search Results</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon (1).ico" />
            </Head>
            {/* Header */}
            <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`}/>
            {/* Main */}
            <main>
                <section className="p-5 md:p-10 lg:p-16 lg:px-52 text-xs max-w-7xl">
                    <p>300+ Stays from {range} for <span className="font-bold">{numberOfGuests}</span> guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="space-x-2 hidden lg:inline-flex"> 
                        <FilterBtn title="Cancellation Flexibility"/>
                        <FilterBtn title="Price"/>
                        <FilterBtn title="Type of place"/>
                        <FilterBtn title="Rooms and Birds"/>
                        <FilterBtn title="More Filters"/>
                    </div>
                    {searchResults.map(data => {
                        console.log(data)
                        return (<InfoCard des={data.description} img={data.img} loc={data.location} lat={data.lat} lon={data.long} price={data.price} star={data.star} title={data.title} total={data.total}/>)
                    })}
                    
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/isz").then(res=>res.json())

    return {
        props: {
            searchResults
        }
    }
}
