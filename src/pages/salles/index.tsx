import Navbar from '@/components/Navbar/Navbar'
import { BigSearch } from '@/components/Search/Search';
import { AllSalleSection } from '@/components/Section/AllSearchSection';
import { SideSalles } from '@/components/Sidebar/SideBar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

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
