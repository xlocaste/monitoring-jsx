import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Add({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        pic_admin: '',
        pic_project: '',
        waspang_ta: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('data.pic.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tambah PIC" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label htmlFor="pic_admin" className="block text-sm font-medium text-gray-700 mb-1">PIC Admin</label>
                        <input
                            id="pic_admin"
                            type="text"
                            value={data.pic_admin}
                            onChange={(e) => setData('pic_admin', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.pic_admin && <div className="text-red-500 text-sm mt-1">{errors.pic_admin}</div>}
                    </div>
                    <div>
                        <label htmlFor="pic_project" className="block text-sm font-medium text-gray-700 mb-1">PIC Project</label>
                        <input
                            id="pic_project"
                            type="text"
                            value={data.pic_project}
                            onChange={(e) => setData('pic_project', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.pic_project && <div className="text-red-500 text-sm mt-1">{errors.pic_project}</div>}
                    </div>
                    <div>
                        <label htmlFor="waspang_ta" className="block text-sm font-medium text-gray-700 mb-1">Waspang TA</label>
                        <input
                            id="waspang_ta"
                            type="text"
                            value={data.waspang_ta}
                            onChange={(e) => setData('waspang_ta', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.waspang_ta && <div className="text-red-500 text-sm mt-1">{errors.waspang_ta}</div>}
                    </div>

                    <div className="flex justify-end mt-4">
                        <PrimaryButton
                            type="submit"
                            disabled={processing}
                        >
                            Simpan
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
