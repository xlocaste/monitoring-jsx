import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Update({ auth, pic }) {
    const { data, setData, put, processing, errors } = useForm({
        pic_admin: pic.pic_admin || '',
        pic_project: pic.pic_project || '',
        waspang_ta: pic.waspang_ta || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('pic.update', pic.id));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit PIC" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">PIC Admin</label>
                        <input
                            type="text"
                            value={data.pic_admin}
                            onChange={(e) => setData('pic_admin', e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.pic_admin && <div className="text-red-500 text-sm">{errors.pic_admin}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">PIC Project</label>
                        <input
                            type="text"
                            value={data.pic_project}
                            onChange={(e) => setData('pic_project', e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.pic_project && <div className="text-red-500 text-sm">{errors.pic_project}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Waspang TA</label>
                        <input
                            type="text"
                            value={data.waspang_ta}
                            onChange={(e) => setData('waspang_ta', e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.waspang_ta && <div className="text-red-500 text-sm">{errors.waspang_ta}</div>}
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
