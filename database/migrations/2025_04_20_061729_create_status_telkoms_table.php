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
        Schema::create('status_telkom', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('project_id');
            $table->unsignedBigInteger('status_po_id');
            $table->unsignedBigInteger('status_rekon_telkom_id');
            $table->unsignedBigInteger('status_bast_telkom_id');
            $table->string('id_status_telkom');
            $table->string('bulan_order_telkom');
            $table->string('target_bast');
            $table->string('target_bulan_bast');
            $table->integer('no_sp_telkom');
            $table->string('material_telkom');
            $table->string('jasa_telkom');
            $table->integer('nilai_sp_telkom');
            $table->string('rekon_material_telkom');
            $table->string('rekon_jasa_telkom');
            $table->integer('nilai_rekon_telkom');
            $table->integer('gap_selisih');
            $table->integer('no_bast_telkom');
            $table->string('bulan_bast_telkom');
            $table->timestamps();

            $table->foreign('project_id')->references('id')->on('project');
            $table->foreign('status_po_id')->references('id')->on('status_po');
            $table->foreign('status_rekon_telkom_id')->references('id')->on('status_rekon_telkom');
            $table->foreign('status_bast_telkom_id')->references('id')->on('status_bast_telkom');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('status_telkom');
    }
};
