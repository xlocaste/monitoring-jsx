<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusTagihanMitraSeeder extends Seeder
{
    public function run()
    {
        DB::table('status_tagihan_mitra')->insert([
            ['status_tagihan_mitra' => 'Tagihan Dibayar'],
            ['status_tagihan_mitra' => 'Tagihan Belum Dibayar'],
            ['status_tagihan_mitra' => 'Tagihan Menunggu Verifikasi'],
        ]);
    }
}
