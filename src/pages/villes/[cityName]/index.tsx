import { useRouter } from 'next/router';
import React, { useState } from 'react'
import RoutingWithSlashes from '@/components/Path/Path';
import Navbar from '@/components/Navbar/Navbar';
import axios from 'axios';
import Contact from '@/components/Section/Contact';
import { IGym, SportI } from 'Types';
import Image from 'next/image';



const City = () => {
    const { query, asPath } = useRouter();
    const { cityName }: any = query;
    const [AllSports, setAllSports] = useState<SportI[]>();
    const [AllGyms, setAllGyms] = useState<IGym[]>();
    React.useEffect(() => {
        (async () => {
            // Allsports in this city
            const responseSports = await axios.get('/api/getSports');
            const FilterResultSports = responseSports.data.filter((sport: SportI) => sport.city === cityName)
            setAllSports(FilterResultSports)

            // AllGyms in this city
            const responseGyms = await axios.get('/api/getAllGyms');
            const FilterResultGyms = responseGyms.data.filter((Gyms: SportI) => Gyms.city === cityName)
            setAllGyms(FilterResultGyms)
        })()
    }, [])

    if (!AllSports) {
        return (
            <div>
                loading...
            </div>
        )
    }

    return (
        <>
            <div>
                <div className='bg-black'>
                    <Navbar />
                </div>
                {AllSports.map((item: SportI, idx: any) => {
                    return (
                        <div key={idx}>
                            <div style={{
                                backgroundImage: "url(" + item.image + ")",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                                className='h-full'
                            >
hamza
                            </div>
                        </div>
                    )
                })}
                <div className='px-6 py-6 grid'>
                    <RoutingWithSlashes router={asPath} />
                </div>
            </div>
            <Contact />
        </>
    )
}

export default City;
