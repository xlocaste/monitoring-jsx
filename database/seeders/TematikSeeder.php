<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TematikSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tematik = [
            ['tematik' => 'HEM',                  'witel' => 'Pontianak'],
            ['tematik' => 'Konstruksi Eksternal', 'witel' => 'Pontianak'],
            ['tematik' => 'NODE B',               'witel' => 'Pontianak'],
            ['tematik' => 'NODE B OLO',           'witel' => 'Pontianak'],
            ['tematik' => 'OSP',                  'witel' => 'Pontianak'],
            ['tematik' => 'OSP GRANULAR',         'witel' => 'Pontianak'],
            ['tematik' => 'PT2',                  'witel' => 'Pontianak'],
            ['tematik' => 'QE MTEL',              'witel' => 'Pontianak'],
            ['tematik' => 'QE RECOVERY',          'witel' => 'Pontianak'],
            ['tematik' => 'QE REPOSISI',          'witel' => 'Pontianak'],
            ['tematik' => 'Relokasi Utilitas',    'witel' => 'Pontianak'],
            ['tematik' => 'SDI',                  'witel' => 'Pontianak'],
            ['tematik' => 'TGB',                  'witel' => 'Pontianak'],
        ];

        DB::table('tematik')->insert($tematik);
    }
}
