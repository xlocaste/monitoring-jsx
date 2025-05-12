<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('project')->insert([
            [
                'pic_id' => 1,
                'mitra_id' => 1,
                'tematik_id' => 1,
                'sto_id' => 1,
                'id_project' => 'PRJ-' . Str::random(5),
                'id_sap' => 'SAP-' . Str::random(5),
                'tahun' => 2024,
                'bulan' => '05',
                'lokasi_wo_lop' => 'Jakarta Selatan',
                'no_kontrak' => 'KTR-' . rand(1000, 9999),
                'uraian_pekerjaan' => 'Pemasangan jaringan fiber optik wilayah Jakarta Selatan',
            ],
            [
                'pic_id' => 2,
                'mitra_id' => 2,
                'tematik_id' => 2,
                'sto_id' => 2,
                'id_project' => 'PRJ-' . Str::random(5),
                'id_sap' => 'SAP-' . Str::random(5),
                'tahun' => 2024,
                'bulan' => '04',
                'lokasi_wo_lop' => 'Bandung Timur',
                'no_kontrak' => 'KTR-' . rand(1000, 9999),
                'uraian_pekerjaan' => 'Upgrade kapasitas OLT STO Bandung Timur',
            ],
            [
                'pic_id' => 3,
                'mitra_id' => 3,
                'tematik_id' => 3,
                'sto_id' => 3,
                'id_project' => 'PRJ-' . Str::random(5),
                'id_sap' => 'SAP-' . Str::random(5),
                'tahun' => 2025,
                'bulan' => '01',
                'lokasi_wo_lop' => 'Surabaya Barat',
                'no_kontrak' => 'KTR-' . rand(1000, 9999),
                'uraian_pekerjaan' => 'Pemeliharaan jaringan core metro ethernet',
            ],
        ]);
    }
}
