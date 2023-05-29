import { partFields } from 'Types';
import Link from 'next/link'
import React from 'react'
import { FC } from 'react';


export const Dropdown = () => {

    return (
        <>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center " type="button">HOME <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <Fields field='hamza' href="/"/>
                </ul>
            </div>
        </>
    )
}

export const Fields: FC<partFields> = ({ field, href }) => {
    return (
        <li>
            <Link href={href} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{field}</Link>
        </li>
    )  
}
