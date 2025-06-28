import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaEye, FaRegEdit } from "react-icons/fa";

export default function List({ auth, statusTelkom, filters }) {
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
            <Head title="Status Telkom" />

            <div className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <p className='mb-4 font-bold'>Data Status Telkom</p>
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
                                <Link href={route('status-telkom.create')}>
                                    + TAMBAH STATUS TELKOM
                                </Link>
                            </PrimaryButton>
                        )}
                    </div>
                    <div className="w-full">
                        <table className="w-full bg-white border border-gray-200 rounded text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 border-b text-center font-semibold">ID Project</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">Status Rekon Telkom</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">No BAST Telkom</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">Status BAST Telkom</th>
                                    <th className="px-4 py-2 border-b text-center font-semibold">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {statusTelkom.data.length > 0 ? (
                                    statusTelkom.data.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-1 border-b text-center">
                                            <Link href={route('project.show', item.project?.id)} className="text-blue-500 hover:underline">
                                                {item.project?.id_project || '-'}
                                            </Link>
                                            </td>
                                            <td className="px-4 py-1 border-b text-center">{item.status_rekon_telkom?.status_rekon_telkom}</td>
                                            <td className="px-4 py-1 border-b text-center">{item.no_bast_telkom}</td>
                                            <td className="px-4 py-1 border-b text-center">{item.status_bast_telkom?.status_bast_telkom}</td>
                                            <td className="px-4 py-1 border-b text-center">
                                                <div className="flex justify-center gap-2">
                                                    <Link
                                                        href={route('status-telkom.show', item.id)}
                                                        className='text-blue-400'
                                                    >
                                                        <FaEye />
                                                    </Link>
                                                    {auth?.user?.roles?.some(role => role.name === 'admin') && (
                                                    <Link
                                                        href={route('status-telkom.edit', item.id)}
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
                                                                router.delete(route('status-telkom.destroy', item.id));
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
                                        <td colSpan="10" className="text-center text-gray-500 py-4">
                                            Tidak ada data Status Telkom.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

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
