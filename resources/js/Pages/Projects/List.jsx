import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

export default function List({ auth, projects }) {
    const handlePageChange = (url) => {
        if (url) {
            router.visit(url);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Daftar Project" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <div className="overflow-x-auto">
                    <div className='flex justify-end m-4'>
                        <PrimaryButton>
                            <Link href={route('project.create')}>
                                + TAMBAH PROJECT
                            </Link>
                        </PrimaryButton>
                    </div>

                    <table className="min-w-full bg-white border border-gray-200 rounded">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border-b text-sm font-semibold text-center text-gray-700">ID Project</th>
                                <th className="px-4 py-2 border-b text-sm font-semibold text-center text-gray-700">ID SAP</th>
                                <th className="px-4 py-2 border-b text-sm font-semibold text-center text-gray-700">PIC Admin</th>
                                <th className="px-4 py-2 border-b text-sm font-semibold text-center text-gray-700">Mitra</th>
                                <th className="px-4 py-2 border-b text-sm font-semibold text-center text-gray-700">Tematik</th>
                                <th className="px-4 py-2 border-b text-sm font-semibold text-center text-gray-700">STO</th>
                                <th className="px-4 py-2 border-b text-sm font-semibold text-center text-gray-700">Tahun</th>
                                <th className="px-4 py-2 border-b text-sm font-semibold text-center text-gray-700">Bulan</th>
                                {auth.user && (
                                    <th className="px-4 py-2 border-b text-sm font-semibold text-center text-gray-700">ACTION</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {projects.data.length > 0 ? (
                                projects.data.map((project) => (
                                    <tr key={project.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-1 border-b text-sm text-gray-700 text-center">{project.id_project}</td>
                                        <td className="px-4 py-1 border-b text-sm text-gray-700 text-center">{project.id_sap}</td>
                                        <td className="px-4 py-1 border-b text-sm text-gray-700">
                                            {project.pic ? (
                                                <Link
                                                    href={route('data.pic.show', project.pic.id)}
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    {project.pic.pic_admin}
                                                </Link>
                                            ) : (
                                                '-'
                                            )}
                                        </td>
                                        <td className="px-4 py-1 border-b text-sm text-gray-700">{project.mitra?.nama_mitra || '-'}</td>
                                        <td className="px-4 py-1 border-b text-sm text-gray-700">{project.tematik?.tematik || '-'}</td>
                                        <td className="px-4 py-1 border-b text-sm text-gray-700">{project.sto?.sto || '-'}</td>
                                        <td className="px-4 py-1 border-b text-sm text-gray-700 text-center">{project.tahun}</td>
                                        <td className="px-4 py-1 border-b text-sm text-gray-700 text-center">{project.bulan}</td>
                                        {auth.user && (
                                            <td className="px-4 py-1 border-b text-center">
                                                <div className='flex gap-2 justify-center'>
                                                    <Link
                                                        href={route('project.edit', project.id)}
                                                        className='text-yellow-500'
                                                    >
                                                        <FaRegEdit />
                                                    </Link>
                                                    <Link
                                                        as="button"
                                                        className="text-red-400"
                                                        onClick={() => {
                                                            if (confirm('Yakin ingin menghapus project ini?')) {
                                                                router.delete(route('project.destroy', project.id));
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
                                    <td colSpan="8" className="px-4 py-4 text-center text-gray-500">
                                        Tidak ada data Project.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div className="flex justify-end p-4 gap-4">
                        <SecondaryButton
                            onClick={() => handlePageChange(projects.prev_page_url)}
                            disabled={!projects.prev_page_url}
                            className='text-xs'
                        >
                            Previous
                        </SecondaryButton>

                        <span className="text-gray-700 self-center text-xs">
                            Page {projects.current_page} of {projects.last_page}
                        </span>

                        <SecondaryButton
                            onClick={() => handlePageChange(projects.next_page_url)}
                            disabled={!projects.next_page_url}
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
