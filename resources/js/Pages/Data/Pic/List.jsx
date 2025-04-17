import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function List({ auth, Pic }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Daftar PIC" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Daftar PIC</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded shadow">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">ID</th>
                                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">Nama</th>
                                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">Jabatan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Pic.length > 0 ? (
                                Pic.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 border-b text-sm text-gray-700">{item.id}</td>
                                        <td className="px-6 py-4 border-b text-sm text-gray-700">{item.nama}</td>
                                        <td className="px-6 py-4 border-b text-sm text-gray-700">{item.jabatan}</td>
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
