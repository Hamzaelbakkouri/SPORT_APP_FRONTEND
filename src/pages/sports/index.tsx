import Navbar from '@/components/Navbar/Navbar';
import { BigSearch } from '@/components/Search/Search';
import { AllSportsSection } from '@/components/Section/AllSearchSection';
import { SideSports } from '@/components/Sidebar/SideBar';
import Link from 'next/link';
import React from 'react'


export const RoutingWithSlashes = ({ router }: { router: string }) => {
    const routeSplitted = router.split('/');
    const centerOne = routeSplitted[routeSplitted.length - 2]
    const lastOne = routeSplitted[routeSplitted.length - 1]
    return (
        <>
            <div className=" inline-flex items-center p-5 text-base font-medium text-black rounded-lg bg-gray-50 hover:bg-gray-100 ">
                <span className="">
                    <div className="flex gap-2 ">
                        <Link className='text-primary-500' href={"/"}>
                            <div className="">ACCUEIL</div>
                        </Link>
                        {'/'}
                        {centerOne &&
                            <>
                                <Link href={`/${centerOne}`} >
                                    <div className="text-primary-500">
                                        {centerOne.toLocaleUpperCase()}
                                    </div>
                                </Link>
                                {'/'}
                            </>
                        }

                        <div>
                            {lastOne.toLocaleUpperCase()}
                        </div>
                    </div>
                </span>
            </div>
        </>
    )

}

const Sport = () => {
    return (
        <div>
            <Navbar />
            <BigSearch />
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
