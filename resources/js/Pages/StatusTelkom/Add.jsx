import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function AddStatusTelkom({
    auth,
    Projects,
    StatusPo,
    StatusRekonTelkom,
    StatusRekonMitra,
    StatusBastTelkom,
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        project_id: '',
        status_po_id: '',
        status_rekon_telkom_id: '',
        status_rekon_mitra_id: '',
        status_bast_telkom_id: '',
        id_status_telkom: '',
        bulan_order_telkom: '',
        target_bast: '',
        target_bulan_bast: '',
        no_sp_telkom: '',
        material_telkom: '',
        jasa_telkom: '',
        nilai_sp_telkom: '',
        rekon_material_telkom: '',
        rekon_jasa_telkom: '',
        nilai_rekon_telkom: '',
        gap_selisih: '',
        no_bast_telkom: '',
        bulan_bast_telkom: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('status-telkom.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tambah Status Telkom" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="project_id" className="block text-sm font-medium text-gray-700 mb-1">
                            ID SAP (Project)
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
                                    {project.id_sap}
                                </option>
                            ))}
                        </select>
                        {errors.project_id && <div className="text-red-500 text-sm mt-1">{errors.project_id}</div>}
                    </div>

                    {[  
                        { id: 'id_status_telkom', label: 'ID Status Telkom' },
                        { id: 'bulan_order_telkom', label: 'Bulan Order Telkom' },
                        { id: 'target_bast', label: 'Target BAST' },
                        { id: 'target_bulan_bast', label: 'Target Bulan BAST' },
                        { id: 'no_sp_telkom', label: 'No SP Telkom' },
                        { id: 'material_telkom', label: 'Material Telkom' },
                        { id: 'jasa_telkom', label: 'Jasa Telkom' },
                        { id: 'nilai_sp_telkom', label: 'Nilai SP Telkom' },
                        { id: 'rekon_material_telkom', label: 'Rekon Material Telkom' },
                        { id: 'rekon_jasa_telkom', label: 'Rekon Jasa Telkom' },
                        { id: 'nilai_rekon_telkom', label: 'Nilai Rekon Telkom' },
                        { id: 'gap_selisih', label: 'Gap Selisih' },
                        { id: 'no_bast_telkom', label: 'No BAST Telkom' },
                        { id: 'bulan_bast_telkom', label: 'Bulan BAST Telkom' },
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
                        <label htmlFor="status_po_id" className="block text-sm font-medium text-gray-700 mb-1">
                            Status PO Telkom
                        </label>
                        <select
                            id="status_po_id"
                            value={data.status_po_id}
                            onChange={(e) => setData('status_po_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status PO</option>
                            {StatusPo.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.status_po}
                                </option>
                            ))}
                        </select>
                        {errors.status_po_id && <div className="text-red-500 text-sm mt-1">{errors.status_po_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="status_rekon_telkom_id" className="block text-sm font-medium text-gray-700 mb-1">
                            Status Rekon Telkom
                        </label>
                        <select
                            id="status_rekon_telkom_id"
                            value={data.status_rekon_telkom_id}
                            onChange={(e) => setData('status_rekon_telkom_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status Rekon Telkom</option>
                            {StatusRekonTelkom.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.status_rekon_telkom}
                                </option>
                            ))}
                        </select>
                        {errors.status_rekon_telkom_id && <div className="text-red-500 text-sm mt-1">{errors.status_rekon_telkom_id}</div>}
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
                            <option value="">Pilih Status BAST</option>
                            {StatusRekonMitra.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.status_rekon_mitra}
                                </option>
                            ))}
                        </select>
                        {errors.status_rekon_mitra_id && <div className="text-red-500 text-sm mt-1">{errors.status_rekon_mitra_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="status_bast_telkom_id" className="block text-sm font-medium text-gray-700 mb-1">
                            Status BAST Telkom
                        </label>
                        <select
                            id="status_bast_telkom_id"
                            value={data.status_bast_telkom_id}
                            onChange={(e) => setData('status_bast_telkom_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status BAST</option>
                            {StatusBastTelkom.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.status_bast_telkom}
                                </option>
                            ))}
                        </select>
                        {errors.status_bast_telkom_id && <div className="text-red-500 text-sm mt-1">{errors.status_bast_telkom_id}</div>}
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
