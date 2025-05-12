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
                'nama_mitra' => 'PT. Sumber Karya',
                'tipe_kemitraan' => 'Vendor',
                'gl_account' => 'Andi Setiawan'
            ],
            [
                'nama_mitra' => 'CV. Maju Terus',
                'tipe_kemitraan' => 'Subkon',
                'gl_account' => 'Dewi Lestari'
            ],
            [
                'nama_mitra' => 'PT. Teknologi Cerdas',
                'tipe_kemitraan' => 'Konsultan',
                'gl_account' => 'Budi Santoso'
            ],
        ]);
    }
}
