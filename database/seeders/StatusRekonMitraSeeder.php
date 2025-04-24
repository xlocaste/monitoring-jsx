<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusRekonMitraSeeder extends Seeder
{
    public function run()
    {
        DB::table('status_rekon_mitra')->insert([
            ['status_rekon_mitra' => 'DROP'],
            ['status_rekon_mitra' => 'Instalasi'],
            ['status_rekon_mitra' => 'Belum Rekon'],
            ['status_rekon_mitra' => 'Done Rekon'],
        ]);
    }
}
