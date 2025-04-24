<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sto = [
            ['sto' => 'ANJ'],
            ['sto' => 'BDO'],
            ['sto' => 'BIG'],
            ['sto' => 'BKY'],
            ['sto' => 'JAW'],
            ['sto' => 'KALBAR'],
            ['sto' => 'KKU'],
            ['sto' => 'KTP'],
            ['sto' => 'KWN'],
            ['sto' => 'KWU'],
            ['sto' => 'MPW'],
            ['sto' => 'NBA'],
            ['sto' => 'NGG'],
            ['sto' => 'NPN'],
            ['sto' => 'PMK'],
            ['sto' => 'PTK'],
            ['sto' => 'PUT'],
            ['sto' => 'RBA'],
            ['sto' => 'SAG'],
            ['sto' => 'SAO'],
            ['sto' => 'SBS'],
            ['sto' => 'SDN'],
            ['sto' => 'SED'],
            ['sto' => 'SEI'],
            ['sto' => 'SGU'],
            ['sto' => 'SMB'],
            ['sto' => 'SNW'],
            ['sto' => 'SPY'],
            ['sto' => 'SRD'],
            ['sto' => 'SRY'],
            ['sto' => 'STA'],
            ['sto' => 'STG'],
            ['sto' => 'TBA'],
            ['sto' => 'WITEL KALBAR'],
        ];

        DB::table('sto')->insert($sto);
    }
}
