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
                'id_status_mitra' => 1,
                'bulan_order' => 'Oktober',
                'no_sp_mitra' => '4400019057 /HK.810/TA-370002/02.2023 Tanggal 27 Febuari 2023',
                'no_po_mitra' => '4400019057',
                'id_pr' => '1300081565',
                'id_gr' => '1300081565',
                'toc_mitra' => '27 FEBRUARI 2023 SD 27 APRIL 2023',
                'material_mitra' => '1.723.070',
                'jasa_mitra' => '28.776.230',
                'nilai_sp_mitra' => ' 30.499.300',
                'rekon_material_mitra' => '293.880',
                'rekon_jasa_mitra' => ' 19.057.830',
                'nilai_rekon_mitra' => ' 19.351.710',
                'status_pekerjaan_id' => 1,
                'status_rekon_mitra_id' => 4,
                'status_tagihan_mitra_id' => 5,
                'ket_status_tagihan_mitra_id' => 9,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'project_id' => 2,
                'id_status_mitra' => 2,
                'bulan_order' => 'Oktober',
                'no_sp_mitra' => '4400020127/HK.810/TA-370002/04.2023 Tanggal 06 APRIL 2023',
                'no_po_mitra' => '4400020127',
                'id_pr' => '1300085045',
                'id_gr' => '1300085045',
                'toc_mitra' => '29 Maret 2023 sd 05 Mei 2023',
                'material_mitra' => '32.862.590',
                'jasa_mitra' => '7.448.300',
                'nilai_sp_mitra' => '40.310.890',
                'rekon_material_mitra' => '31.171.670',
                'rekon_jasa_mitra' => '6.930.530',
                'nilai_rekon_mitra' => '38.102.200',
                'status_pekerjaan_id' => 1,
                'status_rekon_mitra_id' => 4,
                'status_tagihan_mitra_id' => 5,
                'ket_status_tagihan_mitra_id' => 9,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'project_id' => 3,
                'id_status_mitra' => 3,
                'bulan_order' => 'Oktober',
                'no_sp_mitra' => '4400020127/HK.810/TA-370002/04.2023 Tanggal 06 APRIL 2023',
                'no_po_mitra' => '4400020127',
                'id_pr' => '1300085045',
                'id_gr' => '1300085045',
                'toc_mitra' => '29 Maret 2023 sd 05 Mei 2023',
                'material_mitra' => '4.443.500',
                'jasa_mitra' => '1.956.820',
                'nilai_sp_mitra' => '6.400.320',
                'rekon_material_mitra' => '4.443.500',
                'rekon_jasa_mitra' => '2.967.620',
                'nilai_rekon_mitra' => '7.411.120',
                'status_pekerjaan_id' => 1,
                'status_rekon_mitra_id' => 4,
                'status_tagihan_mitra_id' => 5,
                'ket_status_tagihan_mitra_id' => 9,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'project_id' => 4,
                'id_status_mitra' => 4,
                'bulan_order' => 'Oktober',
                'no_sp_mitra' => '4200022521 /HK.810/TA-370002/04.2023 Tanggal 12 April 2023',
                'no_po_mitra' => '4200022521',
                'id_pr' => '1300085475',
                'id_gr' => '1300085475',
                'toc_mitra' => '12 April 2023 sd 12 Mei 2023',
                'material_mitra' => '495.030',
                'jasa_mitra' => '495.030',
                'nilai_sp_mitra' => '495.030',
                'rekon_material_mitra' => '495.030',
                'rekon_jasa_mitra' => '495.030',
                'nilai_rekon_mitra' => '495.030',
                'status_pekerjaan_id' => 1,
                'status_rekon_mitra_id' => 1,
                'status_tagihan_mitra_id' => 1,
                'ket_status_tagihan_mitra_id' => 11,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
