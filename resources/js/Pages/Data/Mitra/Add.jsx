import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Add({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama_mitra: '',
        tipe_kemitraan: '',
        no_kontrak: '',
        gl_account: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('mitra.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tambah Mitra" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nama_mitra" className="block text-sm font-medium text-gray-700 mb-1">
                            Nama Mitra
                        </label>
                        <input
                            id="nama_mitra"
                            type="text"
                            value={data.nama_mitra}
                            onChange={(e) => setData('nama_mitra', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.nama_mitra && (
                            <div className="text-red-500 text-sm mt-1">{errors.nama_mitra}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="tipe_kemitraan" className="block text-sm font-medium text-gray-700 mb-1">
                            Tipe Kemitraan
                        </label>
                        <input
                            id="tipe_kemitraan"
                            type="text"
                            value={data.tipe_kemitraan}
                            onChange={(e) => setData('tipe_kemitraan', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.tipe_kemitraan && (
                            <div className="text-red-500 text-sm mt-1">{errors.tipe_kemitraan}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="no_kontrak" className="block text-sm font-medium text-gray-700 mb-1">
                            No Kontrak
                        </label>
                        <input
                            id="no_kontrak"
                            type="text"
                            value={data.no_kontrak}
                            onChange={(e) => setData('no_kontrak', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.no_kontrak && (
                            <div className="text-red-500 text-sm mt-1">{errors.no_kontrak}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="gl_account" className="block text-sm font-medium text-gray-700 mb-1">
                            GL Account
                        </label>
                        <input
                            id="gl_account"
                            type="text"
                            value={data.gl_account}
                            onChange={(e) => setData('gl_account', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.gl_account && (
                            <div className="text-red-500 text-sm mt-1">{errors.gl_account}</div>
                        )}
                    </div>

                    <div className="flex justify-end mt-6">
                        <PrimaryButton type="submit" disabled={processing}>
                            Simpan
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
