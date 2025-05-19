import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaEye, FaRegEdit } from "react-icons/fa";

export default function List({ auth, laporan }) {
    console.log(laporan)
    const handlePageChange = (url) => {
        if (url) {
            router.visit(url);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Laporan" />

            <div className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <div className="">
                    <div className='flex justify-end m-4'>
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
                                    <th className="px-4 py-2 border-b text-center font-semibold">ID Status Telkom</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">ID Status Mitra</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">Keterangan</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {laporan.data.length > 0 ? (
                                    laporan.data.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-1 border-b text-center">{item.status_telkom?.id_status_telkom}</td>
                                            <td className="px-4 py-1 border-b text-center">{item.status_mitra?.id_status_mitra}</td>
                                            <td className="px-4 py-1 border-b text-center">{item.keterangan}</td>
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
                                                        href={route('laporan.edit', item.id)}
                                                        className="text-yellow-500"
                                                    >
                                                        <FaRegEdit />
                                                    </Link>
                                                    )}
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
