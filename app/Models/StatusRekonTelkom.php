<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusRekonTelkom extends Model
{
    use HasFactory;

    protected $table = 'status_rekon_telkom';

    protected $fillable = [
        'status_rekon_telkom'
    ];
}
