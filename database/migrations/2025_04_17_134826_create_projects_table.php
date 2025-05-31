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
        Schema::create('project', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pic_id');
            $table->unsignedBigInteger('mitra_id');
            $table->unsignedBigInteger('tematik_id');
            $table->unsignedBigInteger('sto_id');
            $table->string('id_project');
            $table->string('id_sap');
            $table->year('tahun');
            $table->string('bulan');
            $table->string('lokasi_wo_lop');
            $table->string('uraian_pekerjaan');
            $table->timestamps();

            $table->foreign('mitra_id')->references('id')->on('mitra');
            $table->foreign('tematik_id')->references('id')->on('tematik');
            $table->foreign('sto_id')->references('id')->on('sto');
            $table->foreign('pic_id')->references('id')->on('pic');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project');
    }
};
