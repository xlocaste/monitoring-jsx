import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, Head } from '@inertiajs/react';

const AuthenticatedLayout = ({ children, user, title = 'Dashboard' }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showData, setShowData] = useState(false);
    
  return (
    <div className="flex min-h-screen">
      <Head title={title} />

      <aside className="w-64 bg-gray-800 text-white p-4">
        <div className='w-full flex items-center justify-center mb-14'>
            <ApplicationLogo className="flex w-9 h-auto text-gray-100 fill-current"/>
        </div>
        <ul>
          <li className="mb-4"><a href="#" className="hover:text-yellow-300">Home</a></li>
          <button onClick={() => setShowData((prev) => !prev)} className="mb-4 flex w-full">
            <a href="#" className="hover:text-yellow-300 flex items-center w-full justify-between">Data
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
                <Link href={route('data.pic.index')} className='mb-4 pl-4 hover:text-yellow-300'>Data PIC</Link>
                <Link href={route('data.mitra.index')} className='mb-4 pl-4 hover:text-yellow-300'>Data Mitra</Link>
                <Link href={route('dashboard')} className='mb-4 pl-4 hover:text-yellow-300'>Data Status Mitra</Link>
                <Link href={route('dashboard')} className='mb-4 pl-4 hover:text-yellow-300'>Data Status Telkom</Link>
            </div>
          )}
          <li className="mb-4"><a href="#" className="hover:text-yellow-300">Laporan</a></li>
          <li className="mb-4"><a href="#" className="hover:text-yellow-300">Data User/Hak Akses</a></li>
        </ul>
      </aside>

        <div className='w-full bg-gray-100'>
            <div className='flex bg-white items-center h-14 justify-between w-full px-10'>
            <p className='text-center w-full'>TELKOM AKSES</p>
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
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    </div>
  )
}

export default AuthenticatedLayout
