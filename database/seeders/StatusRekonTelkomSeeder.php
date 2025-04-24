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
            ['status_rekon_telkom' => 'DROP'],
            ['status_rekon_telkom' => 'Instalasi'],
            ['status_rekon_telkom' => 'Belum Rekon'],
            ['status_rekon_telkom' => 'Done Rekon'],
        ]);
    }
}
