<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusPekerjaanSeeder extends Seeder
{
    public function run()
    {
        DB::table('status_pekerjaan')->insert([
            ['status_pekerjaan' => 'DROP'],
            ['status_pekerjaan' => 'ATP'],
            ['status_pekerjaan' => 'Uji Terima'],
            ['status_pekerjaan' => 'REKON'],
            ['status_pekerjaan' => 'BAST'],
            ['status_pekerjaan' => 'Gelar Kabel'],
            ['status_pekerjaan' => 'Pasang Terminal (FTB/ODC/ODP)'],
            ['status_pekerjaan' => 'Terminasi/Penyambungan'],
        ]);
    }
}
