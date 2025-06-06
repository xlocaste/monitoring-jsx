import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

export default function List({ auth, Pic, filters }) {
    console.log(Pic)
    const [keyword, setKeyword] = useState(filters?.keyword || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('pic.search'), { keyword }, {
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
            <Head title="Daftar PIC" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <p className='mb-4 font-bold'>Data PIC</p>
                <div className="overflow-x-auto">
                    <div className='flex justify-between my-4'>
                        <form onSubmit={handleSearch} className="flex gap-2 ml-1">
                            <input
                                type="text"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                className="border-gray-300 rounded px-2 pr-60 py-1 text-sm"
                                placeholder="Cari Data PIC..."
                            />
                            <PrimaryButton type="submit" className="text-sm">Cari</PrimaryButton>
                        </form>
                        {auth?.user?.roles?.some(role => role.name === 'admin') && (
                            <PrimaryButton>
                                <Link href={route('pic.create')}>
                                    + TAMBAH PIC
                                </Link>
                            </PrimaryButton>
                        )}
                    </div>

                    <table className="min-w-full bg-white border border-gray-200 rounded">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-2 border-b text-sm font-semibold text-center text-gray-700">PIC ADMIN</th>
                                <th className="px-6 py-2 border-b text-sm font-semibold text-center text-gray-700">PIC PROJECT</th>
                                <th className="px-6 py-2 border-b text-sm font-semibold text-center text-gray-700">WASPANG TA</th>
                                {auth?.user?.roles?.some(role => role.name === 'admin') && (
                                    <th className="px-6 py-2 border-b text-sm font-semibold text-center text-gray-700">ACTION</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {Pic.data.length > 0 ? (
                                Pic.data.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-1 border-b text-sm text-gray-700">{item.pic_admin}</td>
                                        <td className="px-6 py-1 border-b text-sm text-gray-700">{item.pic_project}</td>
                                        <td className="px-6 py-1 border-b text-sm text-gray-700">{item.waspang_ta}</td>
                                        {auth?.user?.roles?.some(role => role.name === 'admin') && (
                                            <td className="px-4 py-1 border-b text-center">
                                                <div className='flex gap-2 justify-center'>
                                                    <Link
                                                        href={route('pic.edit', item.id)}
                                                        className='text-yellow-500'
                                                    >
                                                        <FaRegEdit />
                                                    </Link>
                                                    <Link
                                                        as="button"
                                                        className="text-red-400"
                                                        onClick={() => {
                                                            if (confirm('Yakin ingin menghapus data ini?')) {
                                                                router.delete(route('pic.destroy', item.id));
                                                            }
                                                        }}
                                                    >
                                                        <FaTrash />
                                                    </Link>
                                                </div>
                                            </td>
                                        )}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                                        Tidak ada data PIC.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div className="flex justify-end p-4 gap-4">
                        <SecondaryButton
                            onClick={() => handlePageChange(Pic.prev_page_url)}
                            disabled={!Pic.prev_page_url}
                            className='text-xs'
                        >
                            Previous
                        </SecondaryButton>

                        <span className="text-gray-700 self-center text-xs">
                            Page {Pic.current_page} of {Pic.last_page}
                        </span>

                        <SecondaryButton
                            onClick={() => handlePageChange(Pic.next_page_url)}
                            disabled={!Pic.next_page_url}
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
