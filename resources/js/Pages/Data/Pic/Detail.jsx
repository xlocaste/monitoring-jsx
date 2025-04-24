import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaRegEdit, FaTrash } from 'react-icons/fa';

export default function Detail({ auth, Pic }) {
    const handleDelete = () => {
        if (confirm('Yakin ingin menghapus data ini?')) {
            router.delete(route('data.pic.destroy', Pic.id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`Detail PIC - ${Pic.pic_admin}`} />

            <div className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Detail PIC</h1>
                    <p className="text-gray-600">Informasi lengkap tentang PIC yang dipilih.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <span className="font-semibold text-gray-700">PIC Admin:</span>
                        <p className="text-gray-900">{Pic.pic_admin}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">PIC Project:</span>
                        <p className="text-gray-900">{Pic.pic_project}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">Waspang TA:</span>
                        <p className="text-gray-900">{Pic.waspang_ta}</p>
                    </div>
                </div>

                <div className="flex gap-4 mt-6">
                    <PrimaryButton>
                        <Link href={route('data.pic.edit', Pic.id)} className="flex items-center gap-1">
                            <FaRegEdit /> Edit
                        </Link>
                    </PrimaryButton>

                    <SecondaryButton onClick={handleDelete} className="flex items-center gap-1 text-red-500 border-red-400 hover:bg-red-100">
                        <FaTrash /> Hapus
                    </SecondaryButton>

                    <SecondaryButton>
                        <Link href={route('data.pic.index')}>
                            Kembali ke Daftar
                        </Link>
                    </SecondaryButton>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
