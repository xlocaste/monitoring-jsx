import React, { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Update({ auth, statusMitra, Projects, StatusPekerjaan, StatusRekonMitra, StatusTagihanMitra, KetStatusTagihanMitra }) {
    console.log(statusMitra)
    const { data, setData, put, processing, errors } = useForm({
        project_id: statusMitra.project_id || '',
        id_status_mitra: statusMitra.id_status_mitra || '',
        bulan_order: statusMitra.bulan_order || '',
        no_sp_mitra: statusMitra.no_sp_mitra || '',
        no_po_mitra: statusMitra.no_po_mitra || '',
        id_pr: statusMitra.id_pr || '',
        id_gr: statusMitra.id_gr || '',
        toc_mitra: statusMitra.toc_mitra || '',
        material_mitra: statusMitra.material_mitra || '',
        jasa_mitra: statusMitra.jasa_mitra || '',
        nilai_sp_mitra: statusMitra.nilai_sp_mitra || '',
        rekon_material_mitra: statusMitra.rekon_material_mitra || '',
        rekon_jasa_mitra: statusMitra.rekon_jasa_mitra || '',
        nilai_rekon_mitra: statusMitra.nilai_rekon_mitra || '',
        status_pekerjaan_id: statusMitra.status_pekerjaan_id || '',
        status_rekon_mitra_id: statusMitra.status_rekon_mitra_id || '',
        status_tagihan_mitra_id: statusMitra.status_tagihan_mitra_id || '',
        ket_status_tagihan_mitra_id: statusMitra.ket_status_tagihan_mitra_id || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmed = window.confirm("Apakah Anda yakin ingin menyimpan data ini?");
        if (!confirmed) return;

        const cleanedData = {
            ...data,
            nilai_sp_mitra: data.nilai_sp_mitra.replace(/\./g, ''),
        };

        put(route('status-mitra.update', statusMitra.id), {
            data: cleanedData,
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Status Mitra" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <h2 className="text-xl font-bold mb-6">Edit Data Status Mitra</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="project_id" className="block text-sm font-medium text-gray-700 mb-1">ID Project</label>
                        <select
                            id="project_id"
                            value={data.project_id}
                            onChange={(e) => setData('project_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Project</option>
                            {Projects.map((project) => (
                                <option key={project.id} value={project.id}>{project.id_project}</option>
                            ))}
                        </select>
                        {errors.project_id && <div className="text-red-500 text-sm mt-1">{errors.project_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="id_status_mitra" className="block text-sm font-medium text-gray-700 mb-1">ID Status Mitra</label>
                        <input
                            id="id_status_mitra"
                            type="text"
                            value={data.id_status_mitra}
                            onChange={(e) => setData('id_status_mitra', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.bulan_order && <div className="text-red-500 text-sm mt-1">{errors.bulan_order}</div>}
                    </div>

                    <div>
                        <label htmlFor="bulan_order" className="block text-sm font-medium text-gray-700 mb-1">Bulan Order</label>
                        <input
                            id="bulan_order"
                            type="text"
                            value={data.bulan_order}
                            onChange={(e) => setData('bulan_order', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.bulan_order && <div className="text-red-500 text-sm mt-1">{errors.bulan_order}</div>}
                    </div>

                    <div>
                        <label htmlFor="no_sp_mitra" className="block text-sm font-medium text-gray-700 mb-1">No SP Mitra</label>
                        <input
                            id="no_sp_mitra"
                            type="text"
                            value={data.no_sp_mitra}
                            onChange={(e) => setData('no_sp_mitra', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.no_sp_mitra && <div className="text-red-500 text-sm mt-1">{errors.no_sp_mitra}</div>}
                    </div>

                    <div>
                        <label htmlFor="no_po_mitra" className="block text-sm font-medium text-gray-700 mb-1">No PO Mitra</label>
                        <input
                            id="no_po_mitra"
                            type="text"
                            value={data.no_po_mitra}
                            onChange={(e) => setData('no_po_mitra', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.no_po_mitra && <div className="text-red-500 text-sm mt-1">{errors.no_po_mitra}</div>}
                    </div>

                    <div>
                        <label htmlFor="id_pr" className="block text-sm font-medium text-gray-700 mb-1">ID PR</label>
                        <input
                            id="id_pr"
                            type="text"
                            value={data.id_pr}
                            onChange={(e) => setData('id_pr', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.id_pr && <div className="text-red-500 text-sm mt-1">{errors.id_pr}</div>}
                    </div>

                    <div>
                        <label htmlFor="id_gr" className="block text-sm font-medium text-gray-700 mb-1">ID GR</label>
                        <input
                            id="id_gr"
                            type="text"
                            value={data.id_gr}
                            onChange={(e) => setData('id_gr', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.id_gr && <div className="text-red-500 text-sm mt-1">{errors.id_gr}</div>}
                    </div>

                    <div>
                        <label htmlFor="toc_mitra" className="block text-sm font-medium text-gray-700 mb-1">TOC Mitra</label>
                        <input
                            id="toc_mitra"
                            type="text"
                            value={data.toc_mitra}
                            onChange={(e) => setData('toc_mitra', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.toc_mitra && <div className="text-red-500 text-sm mt-1">{errors.toc_mitra}</div>}
                    </div>

                    <div>
                        <label htmlFor="material_mitra" className="block text-sm font-medium text-gray-700 mb-1">Material Mitra</label>
                        <input
                            id="material_mitra"
                            type="text"
                            value={data.material_mitra}
                            onChange={(e) => setData('material_mitra', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.material_mitra && <div className="text-red-500 text-sm mt-1">{errors.material_mitra}</div>}
                    </div>

                    <div>
                        <label htmlFor="jasa_mitra" className="block text-sm font-medium text-gray-700 mb-1">Jasa Mitra</label>
                        <input
                            id="jasa_mitra"
                            type="text"
                            value={data.jasa_mitra}
                            onChange={(e) => setData('jasa_mitra', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.jasa_mitra && <div className="text-red-500 text-sm mt-1">{errors.jasa_mitra}</div>}
                    </div>

                    <div>
                        <label htmlFor="nilai_sp_mitra" className="block text-sm font-medium text-gray-700 mb-1">Nilai SP Mitra</label>
                        <input
                            id="nilai_sp_mitra"
                            type="text"
                            value={data.nilai_sp_mitra}
                            onChange={(e) => setData('nilai_sp_mitra', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.nilai_sp_mitra && <div className="text-red-500 text-sm mt-1">{errors.nilai_sp_mitra}</div>}
                    </div>

                    <div>
                        <label htmlFor="rekon_material_mitra" className="block text-sm font-medium text-gray-700 mb-1">Rekon Material Mitra</label>
                        <input
                            id="rekon_material_mitra"
                            type="text"
                            value={data.rekon_material_mitra}
                            onChange={(e) => setData('rekon_material_mitra', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.rekon_material_mitra && <div className="text-red-500 text-sm mt-1">{errors.rekon_material_mitra}</div>}
                    </div>

                    <div>
                        <label htmlFor="rekon_jasa_mitra" className="block text-sm font-medium text-gray-700 mb-1">Rekon Jasa Mitra</label>
                        <input
                            id="rekon_jasa_mitra"
                            type="text"
                            value={data.rekon_jasa_mitra}
                            onChange={(e) => setData('rekon_jasa_mitra', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.rekon_jasa_mitra && <div className="text-red-500 text-sm mt-1">{errors.rekon_jasa_mitra}</div>}
                    </div>

                    <div>
                        <label htmlFor="nilai_rekon_mitra" className="block text-sm font-medium text-gray-700 mb-1">Nilai Rekon Mitra</label>
                        <input
                            id="nilai_rekon_mitra"
                            type="text"
                            value={data.nilai_rekon_mitra}
                            onChange={(e) => setData('nilai_rekon_mitra', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.nilai_rekon_mitra && <div className="text-red-500 text-sm mt-1">{errors.nilai_rekon_mitra}</div>}
                    </div>

                    <div>
                        <label htmlFor="status_pekerjaan_id" className="block text-sm font-medium text-gray-700 mb-1">Status Pekerjaan</label>
                        <select
                            id="status_pekerjaan_id"
                            value={data.status_pekerjaan_id}
                            onChange={(e) => setData('status_pekerjaan_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status Pekerjaan</option>
                            {StatusPekerjaan.map((status) => (
                                <option key={status.id} value={status.id}>{status.status_pekerjaan}</option>
                            ))}
                        </select>
                        {errors.status_pekerjaan_id && <div className="text-red-500 text-sm mt-1">{errors.status_pekerjaan_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="status_rekon_mitra_id" className="block text-sm font-medium text-gray-700 mb-1">Status Rekon Mitra</label>
                        <select
                            id="status_rekon_mitra_id"
                            value={data.status_rekon_mitra_id}
                            onChange={(e) => setData('status_rekon_mitra_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status Rekon Mitra</option>
                            {StatusRekonMitra.map((status) => (
                                <option key={status.id} value={status.id}>{status.status_rekon_mitra}</option>
                            ))}
                        </select>
                        {errors.status_rekon_mitra_id && <div className="text-red-500 text-sm mt-1">{errors.status_rekon_mitra_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="status_tagihan_mitra_id" className="block text-sm font-medium text-gray-700 mb-1">Status Tagihan Mitra</label>
                        <select
                            id="status_tagihan_mitra_id"
                            value={data.status_tagihan_mitra_id}
                            onChange={(e) => setData('status_tagihan_mitra_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status Tagihan Mitra</option>
                            {StatusTagihanMitra.map((status) => (
                                <option key={status.id} value={status.id}>{status.status_tagihan_mitra}</option>
                            ))}
                        </select>
                        {errors.status_tagihan_mitra_id && <div className="text-red-500 text-sm mt-1">{errors.status_tagihan_mitra_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="ket_status_tagihan_mitra_id" className="block text-sm font-medium text-gray-700 mb-1">Ket Status Tagihan Mitra</label>
                        <select
                            id="ket_status_tagihan_mitra_id"
                            value={data.ket_status_tagihan_mitra_id}
                            onChange={(e) => setData('ket_status_tagihan_mitra_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Ket Status Tagihan Mitra</option>
                            {KetStatusTagihanMitra.map((status) => (
                                <option key={status.id} value={status.id}>{status.ket_status_tagihan_mitra}</option>
                            ))}
                        </select>
                        {errors.ket_status_tagihan_mitra_id && <div className="text-red-500 text-sm mt-1">{errors.ket_status_tagihan_mitra_id}</div>}
                    </div>

                    <div className="flex justify-end mt-6">
                        <PrimaryButton type="submit" disabled={processing}>
                            Update
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
