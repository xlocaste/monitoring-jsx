<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusMitra extends Model
{
    use HasFactory;

    protected $table = 'status_mitra';

    protected $fillable = [
        'project_id',
        'id_status_mitra',
        'bulan_order',
        'no_sp_mitra',
        'no_po_mitra',
        'id_pr',
        'id_gr',
        'toc_mitra',
        'material_mitra',
        'jasa_mitra',
        'nilai_sp_mitra',
        'rekon_material_mitra',
        'rekon_jasa_mitra',
        'nilai_rekon_mitra',
        'status_pekerjaan_id',
        'status_rekon_mitra_id',
        'status_tagihan_mitra_id',
        'ket_status_tagihan_mitra_id',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id');
    }

    public function statusPekerjaan()
    {
        return $this->belongsTo(StatusPekerjaan::class, 'status_pekerjaan_id');
    }

    public function statusRekonMitra()
    {
        return $this->belongsTo(StatusRekonMitra::class, 'status_rekon_mitra_id');
    }

    public function statusTagihanMitra()
    {
        return $this->belongsTo(StatusTagihanMitra::class, 'status_tagihan_mitra_id');
    }

    public function ketStatusTagihanMitra()
    {
        return $this->belongsTo(KetStatusTagihanMitra::class, 'ket_status_tagihan_mitra_id');
    }
}
