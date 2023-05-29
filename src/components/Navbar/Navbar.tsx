import Link from "next/link";
import ButtonBox from "../Button/Button";


export default function App() {

  return (
    <nav className=" border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center flex text-2xl font-semibold whitespace-nowrap text-white"><h3 className="text-primary-500">SPORT</h3>FIND</span>
        </Link>
        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto " id="navbar-dropdown">
          <ul className="flex flex-col font-extrabold p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-opacity-0 dark:border-gray-700">
            <li>
              <Link href="#" className="py-3 pl-3 pr-4 rounded text-white hover:text-primary-500  hover:bg-white hover:bg-opacity-40 ">Home</Link>
            </li>
            <li>
              <Link href="#" className="py-3 pl-3 pr-4 rounded text-white hover:text-primary-500  hover:bg-white hover:bg-opacity-40 ">Services</Link>
            </li>
            <li>
              <Link href="#" className="py-3 pl-3 pr-4 rounded text-white hover:text-primary-500  hover:bg-white hover:bg-opacity-40 ">Sponsorisé</Link>
            </li>
            <li>
              <ButtonBox field="GET STARTED" href="#" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
