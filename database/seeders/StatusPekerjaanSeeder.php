<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusPekerjaanSeeder extends Seeder
{
    public function run()
    {
        DB::table('status_pekerjaan')->insert([
            ['status_pekerjaan' => 'Sedang Dikerjakan'],
            ['status_pekerjaan' => 'Selesai'],
            ['status_pekerjaan' => 'Tertunda'],
            ['status_pekerjaan' => 'Dibatalkan'],
        ]);
    }
}
