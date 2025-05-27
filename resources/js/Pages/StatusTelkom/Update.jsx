import React, { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Update({
    auth,
    statusTelkom,
    Projects,
    StatusPo,
    StatusRekonTelkom,
    StatusBastTelkom,
}) {
    const { data, setData, put, processing, errors } = useForm({
        project_id: statusTelkom.project_id || '',
        status_po_id: statusTelkom.status_po_id || '',
        status_rekon_telkom_id: statusTelkom.status_rekon_telkom_id || '',
        status_bast_telkom_id: statusTelkom.status_bast_telkom_id || '',
        id_status_telkom: statusTelkom.id_status_telkom || '',
        bulan_order_telkom: statusTelkom.bulan_order_telkom || '',
        target_bast: statusTelkom.target_bast || '',
        target_bulan_bast: statusTelkom.target_bulan_bast || '',
        no_sp_telkom: statusTelkom.no_sp_telkom || '',
        material_telkom: statusTelkom.material_telkom || '',
        jasa_telkom: statusTelkom.jasa_telkom || '',
        nilai_sp_telkom: statusTelkom.nilai_sp_telkom || '',
        rekon_material_telkom: statusTelkom.rekon_material_telkom || '',
        rekon_jasa_telkom: statusTelkom.rekon_jasa_telkom || '',
        nilai_rekon_telkom: statusTelkom.nilai_rekon_telkom || '',
        gap_selisih: statusTelkom.gap_selisih || '',
        no_bast_telkom: statusTelkom.no_bast_telkom || '',
        bulan_bast_telkom: statusTelkom.bulan_bast_telkom || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('status-telkom.update', statusTelkom.id));
    };

    useEffect(() => {
        const sp = parseFloat(data.nilai_sp_telkom) || 0;
        const rekon = parseFloat(data.nilai_rekon_telkom) || 0;
        setData('gap_selisih', String(sp - rekon));
    }, [data.nilai_sp_telkom, data.nilai_rekon_telkom]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Status Telkom" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <h2 className="text-xl font-bold mb-6">Edit Data Status Telkom</h2>
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
                        <label htmlFor="status_po_id" className="block text-sm font-medium text-gray-700 mb-1">Status PO</label>
                        <select
                            id="status_po_id"
                            value={data.status_po_id}
                            onChange={(e) => setData('status_po_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status PO</option>
                            {StatusPo.map((status) => (
                                <option key={status.id} value={status.id}>{status.status_po}</option>
                            ))}
                        </select>
                        {errors.status_po_id && <div className="text-red-500 text-sm mt-1">{errors.status_po_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="status_rekon_telkom_id" className="block text-sm font-medium text-gray-700 mb-1">Status Rekon Telkom</label>
                        <select
                            id="status_rekon_telkom_id"
                            value={data.status_rekon_telkom_id}
                            onChange={(e) => setData('status_rekon_telkom_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status Rekon Telkom</option>
                            {StatusRekonTelkom.map((status) => (
                                <option key={status.id} value={status.id}>{status.status_rekon_telkom}</option>
                            ))}
                        </select>
                        {errors.status_rekon_telkom_id && <div className="text-red-500 text-sm mt-1">{errors.status_rekon_telkom_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="status_bast_telkom_id" className="block text-sm font-medium text-gray-700 mb-1">Status BAST Telkom</label>
                        <select
                            id="status_bast_telkom_id"
                            value={data.status_bast_telkom_id}
                            onChange={(e) => setData('status_bast_telkom_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status BAST Telkom</option>
                            {StatusBastTelkom.map((status) => (
                                <option key={status.id} value={status.id}>{status.status_bast_telkom}</option>
                            ))}
                        </select>
                        {errors.status_bast_telkom_id && <div className="text-red-500 text-sm mt-1">{errors.status_bast_telkom_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="bulan_order_telkom" className="block text-sm font-medium text-gray-700 mb-1">Bulan Order Telkom</label>
                        <input
                            id="bulan_order_telkom"
                            type="text"
                            value={data.bulan_order_telkom}
                            onChange={(e) => setData('bulan_order_telkom', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.bulan_order_telkom && <div className="text-red-500 text-sm mt-1">{errors.bulan_order_telkom}</div>}
                    </div>

                    <div>
                        <label htmlFor="id_status_telkom" className="block text-sm font-medium text-gray-700 mb-1">ID Status Telkom</label>
                        <input
                            id="id_status_telkom"
                            type="text"
                            value={data.id_status_telkom}
                            onChange={(e) => setData('id_status_telkom', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.id_status_telkom && <div className="text-red-500 text-sm mt-1">{errors.id_status_telkom}</div>}
                    </div>

                    <div>
                        <label htmlFor="target_bast" className="block text-sm font-medium text-gray-700 mb-1">Target BAST</label>
                        <input
                            id="target_bast"
                            type="text"
                            value={data.target_bast}
                            onChange={(e) => setData('target_bast', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.target_bast && <div className="text-red-500 text-sm mt-1">{errors.target_bast}</div>}
                    </div>

                    <div>
                        <label htmlFor="target_bulan_bast" className="block text-sm font-medium text-gray-700 mb-1">Target Bulan BAST</label>
                        <input
                            id="target_bulan_bast"
                            type="text"
                            value={data.target_bulan_bast}
                            onChange={(e) => setData('target_bulan_bast', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.target_bulan_bast && <div className="text-red-500 text-sm mt-1">{errors.target_bulan_bast}</div>}
                    </div>

                    <div>
                        <label htmlFor="no_sp_telkom" className="block text-sm font-medium text-gray-700 mb-1">No SP Telkom</label>
                        <input
                            id="no_sp_telkom"
                            type="text"
                            value={data.no_sp_telkom}
                            onChange={(e) => setData('no_sp_telkom', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.no_sp_telkom && <div className="text-red-500 text-sm mt-1">{errors.no_sp_telkom}</div>}
                    </div>

                    <div>
                        <label htmlFor="material_telkom" className="block text-sm font-medium text-gray-700 mb-1">Material Telkom</label>
                        <input
                            id="material_telkom"
                            type="text"
                            value={data.material_telkom}
                            onChange={(e) => setData('material_telkom', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.material_telkom && <div className="text-red-500 text-sm mt-1">{errors.material_telkom}</div>}
                    </div>

                    <div>
                        <label htmlFor="jasa_telkom" className="block text-sm font-medium text-gray-700 mb-1">Jasa Telkom</label>
                        <input
                            id="jasa_telkom"
                            type="text"
                            value={data.jasa_telkom}
                            onChange={(e) => setData('jasa_telkom', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.jasa_telkom && <div className="text-red-500 text-sm mt-1">{errors.jasa_telkom}</div>}
                    </div>

                    <div>
                        <label htmlFor="nilai_sp_telkom" className="block text-sm font-medium text-gray-700 mb-1">Nilai SP Telkom</label>
                        <input
                            id="nilai_sp_telkom"
                            type="text"
                            value={data.nilai_sp_telkom}
                            onChange={(e) => setData('nilai_sp_telkom', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.nilai_sp_telkom && <div className="text-red-500 text-sm mt-1">{errors.nilai_sp_telkom}</div>}
                    </div>

                    <div>
                        <label htmlFor="rekon_material_telkom" className="block text-sm font-medium text-gray-700 mb-1">Rekon Material Telkom</label>
                        <input
                            id="rekon_material_telkom"
                            type="text"
                            value={data.rekon_material_telkom}
                            onChange={(e) => setData('rekon_material_telkom', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.rekon_material_telkom && <div className="text-red-500 text-sm mt-1">{errors.rekon_material_telkom}</div>}
                    </div>

                    <div>
                        <label htmlFor="rekon_jasa_telkom" className="block text-sm font-medium text-gray-700 mb-1">Rekon Jasa Telkom</label>
                        <input
                            id="rekon_jasa_telkom"
                            type="text"
                            value={data.rekon_jasa_telkom}
                            onChange={(e) => setData('rekon_jasa_telkom', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.rekon_jasa_telkom && <div className="text-red-500 text-sm mt-1">{errors.rekon_jasa_telkom}</div>}
                    </div>

                    <div>
                        <label htmlFor="nilai_rekon_telkom" className="block text-sm font-medium text-gray-700 mb-1">Nilai Rekon Telkom</label>
                        <input
                            id="nilai_rekon_telkom"
                            type="text"
                            value={data.nilai_rekon_telkom}
                            onChange={(e) => setData('nilai_rekon_telkom', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.nilai_rekon_telkom && <div className="text-red-500 text-sm mt-1">{errors.nilai_rekon_telkom}</div>}
                    </div>

                    <div>
                        <label htmlFor="gap_selisih" className="block text-sm font-medium text-gray-700 mb-1">Gap Selisih</label>
                        <input
                            id="gap_selisih"
                            type="text"
                            value={data.gap_selisih}
                            readOnly
                            onChange={(e) => setData('gap_selisih', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.gap_selisih && <div className="text-red-500 text-sm mt-1">{errors.gap_selisih}</div>}
                    </div>

                    <div>
                        <label htmlFor="no_bast_telkom" className="block text-sm font-medium text-gray-700 mb-1">No BAST Telkom</label>
                        <input
                            id="no_bast_telkom"
                            type="text"
                            value={data.no_bast_telkom}
                            onChange={(e) => setData('no_bast_telkom', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.no_bast_telkom && <div className="text-red-500 text-sm mt-1">{errors.no_bast_telkom}</div>}
                    </div>

                    <div>
                        <label htmlFor="bulan_bast_telkom" className="block text-sm font-medium text-gray-700 mb-1">Bulan BAST Telkom</label>
                        <input
                            id="bulan_bast_telkom"
                            type="text"
                            value={data.bulan_bast_telkom}
                            onChange={(e) => setData('bulan_bast_telkom', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.bulan_bast_telkom && <div className="text-red-500 text-sm mt-1">{errors.bulan_bast_telkom}</div>}
                    </div>

                    <PrimaryButton type="submit" disabled={processing}>Simpan</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
