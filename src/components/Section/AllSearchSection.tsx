import React from "react";
import Rating from "@mui/material/Rating";
import { SportNames, IGym, Places } from "@/data/Alldata";
import Link from 'next/link';
import ButtonBox from "../Button/Button";
import Image from "next/image";
import { PlaceData } from "Types";




interface ISalleCardProps {
    e: IGym
}


const SalleCard: React.FC<ISalleCardProps> = ({ e }) => {
    const randomNumber = (() => ~~(Math.random() * 10) / 2)();
    const [value, setValue] = React.useState<number | null>(randomNumber);

    return (
        <Link href={`/salles/${e.name}`} passHref>
            <div className="relative w-full lg:w-full lg:flex p-4 ">
                <div className="aspect-1 relative w-52 bg-cover rounded-t-none rounded-l text-center overflow-hidden" style={{
                    aspectRatio: 1
                }} title="Woman holding a mug">
                    <Image
                        fill
                        alt="image salle"
                        className="object-cover object-center" src={"https://static.yabiladi.com/files/articles/33f576109f0e0fabe62cf1f079fc652120230411182531.jpg"}
                    />
                </div>
                <div className="border-r w-full border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="flex w-full justify-between">
                            <div className="text-gray-900 font-bold text-xl mb-2">{e.name}</div>
                            {randomNumber % 2 &&
                                <div className="bg-primary-500 p-2  text-white font-bold text-lg top-0  rounded right-0 h-fit">
                                    Partenaire
                                </div>
                            }
                        </div>
                        <p className="text-gray-700 text-base">{e.description}</p>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                event.stopPropagation()
                                setValue(newValue);
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={handleRouteCategory} className="rect-text-white-bg-primary">GOLF</button>
                        <button onClick={handleRouteCategory} className="rect-text-white-bg-primary">GYM</button>
                    </div>
                    <div className="w-full flex justify-end px-4">
                        <ButtonBox field="VOIR PLUS" href={`/salles/${e.name}`} />
                    </div>
                </div>
            </div>
        </Link>

    )
}


const handleRouteCategory = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
}

export function AllSalleSection() {
    const [Loading, setLoading] = React.useState(false)

    const [AllGym, setAllGym] = React.useState<IGym[]>([]);

    React.useEffect(() => {
        (async () => {
            setLoading(v => !v)
            const res = await fetch('/api/getAllGyms');
            const result = await res.json();
            setAllGym(result)
            setLoading(v => !v)
        })()
    }, [])

    return (
        <div className="p-3" >
            <div className="block p-3 rounded-sm mb-3 bg-gray-200">
                <div className="">

                    <p className="text-black ml-5 block text-2xl font-bold">
                        Sponsorisé
                    </p>
                </div>

                {Loading && "Loading"}
                {(AllGym || [])?.slice(0, 2).map((e, idx) => {
                    return (
                        <SalleCard e={e} key={idx} />
                    )
                })}
            </div>
            <div className="block  p-3 rounded mb-3">
                {(AllGym || []).map((e, idx) => {
                    return (
                        <SalleCard e={e} key={idx} />
                    )
                })}
            </div>
        </div>
    )
}


export function AllCitySection() {
    const randomNumber = (() => ~~(Math.random() * 10) / 2)();
    const [value, setValue] = React.useState<number | null>(randomNumber);

    return (
        <div className="p-3">
            <div className="block  p-3 rounded mb-3">
                {(Places || []).map((e, idx) => {
                    return (
                        <Link passHref href={`/villes/${e.placeName}`} key={idx}>
                            <div className=" w-full lg:w-full lg:flex p-4 cursor-pointer">
                                <div className="h-48 lg:h-auto lg:w-96 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{
                                    backgroundImage: "url(" + e.image + ")",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }} title="Test App">
                                </div>
                                <div className="border-r w-full border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-gray-900 font-bold text-xl mb-2">{e.placeName}</div>
                                        <p className="text-gray-700 text-base">{e.description}</p>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                event.stopPropagation()
                                                setValue(newValue);
                                            }}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-10 h-10 rounded-full mr-4" src="https://static.yabiladi.com/files/articles/33f576109f0e0fabe62cf1f079fc652120230411182531.jpg" alt="Avatar of Jonathan Reinink" />
                                        <div className="text-sm">
                                            <p className="text-gray-900 leading-none">Hamza el bakkouri</p>
                                            <p className="text-gray-600">Aug 18</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <ButtonBox field="GO CHECK" href={`/sports/${e}`} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export function AllSportsSection() {
    const [value, setValue] = React.useState<number | null>();

    return (
        <div>
            {SportNames.map((e, idx) => {
                return (
                    <div key={idx}>
                        <Link passHref href={`/sports/${e}`}>
                            <div className=" w-full lg:w-full lg:flex p-4 cursor-pointer" >
                                <div className="h-48 lg:h-auto lg:w-96 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{
                                    backgroundImage: "url(" + "https://static.yabiladi.com/files/articles/33f576109f0e0fabe62cf1f079fc652120230411182531.jpg" + ")",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }} title="Test App">
                                </div>
                                <div className="border-r w-full border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-gray-900 font-bold text-xl mb-2">{e}</div>
                                        <p className="text-gray-700 text-base">{e}</p>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-10 h-10 rounded-full mr-4" src="https://static.yabiladi.com/files/articles/33f576109f0e0fabe62cf1f079fc652120230411182531.jpg" alt="Avatar of Jonathan Reinink" />
                                        <div className="text-sm">
                                            <p className="text-gray-900 leading-none">Hamza el bakkouri</p>
                                            <p className="text-gray-600">Aug 18</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <ButtonBox field="GO CHECK" href={`/sports/${e}`} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
