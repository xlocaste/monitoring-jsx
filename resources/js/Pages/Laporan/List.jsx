import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaEye, FaPrint, FaRegEdit } from "react-icons/fa";

export default function List({ auth, laporan, filters }) {
    console.log(laporan)
    const [keyword, setKeyword] = useState(filters?.keyword || '');
    const handlePageChange = (url) => {
        if (url) {
            router.visit(url);
        }
    };


    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('laporan.search'), { keyword }, {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Laporan" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <p className='mb-4 font-bold'>Laporan</p>
                <div className="overflow-x-auto">
                    <div className="flex justify-between my-4">
                        <form onSubmit={handleSearch} className="flex gap-2 ml-1">
                            <input
                                type="text"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                className="border-gray-300 rounded px-2 pr-60 py-1 text-sm"
                                placeholder="Cari Data Mitra..."
                            />
                            <PrimaryButton type="submit" className="text-sm">Cari</PrimaryButton>
                        </form>
                        {auth?.user?.roles?.some(role => role.name === 'admin') && (
                            <PrimaryButton>
                                <Link href={route('laporan.create')}>
                                    + TAMBAH LAPORAN
                                </Link>
                            </PrimaryButton>
                        )}
                    </div>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full bg-white border border-gray-200 rounded text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 border-b text-center font-semibold">ID Project Status Telkom</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">ID Project Status Mitra</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {laporan.data.length > 0 ? (
                                    laporan.data.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-1 border-b text-center">{item.status_telkom?.project?.id_project}</td>
                                            <td className="px-4 py-1 border-b text-center">{item.status_mitra?.project?.id_project}</td>
                                            <td className="px-4 py-1 border-b text-center">
                                                <div className="flex justify-center gap-2">
                                                    <Link
                                                        href={route('laporan.show', item.id)}
                                                        className="text-blue-500"
                                                    >
                                                        <FaEye />
                                                    </Link>

                                                    {auth?.user?.roles?.some(role => role.name === 'admin') && (
                                                    <Link
                                                        as="button"
                                                        className="text-red-400"
                                                        onClick={() => {
                                                            if (confirm('Yakin ingin menghapus data ini?')) {
                                                                router.delete(route('laporan.destroy', item.id));
                                                            }
                                                        }}
                                                    >
                                                        <FaTrash />
                                                    </Link>
                                                    )}
                                                    {auth?.user?.roles?.some(role => role.name === 'admin') && (
                                                    <a
                                                        href={route('laporan.pdf', item.id)}
                                                        className="text-green-600"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaPrint />
                                                    </a>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                    ) : (
                                        <tr>
                                        <td colSpan="14" className="text-center text-gray-500 py-4">
                                            Tidak ada data laporan.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-end p-4 gap-4">
                        <SecondaryButton
                            onClick={() => handlePageChange(laporan.prev_page_url)}
                            disabled={!laporan.prev_page_url}
                            className="text-xs"
                            >
                            Previous
                        </SecondaryButton>

                        <span className="text-xs self-center text-gray-700">
                            Page {laporan.current_page} of {laporan.last_page}
                        </span>

                        <SecondaryButton
                            onClick={() => handlePageChange(laporan.next_page_url)}
                            disabled={!laporan.next_page_url}
                            className="text-xs"
                        >
                            Next
                        </SecondaryButton>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
