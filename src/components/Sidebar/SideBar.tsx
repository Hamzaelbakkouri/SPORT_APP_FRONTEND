import { IGym, SportNames } from '@/data/Alldata'
import { HomeOutline } from 'heroicons-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

// paginate the sidebar
function paginate(array: any[], page_size: number, page_number: number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export function SideSalles() {

    const [Data, setData] = useState<string[]>();
    useEffect(() => {
        const res = paginate(SportNames, 10, 1);
        setData(res)
    }, [])

    return (
        <nav className="space-y-1 p-3 bg-slate-100" aria-label="Sidebar">
            <h3>
                Sports
            </h3>
            {Data?.map((item, idx) => (
                <Link
                    key={idx}
                    href={'/sports/' + item}
                    className="text-gray-600 bg-primary-500/10 transition-all hover:bg-primary-500 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                    <HomeOutline className='mr-5' />
                    <span className="">{item}</span>
                </Link>
            ))
            }
        </nav >
    )
}

export function SideSports() {
    const [Loading, setLoading] = React.useState(false)

    const [AllGym, setAllGym] = React.useState<IGym[]>([]);

    React.useEffect(() => {
        (async () => {
            setLoading(v => !v)
            const res = await fetch('/api/getAllGyms/');
            const result = await res.json();
            setAllGym(result)
            setLoading(v => !v)
        })()
    }, [])
    return (
        <nav className="space-y-1 p-3" aria-label="Sidebar">
            {AllGym.map((item) => (
                <Link
                    key={"/"}
                    href={'/sports/' + item.name}
                    className="text-gray-600 hover:bg-primary-500 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                    <HomeOutline className='mr-5' />
                    <div className='flex flex-col'>
                        <span className="truncate">{item.name}</span>
                        <small>{item.description}</small>
                    </div>
                </Link>
            ))
            }
        </nav >
    )
}


