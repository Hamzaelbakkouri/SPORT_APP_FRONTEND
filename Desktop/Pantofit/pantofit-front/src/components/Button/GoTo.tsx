import React from 'react'
import { FC } from 'react'

type Buttonto = {
    to: string;
}

const GoTo: FC<Buttonto> = ({ to }) => {

    return (
        <button className="relative inline-block text-lg group ">
            <span className="relative z-10 block px-2 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-full lg:group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-full bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 lg:group-hover:-rotate-180 ease"></span>
                <span className="relative">{to === 'next' ? <svg className={` w-5 h-5 text-primary-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> : <svg className={`rotate-180 w-5 h-5 text-primary-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-full lg:group-hover:mb-0 lg:group-hover:mr-0" data-rounded="rounded-full"></span>
        </button>
    )
}

export default GoTo
