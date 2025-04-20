<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laporan extends Model
{
    use HasFactory;

    protected $table = 'laporan';

    protected $fillable = [
        'status_telkom_id',
        'status_mitra_id',
        'keterangan',
    ];

    public function statusTelkom()
    {
        return $this->belongsTo(statusTelkom::class, 'status_telkom_id');
    }

    public function statusMitra()
    {
        return $this->belongsTo(StatusMitra::class, 'status_mitra_id');
    }
}
