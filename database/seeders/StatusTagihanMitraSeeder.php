<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusTagihanMitraSeeder extends Seeder
{
    public function run()
    {
        DB::table('status_tagihan_mitra')->insert([
            ['status_tagihan_mitra' => 'Cancel'],
            ['status_tagihan_mitra' => 'User'],
            ['status_tagihan_mitra' => 'Mitra'],
            ['status_tagihan_mitra' => 'HO'],
            ['status_tagihan_mitra' => 'Finance'],
        ]);
    }
}
