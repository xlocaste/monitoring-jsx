import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function AddProject({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        pic_id: '',
        mitra_id: '',
        tematik_id: '',
        sto_id: '',
        id_sap: '',
        tahun: '',
        bulan: '',
        lokasi_wo_lop: '',
        no_kontrak: '',
        uraian_pekerjaan: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('project.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tambah Project" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                        { id: 'pic_id', label: 'PIC ID' },
                        { id: 'mitra_id', label: 'Mitra ID' },
                        { id: 'tematik_id', label: 'Tematik ID' },
                        { id: 'sto_id', label: 'STO ID' },
                        { id: 'id_sap', label: 'ID SAP' },
                        { id: 'tahun', label: 'Tahun' },
                        { id: 'bulan', label: 'Bulan' },
                        { id: 'lokasi_wo_lop', label: 'Lokasi WO LOP' },
                        { id: 'no_kontrak', label: 'No Kontrak' },
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
