import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

export default function List({ auth, statusMitra }) {
    const handlePageChange = (url) => {
        if (url) {
            router.visit(url);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Status Mitra" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <div className="overflow-x-auto">
                    <div className='flex justify-end m-4'>
                        <PrimaryButton>
                            <Link href={route('status-mitra.create')}>
                                + TAMBAH STATUS MITRA
                            </Link>
                        </PrimaryButton>
                    </div>

                    <table className="min-w-full bg-white border border-gray-200 rounded text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border-b text-center font-semibold">ID SAP</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">ID Status Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Bulan Order</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">No SP Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">No PO Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">ID PR</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">ID GR</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">TOC Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Material Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Jasa Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Nilai SP Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Rekon Material Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Rekon Jasa Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Nilai Rekon Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Status Pekerjaan</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Status Rekon Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Status Tagihan Mitra</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Keterangan</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {statusMitra.data.length > 0 ? (
                                statusMitra.data.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-1 border-b text-center">{item.project?.id_sap || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.id_status_mitra}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.bulan_order}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.no_sp_mitra}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.no_po_mitra}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.id_pr}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.id_gr}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.toc_mitra}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.material_mitra}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.jasa_mitra}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.nilai_sp_mitra}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.rekon_material_mitra}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.rekon_jasa_mitra}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.nilai_rekon_mitra}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_pekerjaan?.status_pekerjaan || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_rekon_mitra?.status_rekon_mitra || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_tagihan_mitra?.status_tagihan_mitra || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.ket_status_tagihan_mitra?.ket_status_tagihan_mitra || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">
                                            <div className="flex justify-center gap-2">
                                                <Link
                                                    href={route('status-mitra.edit', item.id)}
                                                    className="text-yellow-500"
                                                >
                                                    <FaRegEdit />
                                                </Link>
                                                <Link
                                                    as="button"
                                                    className="text-red-400"
                                                    onClick={() => {
                                                        if (confirm('Yakin ingin menghapus data ini?')) {
                                                            router.delete(route('status-mitra.destroy', item.id));
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
                                    <td colSpan="10" className="text-center text-gray-500 py-4">
                                        Tidak ada data Status Mitra.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div className="flex justify-end p-4 gap-4">
                        <SecondaryButton
                            onClick={() => handlePageChange(statusMitra.prev_page_url)}
                            disabled={!statusMitra.prev_page_url}
                            className="text-xs"
                        >
                            Previous
                        </SecondaryButton>

                        <span className="text-xs self-center text-gray-700">
                            Page {statusMitra.current_page} of {statusMitra.last_page}
                        </span>

                        <SecondaryButton
                            onClick={() => handlePageChange(statusMitra.next_page_url)}
                            disabled={!statusMitra.next_page_url}
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
