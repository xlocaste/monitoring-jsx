<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MitraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('mitra')->insert([
            [
                'nama_mitra' => 'PT. UPAYA TEHNIK',
                'tipe_kemitraan' => 'MATERIAL SELECTED, JASA ONLY',
                'gl_account' => '51367035/51367038'
            ],
            [
                'nama_mitra' => 'PT. RAIH BINTANG',
                'tipe_kemitraan' => 'MATERIAL SELECTED, JASA ONLY',
                'gl_account' => '51367035/51367036'
            ],
            [
                'nama_mitra' => 'PT. AIRMAS TANJUNG',
                'tipe_kemitraan' => 'JASA ONLY',
                'gl_account' => '51367036'
            ],
        ]);
    }
}
