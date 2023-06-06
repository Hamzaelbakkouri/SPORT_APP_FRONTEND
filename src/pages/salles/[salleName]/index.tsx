import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Rating } from '@mui/material';
import Navbar from '@/components/Navbar/Navbar';
import { SideSports } from '@/components/Sidebar/SideBar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import ButtonBox from '@/components/Button/Button';
import axios from 'axios';
import Contact from '@/components/Section/Contact';
import SallelongDescriptions from '@/components/Section/salles/SalleLongDescription';
import Connect from '@/components/Section/Connect';
import Gallery from '@/components/Section/Gallery';
import RoutingWithSlashes from '@/components/Path/Path';
import { IGym } from 'Types';



const SallePage = () => {

    const [AllGym, setAllGym] = useState<IGym>();
    const [RatingValue, setRatingValue] = useState(3);

    const { query, asPath } = useRouter();
    const { salleName }: any = query
    React.useEffect(() => {
        (async () => {
            const res = await axios.get('/api/getAllGyms');
            const FilterResultGyms = await res.data.find((Gym: IGym) => Gym.name === salleName)
            setAllGym(FilterResultGyms)
        })()
    }, [])

    if (!AllGym) {
        return (
            <div>
                loading...
            </div>
        )
    }
    return (
        <>
            <div>
                <div
                    className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-10 flex flex-wrap flex-col h-[600px] shadow-2xl" style={{
                        backgroundImage: `url(${AllGym?.image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed ">
                        <Navbar />
                        <div className="flex h-full items-center justify-center text-black">
                            <div className="text-center">
                                <h2 className="mb-4 text-4xl font-semibold bg-white bg-opacity-70 px-7 py-3 rounded-md">{AllGym?.name}</h2>
                                <h4 className="mb-6 text-xl font-semibold bg-white bg-opacity-70 px-7 py-3 rounded-md">{AllGym?.description}</h4>
                                <Rating
                                    name="simple-controlled"
                                    value={RatingValue}
                                    className='bg-white bg-opacity-70 px-7 py-3 rounded-md'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-6 py-6 grid'>
                    <RoutingWithSlashes router={asPath} />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div className='col-span-1 lg:col-span-2'>


                        {/* A propos */}
                        <h3 className='px-6 py-6 lg:pl-32'>
                            A propos de {AllGym?.name}
                        </h3>

                        <div className="flex flex-col justify-center">
                            <div
                                className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-md shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                                <div className="w-full md:w-1/3 bg-white grid place-items-center">
                                    <Image
                                        src={AllGym?.image}
                                        alt="tailwindlogo"
                                        width={500}
                                        height={700}
                                        className="rounded-xl h-[200px]"
                                    />
                                </div>
                                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                                    <div className="flex justify-between item-center">
                                        <p className="text-gray-500 font-medium hidden md:block">Vacations</p>
                                        <div className="flex ">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <p className="text-gray-600 font-bold text-sm ml-1">
                                                {RatingValue}
                                            </p>
                                        </div>
                                        <div>
                                            <CheckCircleIcon />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <button className="text-center bg-primary-500 py-2 mx-3 px-3 text-white hover:bg-white hover:text-black border-2 shadow-sm">
                                                EN SAVOIR PLUS
                                            </button>
                                            <div className="px-3 py-1 ">
                                                <ButtonBox field='Essai' href='#' />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">{AllGym?.name}</h3>
                                    <p className="md:text-lg text-gray-500 text-base">{AllGym?.description}</p>
                                    <p className="text-xl font-bold text-gray-800">
                                        Accès pour : Femme, Homme.
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <h3 className='px-6 py-6 lg:pl-32'>
                                Description de {AllGym.name}
                            </h3>
                            <div className='col-span-1 md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-md shadow-md p-3 max-w-xs md:max-w-3xl mx-auto bg-white'>
                                <h4 className='mb-3 text-gray-500 dark:text-gray-400'>
                                    {AllGym.longDescription ? <SallelongDescriptions text={AllGym?.longDescription} /> : null}
                                </h4>
                            </div>


                            {/* Images */}
                            <h3 className='px-6 py-6 lg:pl-32'>
                                Les Images de {AllGym.name}
                            </h3>
                            <div className=' lg:pl-5'>
                                <Gallery images={AllGym?.gallery} />
                            </div>
                        </div>
                    </div>

                    {/* Side part */}
                    <div className='col-span-1 mt-36 lg:mt-0 lg:col-span-1 '>
                        <h3 className='px-6 py-6 lg:pl-32'>
                            Vous cherchez peut-être
                        </h3>
                        <SideSports />
                        <Connect />
                    </div>
                </div>
            </div>

            <div>
                <Contact />
            </div>
        </>
    )
}

export default SallePage;

