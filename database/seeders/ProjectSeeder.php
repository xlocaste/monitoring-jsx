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
                'tematik_id' => 4,
                'sto_id' => 16,
                'id_project' => 'MTR-100/2023' . Str::random(5),
                'id_sap' => '23KT32R638-0001' . Str::random(5),
                'tahun' => 2023,
                'bulan' => 'Oktober',
                'lokasi_wo_lop' => 'MTEL-XL-PTK-2023-DF001 WO#38 Pontianak',
                'uraian_pekerjaan' => 'Pengadaan Penarikan Dan Pemasangan OSP FO MTEL WO#38 WO#39 Pontianak WITEL KALBAR',
            ],
            [
                'pic_id' => 2,
                'mitra_id' => 2,
                'tematik_id' => 1,
                'sto_id' => 32,
                'id_project' => 'W44-55/2023' . Str::random(5),
                'id_sap' => '23KT08R638-0026' . Str::random(5),
                'tahun' => 2023,
                'bulan' => 'Oktober',
                'lokasi_wo_lop' => 'PT2P-STG-FU-RUMAH BUPATI',
                'uraian_pekerjaan' => 'Pengadaan Penarikan Dan Pemasangan OSP FO HEM RUMAH BUPATI & REPAIR PT JAYA CM (BAI)  WITEL KALBAR',
            ],
            [
                'pic_id' => 3,
                'mitra_id' => 2,
                'tematik_id' => 1,
                'sto_id' => 32,
                'id_project' => 'W44-57/2023' . Str::random(5),
                'id_sap' => '23KT08R638-0024' . Str::random(5),
                'tahun' => 2023,
                'bulan' => 'Oktober',
                'lokasi_wo_lop' => 'REPAIR PT JAYA CM (BAI)',
                'uraian_pekerjaan' => 'Pengadaan Penarikan Dan Pemasangan OSP FO HEM RUMAH BUPATI & REPAIR PT JAYA CM (BAI)  WITEL KALBAR',
            ],
            [
                'pic_id' => 4,
                'mitra_id' => 3,
                'tematik_id' => 1,
                'sto_id' => 15,
                'id_project' => 'W44-65/2023' . Str::random(5),
                'id_sap' => '23KT08R638-0034' . Str::random(5),
                'tahun' => 2023,
                'bulan' => 'Oktober',
                'lokasi_wo_lop' => 'HEM223-PMK-FE-PELABUHAN SINTETE',
                'uraian_pekerjaan' => 'Pengadaan Penarikan Dan Pemasangan OSP FO HEM FIF SEKURA, AVIA AVIAN DAN PELABUHAN SINTETE WITEL KALBAR',
            ],
        ]);
    }
}
