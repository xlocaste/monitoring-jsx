import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { AiFillDatabase } from 'react-icons/ai';
import { BsFillClipboard2DataFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaProjectDiagram } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard({ auth, totalPic, totalMitra, totalProject, totalStatusMitra, totalStatusTelkom, nilaiPerMitra }) {
    const chartNilaiPerMitra = nilaiPerMitra.map(item => ({
        mitra: item.mitra,
        nilai_sp_telkom: item.nilai_sp_telkom,
        nilai_rekon_telkom: item.nilai_rekon_telkom,
        gap_selisih: item.gap_selisih,
    }));

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
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={chartNilaiPerMitra}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="mitra" angle={0} textAnchor="end" interval={0} />
                            <YAxis angle={-60}/>
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="nilai_sp_telkom" fill="#e11d48" name="SP Telkom" />
                            <Bar dataKey="nilai_rekon_telkom" fill="#f87171" name="Rekon Telkom" />
                            <Bar dataKey="gap_selisih" fill="#fbbf24" name="Gap Selisih" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
