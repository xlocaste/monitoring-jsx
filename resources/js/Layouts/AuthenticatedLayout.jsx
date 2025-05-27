import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';
import { IoMdHome } from "react-icons/io";
import { RiDatabase2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa6";

const AuthenticatedLayout = ({ children, user, title = 'Dashboard' }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showData, setShowData] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Head title={title} />

      <aside className="fixed w-64 h-screen bg-gradient-to-b from-white via-white to-red-800 text-black p-4">
        <div className='w-full flex items-center justify-center mb-14'>
            <ApplicationLogo className="flex w-9 h-auto text-gray-100 fill-current"/>
        </div>
        <ul className='font-bold'>
          <li className="mb-4 flex w-full items-center space-x-2"><IoMdHome /><a href={route('dashboard')} className="hover:text-red-800">Home</a></li>
          <button onClick={() => setShowData((prev) => !prev)} className="mb-4 w-full flex items-center space-x-2"><RiDatabase2Fill />
            <a href="#" className="hover:text-red-800 flex items-center w-full justify-between">Data
                <svg
                    className="ms-2 -me-0.5 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
                </svg>
            </a>
          </button>
          {showData && (
            <div className='flex flex-col'>
                <Link href={route('pic.index')} className='mb-4 pl-6 hover:text-red-800 flex items-center space-x-2'><CgProfile /><p>Data PIC</p></Link>
                <Link href={route('mitra.index')} className='mb-4 pl-6 hover:text-red-800 flex items-center space-x-2'><BsFillClipboard2DataFill /><p>Data Mitra</p></Link>
                <Link href={route('project.index')} className='mb-4 pl-6 hover:text-red-800 flex items-center space-x-2'><FaProjectDiagram /><p>Data Project</p></Link>
                <Link href={route('status-mitra.index')} className='mb-4 pl-6 hover:text-red-800 flex items-center space-x-2'><AiFillDatabase /><p>Data Status Mitra</p></Link>
                <Link href={route('status-telkom.index')} className='mb-4 pl-6 hover:text-red-800 flex items-center space-x-2'><AiFillDatabase /><p>Data Status Telkom</p></Link>
            </div>
          )}
          <li className="mb-4">
            <Link href={route('laporan.index')} className='mb-4 hover:text-red-800 flex items-center space-x-2'><FaClipboardList /><p>Laporan</p></Link>
          </li>
        </ul>
      </aside>

        <div className='w-full bg-gray-100'>
            <div className='flex bg-white items-center h-14 justify-between w-full px-10'>
            <p className='text-end w-full pr-40 font-bold text-lg'>MONITORING ALL BAST & TAGIHAN MITRA TELKOM AKSES</p>
                <div className="hidden sm:flex sm:items-center sm:ms-6">
                    <div className="relative">
                        <button
                            onClick={() => setShowingNavigationDropdown((prev) => !prev)}
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                        >
                            {user.name}
                            <svg
                                className="ms-2 -me-0.5 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {showingNavigationDropdown && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                <Link
                                    href={route('profile.edit')}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href={route('logout')} method='POST'
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <main className="flex-1 p-6 ml-64">
                {children}
            </main>
        </div>
    </div>
  )
}

export default AuthenticatedLayout
