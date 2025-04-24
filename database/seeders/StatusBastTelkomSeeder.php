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
            ['status_bast_telkom' => 'DROP'],
            ['status_bast_telkom' => 'Instalasi'],
            ['status_bast_telkom' => 'Verifikasi Data'],
            ['status_bast_telkom' => 'REKON'],
            ['status_bast_telkom' => 'Waiting PO'],
            ['status_bast_telkom' => 'BAST'],
        ]);
    }
}
