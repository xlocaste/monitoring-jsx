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
        Schema::create('status_mitra', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('project_id');
            $table->integer('id_status_mitra');
            $table->string('bulan_order');
            $table->string('no_sp_mitra');
            $table->string('no_po_mitra');
            $table->string('id_pr');
            $table->string('id_gr');
            $table->string('toc_mitra');
            $table->string('material_mitra');
            $table->string('jasa_mitra');
            $table->string('nilai_sp_mitra');
            $table->string('rekon_material_mitra');
            $table->string('rekon_jasa_mitra');
            $table->string('nilai_rekon_mitra');
            $table->unsignedBigInteger('status_pekerjaan_id');
            $table->unsignedBigInteger('status_rekon_mitra_id');
            $table->unsignedBigInteger('status_tagihan_mitra_id');
            $table->unsignedBigInteger('ket_status_tagihan_mitra_id');
            $table->timestamps();

            $table->foreign('project_id')->references('id')->on('project');
            $table->foreign('status_pekerjaan_id')->references('id')->on('status_pekerjaan');
            $table->foreign('status_rekon_mitra_id')->references('id')->on('status_rekon_mitra');
            $table->foreign('status_tagihan_mitra_id')->references('id')->on('status_tagihan_mitra');
            $table->foreign('ket_status_tagihan_mitra_id')->references('id')->on('ket_status_tagihan_mitra');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('status_mitra');
    }
};
