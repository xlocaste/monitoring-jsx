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
                'status_rekon_telkom_id' => 1,
                'status_bast_telkom_id' => 1,
                'id_status_telkom' => 'STK-001',
                'bulan_order_telkom' => '2024-05',
                'target_bast' => '2024-07-01',
                'target_bulan_bast' => '2024-07',
                'no_sp_telkom' => 1234,
                'material_telkom' => '6500000',
                'jasa_telkom' => '7000000',
                'nilai_sp_telkom' => 13500000,
                'rekon_material_telkom' => '6200000',
                'rekon_jasa_telkom' => '6900000',
                'nilai_rekon_telkom' => 13100000,
                'gap_selisih' => 400000,
                'no_bast_telkom' => 5678,
                'bulan_bast_telkom' => '2024-08',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'project_id' => 2,
                'status_po_id' => 2,
                'status_rekon_telkom_id' => 2,
                'status_bast_telkom_id' => 2,
                'id_status_telkom' => 'STK-002',
                'bulan_order_telkom' => '2024-04',
                'target_bast' => '2024-06-15',
                'target_bulan_bast' => '2024-06',
                'no_sp_telkom' => 5678,
                'material_telkom' => '5500000',
                'jasa_telkom' => '6300000',
                'nilai_sp_telkom' => 11800000,
                'rekon_material_telkom' => '5300000',
                'rekon_jasa_telkom' => '6200000',
                'nilai_rekon_telkom' => 11500000,
                'gap_selisih' => 300000,
                'no_bast_telkom' => 8765,
                'bulan_bast_telkom' => '2024-07',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'project_id' => 3,
                'status_po_id' => 1,
                'status_rekon_telkom_id' => 3,
                'status_bast_telkom_id' => 3,
                'id_status_telkom' => 'STK-003',
                'bulan_order_telkom' => '2025-01',
                'target_bast' => '2025-03-20',
                'target_bulan_bast' => '2025-03',
                'no_sp_telkom' => 9101,
                'material_telkom' => '7000000',
                'jasa_telkom' => '8000000',
                'nilai_sp_telkom' => 15000000,
                'rekon_material_telkom' => '6800000',
                'rekon_jasa_telkom' => '7900000',
                'nilai_rekon_telkom' => 14700000,
                'gap_selisih' => 300000,
                'no_bast_telkom' => 1011,
                'bulan_bast_telkom' => '2025-04',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
