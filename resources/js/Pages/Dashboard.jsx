import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { AiFillDatabase } from 'react-icons/ai';
import { BsFillClipboard2DataFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaProjectDiagram } from 'react-icons/fa';

export default function Dashboard({ auth, totalPic, totalMitra, totalProject, totalStatusMitra, totalStatusTelkom }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative bg-gradient-to-br from-red-700 via-red-400 to-white p-6 rounded shadow text-gray-900 overflow-hidden">
                    <div className="absolute -bottom-14 -right-10 opacity-30 text-[12rem] pointer-events-none">
                        <CgProfile />
                    </div>
                    <h3 className="text-2xl text-gray-700 font-bold relative z-10">PIC</h3>
                    <p className="text-2xl font-bold text-gray-700 relative z-10">{totalPic}</p>
                </div>
                <div className="relative bg-gradient-to-br from-red-700 via-red-400 to-white p-6 rounded shadow text-gray-900 overflow-hidden">
                    <div className="absolute -bottom-20 -right-10 opacity-30 text-[12rem] pointer-events-none">
                        <BsFillClipboard2DataFill />
                    </div>
                    <h3 className="text-2xl text-gray-700 font-bold relative z-10">Mitra</h3>
                    <p className="text-2xl font-bold text-gray-700 relative z-10">{totalMitra}</p>
                </div>
                <div className="relative bg-gradient-to-br from-red-700 via-red-400 to-white p-6 rounded shadow text-gray-900 overflow-hidden">
                    <div className="absolute -bottom-14 -right-10 opacity-30 text-[12rem] pointer-events-none">
                        <FaProjectDiagram />
                    </div>
                    <h3 className="text-2xl text-gray-700 font-bold relative z-10">Project</h3>
                    <p className="text-2xl font-bold text-gray-700 relative z-10">{totalProject}</p>
                </div>
                <div className="relative bg-gradient-to-br from-red-700 via-red-400 to-white p-6 rounded shadow text-gray-900 overflow-hidden">
                    <div className="absolute -bottom-20 -right-10 opacity-30 text-[12rem] pointer-events-none">
                        <AiFillDatabase />
                    </div>
                    <h3 className="text-2xl text-gray-700 font-bold relative z-10">Status Mitra</h3>
                    <p className="text-2xl font-bold text-gray-700 relative z-10">{totalStatusMitra}</p>
                </div>
                <div className="relative bg-gradient-to-br from-red-700 via-red-400 to-white p-6 rounded shadow text-gray-900 overflow-hidden">
                    <div className="absolute -bottom-20 -right-10 opacity-30 text-[12rem] pointer-events-none">
                        <AiFillDatabase />
                    </div>
                    <h3 className="text-2xl text-gray-700 font-bold relative z-10">Status Telkom</h3>
                    <p className="text-2xl font-bold text-gray-700 relative z-10">{totalStatusTelkom}</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
