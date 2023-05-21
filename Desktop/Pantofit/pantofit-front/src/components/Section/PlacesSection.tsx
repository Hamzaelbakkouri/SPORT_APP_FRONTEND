import React from 'react'


type PlaceData = {
    image: string;
    placeName: string;
    Description: string;
}

const Places: PlaceData[] = [
    {
        image: 'https://static.yabiladi.com/files/articles/33f576109f0e0fabe62cf1f079fc652120230411182531.jpg', placeName: 'Rabat', Description: 'check all the Gyms into Rabat'
    },
    {
        image: 'https://i.natgeofe.com/n/8db4f899-9179-4174-9516-70491944fe9a/city-evening-casablanca-morocco_2x1.jpg', placeName: 'Casablanca', Description: 'check all the Gyms into Casablanca'
    },
    {
        image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg', placeName: 'Tanger', Description: 'check all the Gyms into Tanger'
    },
    {
        image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg', placeName: 'Titouan', Description: 'check all the Gyms into Titouan'
    },
    {
        image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg', placeName: 'Marrackech', Description: 'check all the Gyms into Marrackech'
    },
    {
        image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg', placeName: 'Fes', Description: 'check all the Gyms into Fes'
    },
]

const PlacesSection = () => {

    return (
        <div className='w-full grid grid-cols-3 mt-16'>
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
                            <p style={{ fontSize: "16px" }}>{item.Description}</p>
                        </div>
                    </div>
                );
            })}
            {/* <div></div> */}
        </div>
    )
}

export default PlacesSection
