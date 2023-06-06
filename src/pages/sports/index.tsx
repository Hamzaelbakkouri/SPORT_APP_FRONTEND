import Navbar from '@/components/Navbar/Navbar';
import RoutingWithSlashes from '@/components/Path/Path';
import { BigSearch } from '@/components/Search/Search';
import { AllSportsSection } from '@/components/Section/AllSearchSection';
import { SideSports } from '@/components/Sidebar/SideBar';
import { useRouter } from 'next/router';
import React from 'react'


const Sport = () => {
    const { asPath } = useRouter();
    return (
        <div>
            <Navbar />
            <BigSearch />
            <RoutingWithSlashes router={asPath} />
            <h1 className='w-full text-center'>ALL SPORTS</h1>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <AllSportsSection />
                </div>
                <div className='flex flex-col col-span-1'>
                    <SideSports />
                </div>
            </div>
        </div>
    )
}

export default Sport;
