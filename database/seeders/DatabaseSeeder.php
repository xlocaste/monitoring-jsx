<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            TematikSeeder::class,
            StoSeeder::class,
            StatusPoSeeder::class,
            StatusBastTelkomSeeder::class,
            StatusRekonTelkomSeeder::class,
            StatusPekerjaanSeeder::class,
            StatusRekonMitraSeeder::class,
            StatusTagihanMitraSeeder::class,
            KetStatusTagihanMitraSeeder::class,
            PicSeeder::class,
            MitraSeeder::class,
            ProjectSeeder::class,
            StatusMitraSeeder::class,
            StatusTelkomSeeder::class,
        ]);
    }
}
