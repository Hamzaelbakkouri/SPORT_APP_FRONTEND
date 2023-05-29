import Image from 'next/image'
import React from 'react'

const Connect = () => {
    return (
        <div
            className="grid text-sm font-medium py-16"
        >
            <div className="w-full max-w-sm rounded-sm bg-gray-100 shadow">
                <h3 className='p-4 text-center'>Se connecter via vos réseaux : </h3 >
                <p className='px-4 text-center'>Vous pouvez se connecter facilement et très rapidement via vos comptes réseaux sociaux.</p>
                <form className="p-4 md:p-5 lg:p-6">
                    <div className="grid gap-y-3">
                        <button
                            className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600  py-3 px-4 text-black transition hover:text-purple-400"
                        >
                            <Image src={'/facebook.png'} width={15} height={15} alt={'facebook alt'} />
                            Sign in with Facebook
                        </button>
                    </div>

                    <div className="my-3 flex items-center px-3">
                        <hr className="w-full border-slate-600" />
                        <span className="mx-3 text-slate-500">or</span>
                        <hr className="w-full border-slate-600" />
                    </div>

                    <div className="grid gap-y-3">
                        <button
                            className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600  py-3 px-4 text-black transition hover:text-purple-400"
                        >
                            <Image src={'/gmail.png'} width={15} height={15} alt={'gmail alt'} />
                            Sign in with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Connect
