import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Detail({ auth, projects }) {
    console.log(projects)

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`Detail Project - ${projects.id_project}`} />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Detail Project</h1>
                    <p className="text-gray-600">Informasi lengkap tentang project yang dipilih.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <span className="font-semibold text-gray-700">ID Project:</span>
                        <p className="text-gray-900">{projects.id_project}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">PIC:</span>
                        <p className="text-gray-900">{projects.pic ? projects.pic.pic_admin : 'N/A'}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">Mitra:</span>
                        <p className="text-gray-900">{projects.mitra ? projects.mitra.nama_mitra : 'N/A'}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">Tematik:</span>
                        <p className="text-gray-900">{projects.tematik ? projects.tematik.tematik : 'N/A'}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">STO:</span>
                        <p className="text-gray-900">{projects.sto ? projects.sto.sto : 'N/A'}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">ID SAP:</span>
                        <p className="text-gray-900">{projects.id_sap}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">Tahun:</span>
                        <p className="text-gray-900">{projects.tahun}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">Bulan:</span>
                        <p className="text-gray-900">{projects.bulan}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">Lokasi WO LOP:</span>
                        <p className="text-gray-900">{projects.lokasi_wo_lop}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">Uraian Pekerjaan:</span>
                        <p className="text-gray-900">{projects.uraian_pekerjaan}</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
