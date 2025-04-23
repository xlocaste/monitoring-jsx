import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

export default function List({ auth, statusTelkom }) {
    const handlePageChange = (url) => {
        if (url) {
            router.visit(url);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Status Telkom" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <div className="overflow-x-auto">
                    <div className='flex justify-end m-4'>
                        <PrimaryButton>
                            <Link href={route('status-telkom.create')}>
                                + TAMBAH STATUS TELKOM
                            </Link>
                        </PrimaryButton>
                    </div>

                    <table className="min-w-full bg-white border border-gray-200 rounded text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border-b text-center font-semibold">ID Project</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Bulan Order Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Target BAST</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Target Bulan BAST</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Status PO</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">No SP Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">No PO Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Material Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Jasa Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Rekon Material Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Rekon Jasa Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Nilai Rekon Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Status Rekon Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">GAP Selisih</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">No BAST Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Status BAST Telkom</th>
                                <th className="px-4 py-2 border-b text-center font-semibold">Bulan BAST Telkom</th> 
                                <th className="px-4 py-2 border-b text-center font-semibold">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {statusTelkom.data.length > 0 ? (
                                statusTelkom.data.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-1 border-b text-center">{item.project?.id_sap || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.bulan_order_telkom}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.target_bast}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.target_bulan_bast}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_po?.status_po || '-'}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.no_sp_telkom}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_po?.status_po}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.material_telkom}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.jasa_telkom}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.rekon_material_telkom}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.rekon_jasa_telkom}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.nilai_rekon_telkom}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_rekon_telkom?.status_rekon_telkom}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.gap_selisih}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.no_bast_telkom}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.status_bast_telkom?.status_bast_telkom}</td>
                                        <td className="px-4 py-1 border-b text-center">{item.bulan_bast_telkom}</td>
                                        <td className="px-4 py-1 border-b text-center">
                                            <div className="flex justify-center gap-2">
                                                <Link
                                                    href={route('status-telkom.edit', item.id)}
                                                    className="text-yellow-500"
                                                >
                                                    <FaRegEdit />
                                                </Link>
                                                <Link
                                                    as="button"
                                                    className="text-red-400"
                                                    onClick={() => {
                                                        if (confirm('Yakin ingin menghapus data ini?')) {
                                                            router.delete(route('status-telkom.destroy', item.id));
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
                                        Tidak ada data Status Telkom.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div className="flex justify-end p-4 gap-4">
                        <SecondaryButton
                            onClick={() => handlePageChange(statusTelkom.prev_page_url)}
                            disabled={!statusTelkom.prev_page_url}
                            className="text-xs"
                        >
                            Previous
                        </SecondaryButton>

                        <span className="text-xs self-center text-gray-700">
                            Page {statusTelkom.current_page} of {statusTelkom.last_page}
                        </span>

                        <SecondaryButton
                            onClick={() => handlePageChange(statusTelkom.next_page_url)}
                            disabled={!statusTelkom.next_page_url}
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
