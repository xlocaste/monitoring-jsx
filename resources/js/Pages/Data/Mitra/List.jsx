import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaTrash } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';

export default function List({ auth, Mitra }) {
    const handlePageChange = (url) => {
        if (url) {
            router.visit(url);
        }
    };

    const handleDelete = (id) => {
        if (confirm("Yakin ingin menghapus mitra ini?")) {
            router.delete(route('mitra.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Daftar Mitra" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <p className='mb-4 font-bold'>Data Mitra</p>
                <div className="overflow-x-auto">
                    <div className="flex justify-end items-center m-4">
                        <PrimaryButton>
                            <Link href={route('mitra.create')}>
                                + Tambah Mitra
                            </Link>
                        </PrimaryButton>
                    </div>

                    <table className="min-w-full bg-white border border-gray-200 rounded">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-2 border-b text-sm font-semibold text-center text-gray-700">NAMA MITRA</th>
                                <th className="px-6 py-2 border-b text-sm font-semibold text-center text-gray-700">TIPE KEMITRAAN</th>
                                <th className="px-6 py-2 border-b text-sm font-semibold text-center text-gray-700">GL ACCOUNT</th>
                                <th className="px-4 py-2 border-b text-sm font-semibold text-center text-gray-700">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Mitra.data.length > 0 ? (
                                Mitra.data.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-1 border-b text-sm">{item.nama_mitra}</td>
                                        <td className="px-4 py-1 border-b text-sm">{item.tipe_kemitraan}</td>
                                        <td className="px-4 py-1 border-b text-sm">{item.gl_account}</td>
                                        <td className="px-4 py-1 border-b text-center">
                                            <div className="flex gap-2 justify-center">
                                                <Link href={route('mitra.edit', item.id)} className="text-yellow-500">
                                                    <FaRegEdit />
                                                </Link>
                                                <button onClick={() => handleDelete(item.id)} className="text-red-500">
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4 text-gray-500">Tidak ada data mitra.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div className="flex justify-end p-4 gap-4">
                        <SecondaryButton onClick={() => handlePageChange(Mitra.prev_page_url)} disabled={!Mitra.prev_page_url}
                         className='text-xs'
                        >
                            Previous
                        </SecondaryButton>
                        <span className="text-gray-700 self-center text-xs">
                            Page {Mitra.current_page} of {Mitra.last_page}
                        </span>
                        <SecondaryButton onClick={() => handlePageChange(Mitra.next_page_url)} disabled={!Mitra.next_page_url}
                         className='text-xs'
                        >
                            Next
                        </SecondaryButton>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
