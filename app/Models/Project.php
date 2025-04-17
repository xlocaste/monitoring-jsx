<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'project';

    protected $fillable = [
        'pic_id',
        'mitra_id',
        'tematik_id',
        'sto_id',
        'id_sap',
        'tahun',
        'bulan',
        'lokasi_wo_lop',
        'no_kontrak',
        'uraian_pekerjaan',
    ];

    public function pic()
    {
        return $this->belongsTo(Pic::class);
    }

    public function mitra()
    {
        return $this->belongsTo(Mitra::class);
    }

    public function tematik()
    {
        return $this->belongsTo(Tematik::class);
    }

    public function sto()
    {
        return $this->belongsTo(Sto::class);
    }
}
