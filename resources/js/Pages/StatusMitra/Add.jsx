import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function AddStatusMitra({
    auth,
    Projects,
    StatusPekerjaan,
    StatusRekonMitra,
    StatusTagihanMitra,
    KetStatusTagihanMitra,
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        project_id: '',
        id_status_mitra: '',
        bulan_order: '',
        no_sp_mitra: '',
        no_po_mitra: '',
        id_pr: '',
        id_gr: '',
        toc_mitra: '',
        material_mitra: '',
        jasa_mitra: '',
        nilai_sp_mitra: '',
        rekon_material_mitra: '',
        rekon_jasa_mitra: '',
        nilai_rekon_mitra: '',
        status_pekerjaan_id: '',
        status_rekon_mitra_id: '',
        status_tagihan_mitra_id: '',
        ket_status_tagihan_mitra_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('status-mitra.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tambah Status Mitra" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="project_id" className="block text-sm font-medium text-gray-700 mb-1">
                            ID Project
                        </label>
                        <select
                            id="project_id"
                            value={data.project_id}
                            onChange={(e) => setData('project_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Project</option>
                            {Projects.map((project) => (
                                <option key={project.id} value={project.id}>
                                    {project.id_project}
                                </option>
                            ))}
                        </select>
                        {errors.project_id && <div className="text-red-500 text-sm mt-1">{errors.project_id}</div>}
                    </div>

                    {[
                        { id: 'id_status_mitra', label: 'ID Status Mitra' },
                        { id: 'bulan_order', label: 'Bulan Order' },
                        { id: 'no_sp_mitra', label: 'No SP Mitra' },
                        { id: 'no_po_mitra', label: 'No PO Mitra' },
                        { id: 'id_pr', label: 'ID PR' },
                        { id: 'id_gr', label: 'ID GR' },
                        { id: 'toc_mitra', label: 'TOC Mitra' },
                        { id: 'material_mitra', label: 'Material Mitra' },
                        { id: 'jasa_mitra', label: 'Jasa Mitra' },
                        { id: 'nilai_sp_mitra', label: 'Nilai SP Mitra' },
                        { id: 'rekon_material_mitra', label: 'Rekon Material Mitra' },
                        { id: 'rekon_jasa_mitra', label: 'Rekon Jasa Mitra' },
                        { id: 'nilai_rekon_mitra', label: 'Nilai Rekon Mitra' },
                    ].map((field) => (
                        <div key={field.id}>
                            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                                {field.label}
                            </label>
                            <input
                                id={field.id}
                                type="text"
                                value={data[field.id]}
                                onChange={(e) => setData(field.id, e.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors[field.id] && <div className="text-red-500 text-sm mt-1">{errors[field.id]}</div>}
                        </div>
                    ))}

                    <div>
                        <label htmlFor="status_pekerjaan_id" className="block text-sm font-medium text-gray-700 mb-1">
                            Status Pekerjaan
                        </label>
                        <select
                            id="status_pekerjaan_id"
                            value={data.status_pekerjaan_id}
                            onChange={(e) => setData('status_pekerjaan_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status</option>
                            {StatusPekerjaan.map((status) => (
                                <option key={status.id} value={status.id}>
                                    {status.status_pekerjaan}
                                </option>
                            ))}
                        </select>
                        {errors.status_pekerjaan_id && <div className="text-red-500 text-sm mt-1">{errors.status_pekerjaan_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="status_rekon_mitra_id" className="block text-sm font-medium text-gray-700 mb-1">
                            Status Rekon Mitra
                        </label>
                        <select
                            id="status_rekon_mitra_id"
                            value={data.status_rekon_mitra_id}
                            onChange={(e) => setData('status_rekon_mitra_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status</option>
                            {StatusRekonMitra.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.status_rekon_mitra}
                                </option>
                            ))}
                        </select>
                        {errors.status_rekon_mitra_id && <div className="text-red-500 text-sm mt-1">{errors.status_rekon_mitra_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="status_tagihan_mitra_id" className="block text-sm font-medium text-gray-700 mb-1">
                            Status Tagihan Mitra
                        </label>
                        <select
                            id="status_tagihan_mitra_id"
                            value={data.status_tagihan_mitra_id}
                            onChange={(e) => setData('status_tagihan_mitra_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status</option>
                            {StatusTagihanMitra.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.status_tagihan_mitra}
                                </option>
                            ))}
                        </select>
                        {errors.status_tagihan_mitra_id && <div className="text-red-500 text-sm mt-1">{errors.status_tagihan_mitra_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="ket_status_tagihan_mitra_id" className="block text-sm font-medium text-gray-700 mb-1">
                            Keterangan Status Tagihan Mitra
                        </label>
                        <select
                            id="ket_status_tagihan_mitra_id"
                            value={data.ket_status_tagihan_mitra_id}
                            onChange={(e) => setData('ket_status_tagihan_mitra_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Keterangan</option>
                            {KetStatusTagihanMitra.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.ket_status_tagihan_mitra}
                                </option>
                            ))}
                        </select>
                        {errors.ket_status_tagihan_mitra_id && <div className="text-red-500 text-sm mt-1">{errors.ket_status_tagihan_mitra_id}</div>}
                    </div>

                    <div className="flex justify-end mt-4">
                        <PrimaryButton type="submit" disabled={processing}>
                            Simpan
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
