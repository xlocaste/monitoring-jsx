<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusTelkom extends Model
{
    use HasFactory;

    protected $table = 'status_telkom';

    protected $fillable = [
        'project_id',
        'status_po_id',
        'status_rekon_telkom_id',
        'status_rekon_mitra_id',
        'status_bast_telkom_id',
        'bulan_order_telkom',
        'target_bast',
        'target_bulan_bast',
        'no_sp_telkom',
        'material_telkom',
        'jasa_telkom',
        'nilai_sp_telkom',
        'rekon_material_telkom',
        'rekon_jasa_telkom',
        'nilai_rekon_telkom',
        'gap_selisih',
        'no_bast_telkom',
        'bulan_bast_telkom',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id');
    }

    public function statusPo()
    {
        return $this->belongsTo(StatusPo::class, 'status_po_id');
    }

    public function statusRekonTelkom()
    {
        return $this->belongsTo(StatusRekonTelkom::class, 'status_rekon_telkom_id');
    }

    public function statusRekonMitra()
    {
        return $this->belongsTo(StatusRekonMitra::class, 'status_rekon_mitra_id');
    }

    public function statusBastTelkom()
    {
        return $this->belongsTo(StatusBastTelkom::class, 'status_bast_telkom_id');
    }
}
