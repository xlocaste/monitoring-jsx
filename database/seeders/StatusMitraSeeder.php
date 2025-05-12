<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusMitraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('status_mitra')->insert([
            [
                'project_id' => 1,
                'id_status_mitra' => 101,
                'bulan_order' => '2024-05',
                'no_sp_mitra' => 'SPM-001',
                'no_po_mitra' => 'POM-001',
                'id_pr' => 'PR-001',
                'id_gr' => 'GR-001',
                'toc_mitra' => '12000000',
                'material_mitra' => '5500000',
                'jasa_mitra' => '6500000',
                'nilai_sp_mitra' => '12000000',
                'rekon_material_mitra' => '5300000',
                'rekon_jasa_mitra' => '6400000',
                'nilai_rekon_mitra' => '11700000',
                'status_pekerjaan_id' => 1,
                'status_rekon_mitra_id' => 1,
                'status_tagihan_mitra_id' => 1,
                'ket_status_tagihan_mitra_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'project_id' => 2,
                'id_status_mitra' => 102,
                'bulan_order' => '2024-04',
                'no_sp_mitra' => 'SPM-002',
                'no_po_mitra' => 'POM-002',
                'id_pr' => 'PR-002',
                'id_gr' => 'GR-002',
                'toc_mitra' => '9500000',
                'material_mitra' => '4300000',
                'jasa_mitra' => '5200000',
                'nilai_sp_mitra' => '9500000',
                'rekon_material_mitra' => '4200000',
                'rekon_jasa_mitra' => '5100000',
                'nilai_rekon_mitra' => '9300000',
                'status_pekerjaan_id' => 2,
                'status_rekon_mitra_id' => 2,
                'status_tagihan_mitra_id' => 2,
                'ket_status_tagihan_mitra_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'project_id' => 3,
                'id_status_mitra' => 103,
                'bulan_order' => '2025-01',
                'no_sp_mitra' => 'SPM-003',
                'no_po_mitra' => 'POM-003',
                'id_pr' => 'PR-003',
                'id_gr' => 'GR-003',
                'toc_mitra' => '14000000',
                'material_mitra' => '7000000',
                'jasa_mitra' => '7000000',
                'nilai_sp_mitra' => '14000000',
                'rekon_material_mitra' => '6800000',
                'rekon_jasa_mitra' => '6900000',
                'nilai_rekon_mitra' => '13700000',
                'status_pekerjaan_id' => 3,
                'status_rekon_mitra_id' => 3,
                'status_tagihan_mitra_id' => 3,
                'ket_status_tagihan_mitra_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
