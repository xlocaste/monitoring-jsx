<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusRekonMitraSeeder extends Seeder
{
    public function run()
    {
        DB::table('status_rekon_mitra')->insert([
            ['status_rekon_mitra' => 'Rekon Berhasil'],
            ['status_rekon_mitra' => 'Rekon Gagal'],
            ['status_rekon_mitra' => 'Rekon Menunggu'],
        ]);
    }
}
