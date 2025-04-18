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
            ['tematik' => 'HEM', 'witel' => 'Witel Pontianak'],
        ];

        DB::table('tematik')->insert($tematik);
    }
}
