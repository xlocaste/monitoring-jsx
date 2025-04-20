import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Update({ auth, laporan, StatusTelkom, StatusMitra }) {
    const { data, setData, put, processing, errors } = useForm({
        status_telkom_id: laporan.status_telkom_id || '',
        status_mitra_id: laporan.status_mitra_id || '',
        keterangan: laporan.keterangan || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('laporan.update', laporan.id));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Laporan" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status Telkom</label>
                        <select
                            value={data.status_telkom_id}
                            onChange={(e) => setData('status_telkom_id', e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Pilih Status Telkom</option>
                            {StatusTelkom.map((status) => (
                                <option key={status.id} value={status.id}>
                                    {status.id}
                                </option>
                            ))}
                        </select>
                        {errors.status_telkom_id && <div className="text-red-500 text-sm">{errors.status_telkom_id}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status Mitra</label>
                        <select
                            value={data.status_mitra_id}
                            onChange={(e) => setData('status_mitra_id', e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Pilih Status Mitra</option>
                            {StatusMitra.map((status) => (
                                <option key={status.id} value={status.id}>
                                    {status.id}
                                </option>
                            ))}
                        </select>
                        {errors.status_mitra_id && <div className="text-red-500 text-sm">{errors.status_mitra_id}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Keterangan</label>
                        <input
                            type="text"
                            value={data.keterangan}
                            onChange={(e) => setData('keterangan', e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.keterangan && <div className="text-red-500 text-sm">{errors.keterangan}</div>}
                    </div>

                    <div className="flex justify-end mt-4">
                        <PrimaryButton type="submit" disabled={processing}>
                            Simpan Perubahan
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
