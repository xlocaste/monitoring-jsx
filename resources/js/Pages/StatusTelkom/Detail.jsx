import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaRegEdit, FaTrash } from 'react-icons/fa';

export default function Show({ auth, statusTelkom }) {
    const handleDelete = () => {
        if (confirm('Yakin ingin menghapus data ini?')) {
            router.delete(route('status-telkom.destroy', statusTelkom.id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Detail Status Telkom" />

            <div className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Detail Status Telkom</h1>
                    <p className="text-gray-600">Informasi lengkap tentang status Telkom yang dipilih.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <DetailField label="ID Project" value={statusTelkom.project?.id_project} />
                    <DetailField label="ID Status Telkom" value={statusTelkom.id_status_telkom} />
                    <DetailField label="Bulan Order Telkom" value={statusTelkom.bulan_order_telkom} />
                    <DetailField label="Target BAST" value={statusTelkom.target_bast} />
                    <DetailField label="Target Bulan BAST" value={statusTelkom.target_bulan_bast} />
                    <DetailField label="No SP Telkom" value={statusTelkom.no_sp_telkom} />
                    <DetailField label="Material Telkom" value={statusTelkom.material_telkom} />
                    <DetailField label="Jasa Telkom" value={statusTelkom.jasa_telkom} />
                    <DetailField label="Nilai SP Telkom" value={statusTelkom.nilai_sp_telkom} />
                    <DetailField label="Rekon Material Telkom" value={statusTelkom.rekon_material_telkom} />
                    <DetailField label="Rekon Jasa Telkom" value={statusTelkom.rekon_jasa_telkom} />
                    <DetailField label="Nilai Rekon Telkom" value={statusTelkom.nilai_rekon_telkom} />
                    <DetailField label="Gap / Selisih" value={statusTelkom.gap_selisih} />
                    <DetailField label="No BAST Telkom" value={statusTelkom.no_bast_telkom} />
                    <DetailField label="Bulan BAST Telkom" value={statusTelkom.bulan_bast_telkom} />
                    <DetailField label="Status PO" value={statusTelkom.status_po?.status_po} />
                    <DetailField label="Status Rekon Telkom" value={statusTelkom.status_rekon_telkom?.status_rekon_telkom} />
                    <DetailField label="Status BAST Telkom" value={statusTelkom.status_bast_telkom?.status_bast_telkom} />
                </div>

                <div className="flex gap-4 mt-6">
                    <PrimaryButton>
                        <Link href={route('status-telkom.edit', statusTelkom.id)} className="flex items-center gap-1">
                            <FaRegEdit /> Edit
                        </Link>
                    </PrimaryButton>

                    <SecondaryButton onClick={handleDelete} className="flex items-center gap-1 text-red-500 border-red-400 hover:bg-red-100">
                        <FaTrash /> Hapus
                    </SecondaryButton>

                    <SecondaryButton>
                        <Link href={route('status-telkom.index')}>
                            Kembali ke Daftar
                        </Link>
                    </SecondaryButton>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function DetailField({ label, value }) {
    return (
        <div>
            <span className="font-semibold text-gray-700">{label}:</span>
            <p className="text-gray-900">{value ?? '-'}</p>
        </div>
    );
}
