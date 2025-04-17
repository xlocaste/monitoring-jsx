<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusBastTelkom extends Model
{
    use HasFactory;

    protected $table = 'status_bast_telkom';

    protected $fillable = [
        'status_bast_telkom'
    ];
}
