<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusRekonTelkomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('status_rekon_telkom')->insert([
            ['status_rekon_telkom' => 'Rekon Telkom Berhasil'],
            ['status_rekon_telkom' => 'Rekon Telkom Gagal'],
            ['status_rekon_telkom' => 'Rekon Telkom Menunggu'],
        ]);
    }
}
