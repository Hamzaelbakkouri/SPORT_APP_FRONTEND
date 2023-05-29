import React from 'react'
import ButtonBox from '../Button/Button'
import { BigSearch } from '../Search/Search'
import NavbarBox from "@/components/Navbar/Navbar";

const Container = () => {
    return (
        <div>
            <div className="bg-white flex mb-9">
                <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-10 flex flex-wrap flex-col " style={{
                    backgroundImage: "url(" + "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <NavbarBox />
                    <div className='grid lg:grid-cols-2 '>
                        <div className="md:w-[60%] relative py-24 px-8 lg:col-span-1 rounded-md shadow-2xl overflow-hidden lg:px-16  lg:gap-x-8">
                            <div className="relative">
                                <img className="h-12 w-[50%]" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" />
                                <div className="mt-6 text-white ">
                                    <p className="text-xl font-medium sm:text-2xl">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quis ipsa eum repellat eveniet ut mollitia sapiente aut? Quia et dicta repellendus
                                    </p>
                                    <div className="mt-6">
                                        <div className="flex flex-col font-medium">
                                            <ButtonBox field='Get Started Now' href='/' />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-end lg:col-span-1'>
                            <div className='rounded-md bg-gray-950  flex p-11'>
                                <div className='md:w-96 '>
                                    <h2 className='flex justify-center text-white'>TRY TO START PREMIUM</h2>
                                    <p className='py-3 text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur magnam voluptatem rem assumenda recusandae commodi dicta iure</p>
                                    <ButtonBox field='YOUR PASS' href='/' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BigSearch />
        </div>
    )
}

export default Container
