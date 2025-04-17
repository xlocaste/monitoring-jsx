<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sto extends Model
{
    use HasFactory;

    protected $table = 'sto';

    protected $fillable = [
        'sto'
    ];

    public function project()
    {
        return $this->hasMany(Project::class);
    }
}
