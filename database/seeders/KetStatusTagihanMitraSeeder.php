<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KetStatusTagihanMitraSeeder extends Seeder
{
    public function run()
    {
        DB::table('ket_status_tagihan_mitra')->insert([
            ['ket_status_tagihan_mitra' => 'Pengajuan PO'],
            ['ket_status_tagihan_mitra' => 'Instalasi'],
            ['ket_status_tagihan_mitra' => 'Pelurusan Material'],
            ['ket_status_tagihan_mitra' => 'Pengecekan BARM'],
            ['ket_status_tagihan_mitra' => 'Progress Tagihan MYTA'],
            ['ket_status_tagihan_mitra' => 'Pemberkasan Tagihan'],
            ['ket_status_tagihan_mitra' => 'Verifikais Darft'],
            ['ket_status_tagihan_mitra' => 'Sudah APM'],
            ['ket_status_tagihan_mitra' => 'CASH & BANK'],
            ['ket_status_tagihan_mitra' => 'Swakelola'],
            ['ket_status_tagihan_mitra' => 'DROP'],
        ]);
    }
}
