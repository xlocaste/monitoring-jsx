<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pic extends Model
{
    use HasFactory;

    protected $table = 'pic';

    protected $fillable = [
        'pic_admin',
        'pic_project',
        'waspang_ta',
    ];
    
    public function project()
    {
        return $this->hasMany(Project::class);
    }
}
