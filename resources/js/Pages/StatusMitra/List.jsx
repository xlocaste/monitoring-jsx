import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaEye, FaRegEdit } from "react-icons/fa";

export default function List({ auth, statusMitra, filters }) {
    const [keyword, setKeyword] = useState(filters?.keyword || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('status-mitra.search'), { keyword }, {
            preserveState: true,
            replace: true,
        });
    };

    const handlePageChange = (url) => {
        if (url) {
            router.visit(url);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Status Mitra" />

            <div className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <p className='mb-4 font-bold'>Data Status Mitra</p>
                <div className="">
                    <div className='flex justify-between my-4'>
                        <form onSubmit={handleSearch} className="flex gap-2 ml-1">
                            <input
                                type="text"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                className="border-gray-300 rounded px-2 pr-60 py-1 text-sm"
                                placeholder="Cari Data Status Mitra..."
                            />
                            <PrimaryButton type="submit" className="text-sm">Cari</PrimaryButton>
                        </form>
                        {auth?.user?.roles?.some(role => role.name === 'admin') && (
                            <PrimaryButton>
                                <Link href={route('status-mitra.create')}>
                                    + TAMBAH STATUS MITRA
                                </Link>
                            </PrimaryButton>
                        )}
                    </div>
                    <div className="w-full">
                        <table className="w-full bg-white border border-gray-200 rounded text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 border-b text-center font-semibold">ID Project</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">Bulan Order</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">TOC Mitra</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">Status Pekerjaan</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">Status Rekon Mitra</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {statusMitra.data.length > 0 ? (
                                    statusMitra.data.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-1 border-b text-center">
                                            <Link href={route('project.show', item.project?.id)} className="text-blue-500 hover:underline">
                                                {item.project?.id_project || '-'}
                                            </Link>
                                            </td>
                                            <td className="px-4 py-1 border-b text-center">{item.bulan_order}</td>
                                            <td className="px-4 py-1 border-b text-center">{item.toc_mitra}</td>
                                            <td className="px-4 py-1 border-b text-center">{item.status_pekerjaan?.status_pekerjaan || '-'}</td>
                                            <td className="px-4 py-1 border-b text-center">{item.status_rekon_mitra?.status_rekon_mitra || '-'}</td>
                                                <td className="px-4 py-1 border-b text-center">
                                                    <div className="flex justify-center gap-2">
                                                        <Link
                                                            href={route('status-mitra.show', item.id)}
                                                            className='text-blue-400'
                                                            >
                                                            <FaEye />
                                                        </Link>
                                                        {auth?.user?.roles?.some(role => role.name === 'admin') && (
                                                        <Link
                                                            href={route('status-mitra.edit', item.id)}
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
                                                                    router.delete(route('status-mitra.destroy', item.id));
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
                                        <td colSpan="19" className="text-center text-gray-500 py-4">
                                            Tidak ada data Status Mitra.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

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
