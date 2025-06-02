<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Detail Laporan</title>
    <link rel="stylesheet" href="{{ public_path('css/laporan.css') }}">
</head>
<body>
    <div style="text-align: right">
        <img src="images/logo.png" alt="" class="logo">
    </div>
    <table>
        <thead>
            <tr>
                <th>Label</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>ID Laporan</td><td>{{ $laporan->id }}</td></tr>
            <tr><td>ID Status Mitra</td><td>{{ $laporan->statusMitra->id_status_mitra }}</td></tr>
            <tr><td>PIC Admin</td><td>{{ $laporan->statusTelkom?->project?->pic?->pic_admin }}</td></tr>
            <tr><td>PIC Project</td><td>{{ $laporan->statusTelkom?->project?->pic?->pic_project }}</td></tr>
            <tr><td>Waspang TA</td><td>{{ $laporan->statusTelkom?->project?->pic?->waspang_ta }}</td></tr>
            <tr><td>Nama Mitra</td><td>{{ $laporan->statusTelkom?->project?->mitra?->nama_mitra }}</td></tr>
            <tr><td>Tipe Kemitraan</td><td>{{ $laporan->statusTelkom?->project?->mitra?->tipe_kemitraan }}</td></tr>
            <tr><td>GL Account</td><td>{{ $laporan->statusTelkom?->project?->mitra?->gl_account }}</td></tr>
            <tr><td>Tematik</td><td>{{ $laporan->statusTelkom?->project?->tematik?->tematik }}</td></tr>
            <tr><td>STO</td><td>{{ $laporan->statusTelkom?->project?->sto?->sto }}</td></tr>
            <tr><td>ID Project</td><td>{{ $laporan->statusTelkom?->project?->id_project }}</td></tr>
            <tr><td>ID SAP</td><td>{{ $laporan->statusTelkom?->project?->id_sap }}</td></tr>
            <tr><td>Tahun</td><td>{{ $laporan->statusTelkom?->project?->tahun }}</td></tr>
            <tr><td>Bulan</td><td>{{ $laporan->statusTelkom?->project?->bulan }}</td></tr>
            <tr><td>Lokasi WO LOP</td><td>{{ $laporan->statusTelkom?->project?->lokasi_wo_lop }}</td></tr>
            <tr><td>No Kontrak</td><td>{{ $laporan->statusTelkom?->project?->mitra?->no_kontrak }}</td></tr>
            <tr><td>Uraian Pekerjaan</td><td>{{ $laporan->statusTelkom?->project?->uraian_pekerjaan }}</td></tr>
            <tr><td>ID Status Telkom</td><td>{{ $laporan->statusTelkom?->id_status_telkom }}</td></tr>
            <tr><td>Project (Mitra)</td><td>{{ $laporan->statusMitra?->project?->id_project }}</td></tr>
            <tr><td>Bulan Order</td><td>{{ $laporan->statusMitra?->bulan_order }}</td></tr>
            <tr><td>No SP Mitra</td><td>{{ $laporan->statusMitra?->no_sp_mitra }}</td></tr>
            <tr><td>No PO Mitra</td><td>{{ $laporan->statusMitra?->no_po_mitra }}</td></tr>
            <tr><td>ID PR</td><td>{{ $laporan->statusMitra?->id_pr }}</td></tr>
            <tr><td>ID GR</td><td>{{ $laporan->statusMitra?->id_gr }}</td></tr>
            <tr><td>TOC Mitra</td><td>{{ $laporan->statusMitra?->toc_mitra }}</td></tr>
            <tr><td>Material Mitra</td><td>{{ $laporan->statusMitra?->material_mitra }}</td></tr>
            <tr><td>Jasa Mitra</td><td>{{ $laporan->statusMitra?->jasa_mitra }}</td></tr>
            <tr><td>Nilai SP Mitra</td><td>{{ $laporan->statusMitra?->nilai_sp_mitra }}</td></tr>
            <tr><td>Rekon Material Mitra</td><td>{{ $laporan->statusMitra?->rekon_material_mitra }}</td></tr>
            <tr><td>Rekon Jasa Mitra</td><td>{{ $laporan->statusMitra?->rekon_jasa_mitra }}</td></tr>
            <tr><td>Nilai Rekon Mitra</td><td>{{ $laporan->statusMitra?->nilai_rekon_mitra }}</td></tr>
            <tr><td>Status Pekerjaan</td><td>{{ $laporan->statusMitra?->statusPekerjaan?->status_pekerjaan }}</td></tr>
            <tr><td>Status Rekon Mitra</td><td>{{ $laporan->statusMitra?->statusRekonMitra?->status_rekon_mitra }}</td></tr>
            <tr><td>Status Tagihan Mitra</td><td>{{ $laporan->statusMitra?->statusTagihanMitra?->status_tagihan_mitra }}</td></tr>
            <tr><td>Keterangan Status Tagihan Mitra</td><td>{{ $laporan->statusMitra?->ketStatusTagihanMitra?->ket_status_tagihan_mitra }}</td></tr>
            <tr><td>Project (Telkom)</td><td>{{ $laporan->statusTelkom?->project?->id_project }}</td></tr>
            <tr><td>Bulan Order Telkom</td><td>{{ $laporan->statusTelkom?->bulan_order_telkom }}</td></tr>
            <tr><td>Target BAST</td><td>{{ $laporan->statusTelkom?->target_bast }}</td></tr>
            <tr><td>Target Bulan BAST</td><td>{{ $laporan->statusTelkom?->target_bulan_bast }}</td></tr>
            <tr><td>No SP Telkom</td><td>{{ $laporan->statusTelkom?->no_sp_telkom }}</td></tr>
            <tr><td>Material Telkom</td><td>{{ $laporan->statusTelkom?->material_telkom }}</td></tr>
            <tr><td>Jasa Telkom</td><td>{{ $laporan->statusTelkom?->jasa_telkom }}</td></tr>
            <tr><td>Nilai SP Telkom</td><td>{{ $laporan->statusTelkom?->nilai_sp_telkom }}</td></tr>
            <tr><td>Rekon Material Telkom</td><td>{{ $laporan->statusTelkom?->rekon_material_telkom }}</td></tr>
            <tr><td>Rekon Jasa Telkom</td><td>{{ $laporan->statusTelkom?->rekon_jasa_telkom }}</td></tr>
            <tr><td>Nilai Rekon Telkom</td><td>{{ $laporan->statusTelkom?->nilai_rekon_telkom }}</td></tr>
            <tr><td>Gap Selisih</td><td>{{ $laporan->statusTelkom?->gap_selisih }}</td></tr>
            <tr><td>No BAST Telkom</td><td>{{ $laporan->statusTelkom?->no_bast_telkom }}</td></tr>
            <tr><td>Bulan BAST Telkom</td><td>{{ $laporan->statusTelkom?->bulan_bast_telkom }}</td></tr>
            <tr><td>Status PO</td><td>{{ $laporan->statusTelkom?->statusPo?->status_po }}</td></tr>
            <tr><td>Status Rekon Telkom</td><td>{{ $laporan->statusTelkom?->statusRekonTelkom?->status_rekon_telkom }}</td></tr>
            <tr><td>Status BAST Telkom</td><td>{{ $laporan->statusTelkom?->statusBastTelkom?->status_bast_telkom }}</td></tr>
            <tr><td>Keterangan</td><td>{{ $laporan->keterangan }}</td></tr>
        </tbody>
    </table>
</body>
</html>
