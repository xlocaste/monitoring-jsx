import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

export default function List({ auth, laporan }) {
    console.log("Data Laporan", laporan.data)
    const handlePageChange = (url) => {
        if (url) {
            router.visit(url);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Laporan" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <div className="overflow-x-auto">
                    <div className='flex justify-end m-4'>
                        <PrimaryButton>
                            <Link href={route('laporan.create')}>
                                + TAMBAH LAPORAN
                            </Link>
                        </PrimaryButton>
                    </div>

                    <table className="min-w-full bg-white border border-gray-200 rounded text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border-b text-center font-semibold">ID Status Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">ID Status Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Witel</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Tematik</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Status BAST Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Status Tagihan Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">No SP</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">No PO</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Nilai SP Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Rekon Material</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Rekon Jasa</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Status Rekon Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Keterangan</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {laporan.data.length > 0 ? (
                                laporan.data.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-1 border-b text-center">{item.status_telkom?.id}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_mitra?.id}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_mitra?.project?.tematik?.witel || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_mitra?.project?.tematik?.tematik || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_telkom?.status_bast_telkom?.status_bast_telkom || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_mitra?.status_tagihan_mitra?.status_tagihan_mitra || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_mitra?.no_sp_mitra || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_mitra?.no_po_mitra || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_telkom?.nilai_sp_telkom || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_telkom?.material_telkom || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_telkom?.rekon_jasa_telkom || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_telkom?.status_rekon_telkom.status_rekon_telkom || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.keterangan}</td>
                                        <td className="px-4 py-1 border-b text-center">
                                            <div className="flex justify-center gap-2">
                                                <Link
                                                    href={route('laporan.edit', item.id)}
                                                    className="text-yellow-500"
                                                >
                                                    <FaRegEdit />
                                                </Link>
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
