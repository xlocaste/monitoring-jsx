import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Update({ auth, mitra }) {
    const { data, setData, put, processing, errors } = useForm({
        nama_mitra: mitra.nama_mitra || '',
        tipe_kemitraan: mitra.tipe_kemitraan || '',
        gl_account: mitra.gl_account || '',
        no_kontrak: mitra.no_kontrak || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('mitra.update', mitra.id));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Mitra" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nama Mitra</label>
                        <input
                            type="text"
                            value={data.nama_mitra}
                            onChange={(e) => setData('nama_mitra', e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.nama_mitra && <div className="text-red-500 text-sm">{errors.nama_mitra}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tipe Kemitraan</label>
                        <input
                            type="text"
                            value={data.tipe_kemitraan}
                            onChange={(e) => setData('tipe_kemitraan', e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.tipe_kemitraan && <div className="text-red-500 text-sm">{errors.tipe_kemitraan}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">No Kontrak</label>
                        <input
                            type="text"
                            value={data.no_kontrak}
                            onChange={(e) => setData('no_kontrak', e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.no_kontrak && <div className="text-red-500 text-sm">{errors.no_kontrak}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">GL Account</label>
                        <input
                            type="text"
                            value={data.gl_account}
                            onChange={(e) => setData('gl_account', e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.gl_account && <div className="text-red-500 text-sm">{errors.gl_account}</div>}
                    </div>

                    <div className='flex justify-end mt-4'>
                        <PrimaryButton type="submit" disabled={processing}>
                            Simpan Perubahan
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
