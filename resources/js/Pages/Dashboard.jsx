import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { AiFillDatabase } from 'react-icons/ai';
import { BsFillClipboard2DataFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaProjectDiagram } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard({ auth, totalPic, totalMitra, totalProject, totalStatusMitra, totalStatusTelkom, monthlyChartData }) {
    const chartData = [
        { name: 'Status Telkom', value: totalStatusTelkom },
        { name: 'Status Mitra', value: totalStatusMitra },
    ];

    const COLORS = ['#e11d48', '#f87171'];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="relative bg-gradient-to-br from-red-700 via-red-400 to-white p-2 rounded shadow text-gray-900 overflow-hidden">
                    <div className="absolute -bottom-14 -right-6 opacity-30 text-[8rem] pointer-events-none">
                        <CgProfile />
                    </div>
                    <h3 className="text-lg text-gray-700 font-bold relative z-10">PIC</h3>
                    <p className="text-lg font-bold text-gray-700 relative z-10">{totalPic}</p>
                </div>
                <div className="relative bg-gradient-to-br from-red-700 via-red-400 to-white p-2 rounded shadow text-gray-900 overflow-hidden">
                    <div className="absolute -bottom-16 -right-6 opacity-30 text-[8rem] pointer-events-none">
                        <BsFillClipboard2DataFill />
                    </div>
                    <h3 className="text-lg text-gray-700 font-bold relative z-10">Mitra</h3>
                    <p className="text-lg font-bold text-gray-700 relative z-10">{totalMitra}</p>
                </div>
                <div className="relative bg-gradient-to-br from-red-700 via-red-400 to-white p-2 rounded shadow text-gray-900 overflow-hidden">
                    <div className="absolute -bottom-14 -right-6 opacity-30 text-[8rem] pointer-events-none">
                        <FaProjectDiagram />
                    </div>
                    <h3 className="text-lg text-gray-700 font-bold relative z-10">Project</h3>
                    <p className="text-lg font-bold text-gray-700 relative z-10">{totalProject}</p>
                </div>
                <div className="relative bg-gradient-to-br from-red-700 via-red-400 to-white p-2 rounded shadow text-gray-900 overflow-hidden">
                    <div className="absolute -bottom-16 -right-6 opacity-30 text-[8rem] pointer-events-none">
                        <AiFillDatabase />
                    </div>
                    <h3 className="text-lg text-gray-700 font-bold relative z-10">Status Mitra</h3>
                    <p className="text-lg font-bold text-gray-700 relative z-10">{totalStatusMitra}</p>
                </div>
                <div className="relative bg-gradient-to-br from-red-700 via-red-400 to-white p-2 rounded shadow text-gray-900 overflow-hidden">
                    <div className="absolute -bottom-16 -right-6 opacity-30 text-[8rem] pointer-events-none">
                        <AiFillDatabase />
                    </div>
                    <h3 className="text-lg text-gray-700 font-bold relative z-10">Status Telkom</h3>
                    <p className="text-lg font-bold text-gray-700 relative z-10">{totalStatusTelkom}</p>
                </div>
                <div className="lg:col-span-5 col-span-1 bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Perbandingan Status per Bulan</h3>
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={monthlyChartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Status Telkom" fill="#e11d48" />
                            <Bar dataKey="Status Mitra" fill="#f87171" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
