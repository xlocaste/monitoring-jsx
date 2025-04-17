<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KetStatusTagihanMitra extends Model
{
    use HasFactory;

    protected $table = 'ket_status_tagihan_mitra';

    protected $fillable = [
        'ket_status_tagihan_mitra'
    ];
}
