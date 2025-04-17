import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function List({ auth, Pic }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Daftar PIC" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded shadow">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 border-b text-sm font-semibold text-center text-gray-700">PIC ADMIN</th>
                                <th className="px-6 py-3 border-b text-sm font-semibold text-center text-gray-700">PIC PROJECT</th>
                                <th className="px-6 py-3 border-b text-sm font-semibold text-center text-gray-700">WASPANG TA</th>
                                {auth.user &&(
                                <th className="px-6 py-3 border-b text-sm font-semibold text-center text-gray-700">ACTION</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {Pic.length > 0 ? (
                                Pic.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 border-b text-sm text-gray-700">{item.pic_admin}</td>
                                        <td className="px-6 py-4 border-b text-sm text-gray-700">{item.pic_project}</td>
                                        <td className="px-6 py-4 border-b text-sm text-gray-700">{item.waspang_ta}</td>
                                        {auth.user && (
                                        <td className="px-6 py-4 border-b text-sm text-gray-700">
                                            <Link
                                                href={route('data.pic.index',item.id)}
                                                >Edit PIC
                                            </Link>
                                            <Link
                                                href={route('data.pic.index',item.id)}
                                                >Hapus PIC
                                            </Link>
                                        </td>
                                        )}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                                        Tidak ada data PIC.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
