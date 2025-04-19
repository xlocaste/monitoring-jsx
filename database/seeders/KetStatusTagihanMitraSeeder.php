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
            ['ket_status_tagihan_mitra' => 'INSTALASI'],
            ['ket_status_tagihan_mitra' => 'SUDAH APM'],
        ]);
    }
}
