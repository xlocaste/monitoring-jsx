<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusTelkomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('status_telkom')->insert([
            [
                'project_id' => 1,
                'status_po_id' => 1,
                'status_rekon_telkom_id' => 4,
                'status_bast_telkom_id' => 1,
                'id_status_telkom' => '1',
                'bulan_order_telkom' => 'Oktober',
                'target_bast' => 'Mei',
                'target_bulan_bast' => 'Mei',
                'no_sp_telkom' => "SP#29 K.TEL.003024/HK.810/TSC-A0000000/2023 Tanggal 7 Juli 2023",
                'material_telkom' => '6500000',
                'jasa_telkom' => '7000000',
                'nilai_sp_telkom' => '13500000',
                'rekon_material_telkom' => '6200000',
                'rekon_jasa_telkom' => '6900000',
                'nilai_rekon_telkom' => '13100000',
                'gap_selisih' => '400000',
                'no_bast_telkom' => 'TEL.1545/LG.310/DID-C0300000/2024',
                'bulan_bast_telkom' => 'Mei',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'project_id' => 2,
                'status_po_id' => 1,
                'status_rekon_telkom_id' => 4,
                'status_bast_telkom_id' => 6,
                'id_status_telkom' => '2',
                'bulan_order_telkom' => 'Oktober',
                'target_bast' => 'Mei',
                'target_bulan_bast' => 'Mei',
                'no_sp_telkom' => 'SP#29 K.TEL.003024/HK.810/TSC-A0000000/2023 Tanggal 7 Juli 2023',
                'material_telkom' => '5500000',
                'jasa_telkom' => '6300000',
                'nilai_sp_telkom' => '11800000',
                'rekon_material_telkom' => '5300000',
                'rekon_jasa_telkom' => '6200000',
                'nilai_rekon_telkom' => '11500000',
                'gap_selisih' => '300000',
                'no_bast_telkom' => 'TEL.1545/LG.310/DID-C0300000/2024',
                'bulan_bast_telkom' => 'Mei',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'project_id' => 3,
                'status_po_id' => 1,
                'status_rekon_telkom_id' => 4,
                'status_bast_telkom_id' => 6,
                'id_status_telkom' => '3',
                'bulan_order_telkom' => 'Oktober',
                'target_bast' => 'Mei',
                'target_bulan_bast' => 'Mei',
                'no_sp_telkom' => 'SP#29 K.TEL.003024/HK.810/TSC-A0000000/2023 Tanggal 7 Juli 2023',
                'material_telkom' => '7000000',
                'jasa_telkom' => '8000000',
                'nilai_sp_telkom' => '15000000',
                'rekon_material_telkom' => '6800000',
                'rekon_jasa_telkom' => '7900000',
                'nilai_rekon_telkom' => '14700000',
                'gap_selisih' => '300000',
                'no_bast_telkom' => 'TEL.1545/LG.310/DID-C0300000/2024',
                'bulan_bast_telkom' => 'Mei',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'project_id' => 4,
                'status_po_id' => 2,
                'status_rekon_telkom_id' => 1,
                'status_bast_telkom_id' => 1,
                'id_status_telkom' => '4',
                'bulan_order_telkom' => 'Oktober',
                'target_bast' => 'Mei',
                'target_bulan_bast' => 'Mei',
                'no_sp_telkom' => 'SP#29 K.TEL.003024/HK.810/TSC-A0000000/2023 Tanggal 7 Juli 2023',
                'material_telkom' => '7000000',
                'jasa_telkom' => '8000000',
                'nilai_sp_telkom' => '15000000',
                'rekon_material_telkom' => '6800000',
                'rekon_jasa_telkom' => '7900000',
                'nilai_rekon_telkom' => '14700000',
                'gap_selisih' => '300000',
                'no_bast_telkom' => 'TEL.1545/LG.310/DID-C0300000/2024',
                'bulan_bast_telkom' => 'Mei',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
