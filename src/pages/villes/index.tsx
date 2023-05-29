import Navbar from '@/components/Navbar/Navbar';
import { BigSearch } from '@/components/Search/Search';
import { Places } from "@/data/Alldata";
import Link from 'next/link';
import React from 'react'

const AllCities = () => {
  return (
    <div>
      <Navbar />
      <BigSearch />
      <div className='w-full'>
        <div className='w-full grid lg:grid-cols-3 mt-16'>
          {(Places ? Places : []).map((item, idx) => {
            return (
              <Link key={idx} href={`/villes/${item.placeName}`}>
                <div style={{
                  backgroundImage: "url(" + item.image + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
                  className='col-span-1 m-5 h-60 rounded-md'
                >
                  <div className='bg-slate-900 relative rounded-md text-white flex flex-col justify-end items-start bg-opacity-40 h-full pl-3 '>
                    <p style={{ fontSize: "30px" }}>{item.placeName}</p>
                    <p style={{ fontSize: "16px" }}>{item.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default AllCities;
