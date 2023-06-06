import Navbar from '@/components/Navbar/Navbar'
import RoutingWithSlashes from '@/components/Path/Path';
import { BigSearch } from '@/components/Search/Search';
import { AllSalleSection } from '@/components/Section/AllSearchSection';
import { SideSalles } from '@/components/Sidebar/SideBar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';




const AllSallesPage = () => {
    const router = useRouter();
    return (
        <div>
            <Navbar />
            <BigSearch />
            <div className='px-6 py-6 grid'>
                <RoutingWithSlashes router={router.asPath} />
                <h1 className='w-full text-center'>ALL SALLES</h1>
            </div>
            <div className="flex justify-center w-full ">
                <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl">
                    <div className='lg:col-span-3'>
                        <h3>
                            All Salles
                        </h3>
                        <AllSalleSection />
                    </div>
                    <div className='lg:col-span-1 '>
                        <SideSalles />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSallesPage;
