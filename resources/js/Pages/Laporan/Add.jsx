import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Add({ auth, StatusTelkom, StatusMitra }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        status_telkom_id: '',
        status_mitra_id: '',
        keterangan: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('laporan.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tambah Laporan" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="status_telkom_id" className="block text-sm font-medium text-gray-700 mb-1">
                            Status Telkom
                        </label>
                        <select
                            id="status_telkom_id"
                            value={data.status_telkom_id}
                            onChange={(e) => setData('status_telkom_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status Telkom</option>
                            {StatusTelkom.map((status) => (
                                <option key={status.id} value={status.id}>
                                    {status.id_status_telkom}
                                </option>
                            ))}
                        </select>
                        {errors.status_telkom_id && (
                            <div className="text-red-500 text-sm mt-1">{errors.status_telkom_id}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="status_mitra_id" className="block text-sm font-medium text-gray-700 mb-1">
                            Status Mitra
                        </label>
                        <select
                            id="status_mitra_id"
                            value={data.status_mitra_id}
                            onChange={(e) => setData('status_mitra_id', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Pilih Status Mitra</option>
                            {StatusMitra.map((status) => (
                                <option key={status.id} value={status.id}>
                                    {status.id_status_telkom}
                                </option>
                            ))}
                        </select>
                        {errors.status_mitra_id && (
                            <div className="text-red-500 text-sm mt-1">{errors.status_mitra_id}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="keterangan" className="block text-sm font-medium text-gray-700 mb-1">
                            Keterangan
                        </label>
                        <textarea
                            id="keterangan"
                            value={data.keterangan}
                            onChange={(e) => setData('keterangan', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            rows={4}
                        />
                        {errors.keterangan && (
                            <div className="text-red-500 text-sm mt-1">{errors.keterangan}</div>
                        )}
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
