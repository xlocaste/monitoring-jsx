<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusPo extends Model
{
    use HasFactory;

    protected $table = 'status_po';

    protected $fillable = [
        'status_po'
    ];
}
