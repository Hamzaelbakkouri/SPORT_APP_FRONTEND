import { ButtonOption } from 'Types';
import Link from 'next/link';
import React from 'react'
import { FC } from 'react'


const ButtonBox: FC<ButtonOption> = ({ field, href }) => {
    return (
        <div className="relative inline-block px-9 py-3 font-medium group">

        <Link href={href} >
            <span className={`absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary-500 group-hover:-translate-x-0 group-hover:-translate-y-0`}></span>
            <span className={`absolute inset-0 w-full h-full bg-white border-2 border-primary-500 group-hover:bg-primary-500`}></span>
            <span className={`relative text-primary-500 group-hover:text-white`}>{field}</span>
        </Link>
        </div>
    )
}

export default ButtonBox
