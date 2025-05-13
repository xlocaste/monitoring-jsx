<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pic')->insert([
            [
                'pic_admin' => 'NURUL HADI',
                'pic_project' => 'MUHAMMAD IRVAN',
                'waspang_ta' => 'ISKANDAR',
            ],
            [
                'pic_admin' => 'JENNY SILFI PRATAMI',
                'pic_project' => 'AGIE HENDRI AFRIZAL',
                'waspang_ta' => 'ROBI SUGIANTO',
            ],
            [
                'pic_admin' => 'JENNY SILFI PRATAMI',
                'pic_project' => 'AGIE HENDRI AFRIZAL',
                'waspang_ta' => 'RAHMAD MAULANA',
            ],
            [
                'pic_admin' => 'JENNY SILFI PRATAMI',
                'pic_project' => 'AGIE HENDRI AFRIZAL',
                'waspang_ta' => 'SYARIF RIFKI FAHROZI',
            ],
        ]);
    }
}
