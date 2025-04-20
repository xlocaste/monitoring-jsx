<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusBastTelkomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('status_bast_telkom')->insert([
            ['status_bast_telkom' => 'BAST Berhasil'],
            ['status_bast_telkom' => 'BAST Gagal'],
            ['status_bast_telkom' => 'BAST Menunggu'],
        ]);
    }
}
