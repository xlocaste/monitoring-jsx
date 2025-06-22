import React, { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Update({ auth, project, Tematik, Sto, Pic, Mitra }) {
    console.log(Tematik)
    const { data, setData, put, processing, errors } = useForm({
        pic_id: project.pic_id || '',
        mitra_id: project.mitra_id || '',
        tematik_id: project.tematik_id || '',
        sto_id: project.sto_id || '',
        id_project: project.id_project || '',
        id_sap: project.id_sap || '',
        tahun: project.tahun || '',
        bulan: project.bulan || '',
        lokasi_wo_lop: project.lokasi_wo_lop || '',
        uraian_pekerjaan: project.uraian_pekerjaan || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmed = window.confirm("Apakah Anda yakin ingin menyimpan data ini?");
        if (!confirmed) return;
        put(route('project.update', project.id));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Project" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <h2 className="text-xl font-bold mb-6">Edit Data Project</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="pic_id" className="block text-sm font-medium text-gray-700 mb-1">PIC</label>
                        <select
                            id="pic_id"
                            value={data.pic_id}
                            onChange={(e) => setData('pic_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih PIC</option>
                            {Pic.map((pic) => (
                                <option key={pic.id} value={pic.id}>{pic.pic_admin}</option>
                            ))}
                        </select>
                        {errors.pic_id && <div className="text-red-500 text-sm mt-1">{errors.pic_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="mitra_id" className="block text-sm font-medium text-gray-700 mb-1">Mitra</label>
                        <select
                            id="mitra_id"
                            value={data.mitra_id}
                            onChange={(e) => setData('mitra_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Mitra</option>
                            {Mitra.map((mitra) => (
                                <option key={mitra.id} value={mitra.id}>
                                    {mitra.nama_mitra} - {mitra.tipe_kemitraan}
                                </option>
                            ))}
                        </select>
                        {errors.mitra_id && <div className="text-red-500 text-sm mt-1">{errors.mitra_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="tematik_id" className="block text-sm font-medium text-gray-700 mb-1">Tematik</label>
                        <select
                            id="tematik_id"
                            value={data.tematik_id}
                            onChange={(e) => setData('tematik_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Tematik</option>
                            {Tematik.map((item) => (
                                <option key={item.id} value={item.id}>{item.tematik} - {item.witel}</option>
                            ))}
                        </select>
                        {errors.tematik_id && <div className="text-red-500 text-sm mt-1">{errors.tematik_id}</div>}
                    </div>

                    <div>
                        <label htmlFor="sto_id" className="block text-sm font-medium text-gray-700 mb-1">STO</label>
                        <select
                            id="sto_id"
                            value={data.sto_id}
                            onChange={(e) => setData('sto_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih STO</option>
                            {Sto.map((sto) => (
                                <option key={sto.id} value={sto.id}>{sto.sto}</option>
                            ))}
                        </select>
                        {errors.sto_id && <div className="text-red-500 text-sm mt-1">{errors.sto_id}</div>}
                    </div>

                    {[
                        { id: 'id_project', label: 'ID Project' },
                        { id: 'id_sap', label: 'ID SAP' },
                        { id: 'tahun', label: 'Tahun' },
                        { id: 'bulan', label: 'Bulan' },
                        { id: 'lokasi_wo_lop', label: 'Lokasi WO LOP' },
                        { id: 'uraian_pekerjaan', label: 'Uraian Pekerjaan' },
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
                            {errors[field.id] && (
                                <div className="text-red-500 text-sm mt-1">{errors[field.id]}</div>
                            )}
                        </div>
                    ))}

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
