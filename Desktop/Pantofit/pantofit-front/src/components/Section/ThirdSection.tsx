import ButtonBox from "../Button/Button";

export default function Third() {

    return (
        <div className="grid lg:grid-cols-2 grid-col-1 text-center mt-9">
            <div className="col-span-1 gap-4 p-6">
                <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 ">INFORMATION</h2>
                <p className="mb-3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptas  </p>
                <div className="flex gap-32 justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                        <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                        <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
                    </div>
                </div>
                <div className="flex gap-32 mt-16 justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">50M+</dt>
                        <dd className="text-gray-500 dark:text-gray-400">Designers</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">127M+</dt>
                        <dd className="text-gray-500 dark:text-gray-400">Public Examples</dd>
                    </div>
                </div>
                <div className="mt-20">
                    <ButtonBox field="Get More Info" href="#" />
                </div>
            </div>
            <div
                className="col-span-1 ml-44 mt-10 relative inline-block font-medium group"
            >
                <span className={`absolute inset-0 w-[70%] h-full transition duration-200 ease-out transform translate-x-4 translate-y-4 bg-primary-500`}></span>
                <span className={`absolute inset-0 w-[70%] h-full bg-white border-2 border-primary-500`}></span>
                <span className={`relative text-primary-500 group-hover:text-white`}><img className="w-[70%] h-full" src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsZXh8ZW58MHx8MHx8&w=1000&q=80" alt="..." /></span>
            </div>
        </div>
    )
}
