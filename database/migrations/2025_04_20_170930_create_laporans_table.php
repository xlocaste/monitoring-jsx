<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('laporan', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('status_telkom_id');
            $table->unsignedBigInteger('status_mitra_id');
            $table->string('keterangan');
            $table->timestamps();

            $table->foreign('status_mitra_id')->references('id')->on('status_mitra');
            $table->foreign('status_telkom_id')->references('id')->on('status_telkom');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('laporan');
    }
};
