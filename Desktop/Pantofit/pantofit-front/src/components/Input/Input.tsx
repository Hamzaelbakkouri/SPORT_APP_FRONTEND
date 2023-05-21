import React, { FC } from 'react'
import { FIRST_GREEN } from '../colors/colors';

type DefaultI = {
    Label: string;
    placeHolder: string;

}


export const DefaultInput: FC<DefaultI> = ({ Label, placeHolder }) => {

    return (
        <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{Label}</label>
            <input placeholder={placeHolder} type="text" id="default-input" className="bg-gray-50 border shadow py-4 border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 dark:bg-gray-50 dark:placeholder-gray-400 dark:text-black " />
        </div>
    )
}

export const ContactInputs = () => {
    return (
        <div className="relative w-full px-9 py-3 font-medium group grid grid-cols-1 lg:grid-cols-2 gap-2">
            <input className={`col-span-1 px-4 text-white py-3 bg-opacity-5 h-full bg-white border-2 border-primary-500`} placeholder='YOUR NAME'/>
            <input className={`col-span-1 px-4 text-white py-3 bg-opacity-5 h-full bg-white border-2 border-primary-500`} placeholder='EMAIL ADDRESS'/>
            <input className={`col-span-2 px-4 py-10 text-white bg-opacity-5 h-full bg-white border-2 border-primary-500`} placeholder='MESSAGE'/>
        </div>
    )
}
