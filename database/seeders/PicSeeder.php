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
                'pic_admin' => 'Andika Pratama',
                'pic_project' => 'Dewi Lestari',
                'waspang_ta' => 'Rizky Maulana',
            ],
            [
                'pic_admin' => 'Rahmat Hidayat',
                'pic_project' => 'Nadya Aprilia',
                'waspang_ta' => 'Yusuf Pratama',
            ],
            [
                'pic_admin' => 'Dina Oktaviani',
                'pic_project' => 'Fauzan Malik',
                'waspang_ta' => 'Lutfi Ramadhan',
            ],
        ]);
    }
}
