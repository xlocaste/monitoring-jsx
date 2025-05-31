import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { FaRegEdit, FaTrash } from 'react-icons/fa';

export default function Show({ auth, Laporan }) {
    console.log(Laporan)
    const handleDelete = () => {
        if (confirm('Yakin ingin menghapus data laporan ini?')) {
            router.delete(route('laporan.destroy', Laporan.id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Detail Laporan" />

            <div className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Detail Laporan</h1>
                    <p className="text-gray-600">Informasi lengkap tentang laporan yang dipilih.</p>
                </div>

               <div className="grid grid-cols-2 gap-4">
                    <DetailField label="ID Laporan" value={Laporan.id} />
                    <DetailField label="ID Status Mitra" value={Laporan.status_mitra?.id_status_mitra} />
                    <DetailField label="PIC Admin" value={Laporan.status_telkom?.project?.pic?.pic_admin} />
                    <DetailField label="PIC Project" value={Laporan.status_telkom?.project?.pic?.pic_project} />
                    <DetailField label="Waspang TA" value={Laporan.status_telkom?.project?.pic?.waspang_ta} />
                    <DetailField label="Nama Mitra" value={Laporan.status_telkom?.project?.mitra?.nama_mitra} />
                    <DetailField label="Tipe Kemitraan" value={Laporan.status_telkom?.project?.mitra?.tipe_kemitraan} />
                    <DetailField label="GL Account" value={Laporan.status_telkom?.project?.mitra?.gl_account} />
                    <DetailField label="Tematik" value={Laporan.status_telkom?.project?.tematik?.tematik} />
                    <DetailField label="STO" value={Laporan.status_telkom?.project?.sto?.sto} />
                    <DetailField label="ID Project" value={Laporan.status_telkom?.project?.id_project} />
                    <DetailField label="ID SAP" value={Laporan.status_telkom?.project?.id_sap} />
                    <DetailField label="Tahun" value={Laporan.status_telkom?.project?.tahun} />
                    <DetailField label="Bulan" value={Laporan.status_telkom?.project?.bulan} />
                    <DetailField label="Lokasi WO LOP" value={Laporan.status_telkom?.project?.lokasi_wo_lop} />
                    <DetailField label="No Kontrak" value={Laporan.status_telkom?.project?.mitra?.no_kontrak} />
                    <DetailField label="Uraian Pekerjaan" value={Laporan.status_telkom?.project?.uraian_pekerjaan} />
                    <DetailField label="ID Status Telkom" value={Laporan.status_telkom?.id_status_telkom} />
                    <DetailField label="Project" value={Laporan.status_mitra?.project?.id_project} />
                    <DetailField label="Bulan Order" value={Laporan.status_mitra?.bulan_order} />
                    <DetailField label="No SP Mitra" value={Laporan.status_mitra?.no_sp_mitra} />
                    <DetailField label="No PO Mitra" value={Laporan.status_mitra?.no_po_mitra} />
                    <DetailField label="ID PR" value={Laporan.status_mitra?.id_pr} />
                    <DetailField label="ID GR" value={Laporan.status_mitra?.id_gr} />
                    <DetailField label="TOC Mitra" value={Laporan.status_mitra?.toc_mitra} />
                    <DetailField label="Material Mitra" value={Laporan.status_mitra?.material_mitra} />
                    <DetailField label="Jasa Mitra" value={Laporan.status_mitra?.jasa_mitra} />
                    <DetailField label="Nilai SP Mitra" value={Laporan.status_mitra?.nilai_sp_mitra} />
                    <DetailField label="Rekon Material Mitra" value={Laporan.status_mitra?.rekon_material_mitra} />
                    <DetailField label="Rekon Jasa Mitra" value={Laporan.status_mitra?.rekon_jasa_mitra} />
                    <DetailField label="Nilai Rekon Mitra" value={Laporan.status_mitra?.nilai_rekon_mitra} />
                    <DetailField label="Status Pekerjaan" value={Laporan.status_mitra?.status_pekerjaan?.status_pekerjaan} />
                    <DetailField label="Status Rekon Mitra" value={Laporan.status_mitra?.status_rekon_mitra?.status_rekon_mitra} />
                    <DetailField label="Status Tagihan Mitra" value={Laporan.status_mitra?.status_tagihan_mitra?.status_tagihan_mitra} />
                    <DetailField label="Keterangan Status Tagihan Mitra" value={Laporan.status_mitra?.ket_status_tagihan_mitra?.ket_status_tagihan_mitra} />
                    <DetailField label="Project" value={Laporan.status_telkom?.project?.id_project} />
                    <DetailField label="Bulan Order Telkom" value={Laporan.status_telkom?.bulan_order_telkom} />
                    <DetailField label="Target BAST" value={Laporan.status_telkom?.target_bast} />
                    <DetailField label="Target Bulan BAST" value={Laporan.status_telkom?.target_bulan_bast} />
                    <DetailField label="No SP Telkom" value={Laporan.status_telkom?.no_sp_telkom} />
                    <DetailField label="Material Telkom" value={Laporan.status_telkom?.material_telkom} />
                    <DetailField label="Jasa Telkom" value={Laporan.status_telkom?.jasa_telkom} />
                    <DetailField label="Nilai SP Telkom" value={Laporan.status_telkom?.nilai_sp_telkom} />
                    <DetailField label="Rekon Material Telkom" value={Laporan.status_telkom?.rekon_material_telkom} />
                    <DetailField label="Rekon Jasa Telkom" value={Laporan.status_telkom?.rekon_jasa_telkom} />
                    <DetailField label="Nilai Rekon Telkom" value={Laporan.status_telkom?.nilai_rekon_telkom} />
                    <DetailField label="Gap Selisih" value={Laporan.status_telkom?.gap_selisih} />
                    <DetailField label="No BAST Telkom" value={Laporan.status_telkom?.no_bast_telkom} />
                    <DetailField label="Bulan BAST Telkom" value={Laporan.status_telkom?.bulan_bast_telkom} />
                    <DetailField label="Status PO" value={Laporan.status_telkom?.status_po?.status_po} />
                    <DetailField label="Status Rekon Telkom" value={Laporan.status_telkom?.status_rekon_telkom?.status_rekon_telkom} />
                    <DetailField label="Status BAST Telkom" value={Laporan.status_telkom?.status_bast_telkom?.status_bast_telkom} />
                </div>

                <div className="flex gap-4 mt-6">
                    {auth?.user?.roles?.some(role => role.name === 'admin') && (
                        <PrimaryButton>
                            <Link href={route('laporan.edit', Laporan.id)} className="flex items-center gap-1">
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
                        <Link href={route('laporan.index')}>
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
