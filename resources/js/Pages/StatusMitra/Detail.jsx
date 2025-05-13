import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaRegEdit, FaTrash } from 'react-icons/fa';

export default function Show({ auth, statusMitra }) {
    const handleDelete = () => {
        if (confirm('Yakin ingin menghapus data ini?')) {
            router.delete(route('status-mitra.destroy', statusMitra.id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Detail Status Mitra" />

            <div className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Detail Status Mitra</h1>
                    <p className="text-gray-600">Informasi lengkap tentang status mitra yang dipilih.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <DetailField label="Project" value={statusMitra.project?.id_project} />
                    <DetailField label="ID Status Mitra" value={statusMitra.id_status_mitra} />
                    <DetailField label="Bulan Order" value={statusMitra.bulan_order} />
                    <DetailField label="No SP Mitra" value={statusMitra.no_sp_mitra} />
                    <DetailField label="No PO Mitra" value={statusMitra.no_po_mitra} />
                    <DetailField label="ID PR" value={statusMitra.id_pr} />
                    <DetailField label="ID GR" value={statusMitra.id_gr} />
                    <DetailField label="TOC Mitra" value={statusMitra.toc_mitra} />
                    <DetailField label="Material Mitra" value={statusMitra.material_mitra} />
                    <DetailField label="Jasa Mitra" value={statusMitra.jasa_mitra} />
                    <DetailField label="Nilai SP Mitra" value={statusMitra.nilai_sp_mitra} />
                    <DetailField label="Rekon Material Mitra" value={statusMitra.rekon_material_mitra} />
                    <DetailField label="Rekon Jasa Mitra" value={statusMitra.rekon_jasa_mitra} />
                    <DetailField label="Nilai Rekon Mitra" value={statusMitra.nilai_rekon_mitra} />
                    <DetailField label="Status Pekerjaan" value={statusMitra.status_pekerjaan?.status_pekerjaan} />
                    <DetailField label="Status Rekon Mitra" value={statusMitra.status_rekon_mitra?.status_rekon_mitra} />
                    <DetailField label="Status Tagihan Mitra" value={statusMitra.status_tagihan_mitra?.status_tagihan_mitra} />
                    <DetailField label="Keterangan Status Tagihan Mitra" value={statusMitra.ket_status_tagihan_mitra?.ket_status_tagihan_mitra} />
                </div>

                <div className="flex gap-4 mt-6">
                    {auth?.user?.roles?.some(role => role.name === 'admin') && (
                        <PrimaryButton>
                            <Link href={route('status-mitra.edit', statusMitra.id)} className="flex items-center gap-1">
                                <FaRegEdit /> Edit
                            </Link>
                        </PrimaryButton>
                    )}

                    {auth?.user?.roles?.some(role => role.name === 'admin') && (
                        <SecondaryButton onClick={handleDelete} className="flex items-center gap-1 text-red-500 border-red-400 hover:bg-red-100">
                            <FaTrash /> Hapus
                        </SecondaryButton>
                    )}

                    <SecondaryButton>
                        <Link href={route('status-mitra.index')}>
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
