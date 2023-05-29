import { PlaceData } from 'Types';
import Link from 'next/link';
import React from 'react'




const Places: PlaceData[] = [
    {
        image: 'https://static.yabiladi.com/files/articles/33f576109f0e0fabe62cf1f079fc652120230411182531.jpg',
        placeName: 'Rabat',
        description: 'Check all the gyms in Rabat'
    },
    {
        image: 'https://i.natgeofe.com/n/8db4f899-9179-4174-9516-70491944fe9a/city-evening-casablanca-morocco_2x1.jpg',
        placeName: 'Casablanca',
        description: 'Check all the gyms in Casablanca'
    },
    {
        image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg',
        placeName: 'Tanger',
        description: 'Check all the gyms in Tanger'
    },
    {
        image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg',
        placeName: 'Tetouan',
        description: 'Check all the gyms in Tetouan'
    },
    {
        image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg',
        placeName: 'Marrakech',
        description: 'Check all the gyms in Marrakech'
    },
    {
        image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg',
        placeName: 'Fes',
        description: 'Check all the gyms in Fes'
    },

];

const PlacesSection = () => {

    return (
        <>
            <div className='w-full grid  lg:grid-cols-3 mt-16'>
                {(Places ? Places : []).map((item) => {
                    return (
                        <div key={item.placeName} style={{
                            backgroundImage: "url(" + item.image + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                            className='col-span-1 m-5 h-40 rounded-md'
                        >
                            <div className='bg-slate-900 relative rounded-md text-white flex flex-col justify-end items-start bg-opacity-40 h-full pl-3 '>
                                <p style={{ fontSize: "30px" }}>{item.placeName}</p>
                                <p style={{ fontSize: "16px" }}>{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className=' text-center flex justify-center'>
                <Link href='/salles' className='bg-black py-3 text-white rounded-md w-56 hover:bg-gray-700'>
                    Consulter Toute les Salles
                </Link>
            </div>
        </>
    )
}

export default PlacesSection
