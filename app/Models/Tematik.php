<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tematik extends Model
{
    use HasFactory;

    protected $table = 'tematik';

    protected $fillable = [
        'witel',
        'tematik',
    ];

    public function project()
    {
        return $this->hasMany(Project::class);
    }
}
