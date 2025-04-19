<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StatusMitra;
use Inertia\Inertia;

class StatusMitraController extends Controller
{
    public function index()
    {
        $statusMitra = StatusMitra::with([
            'project',
            'statusPekerjaan',
            'statusRekonMitra',
            'statusTagihanMitra',
            'ketStatusTagihanMitra'
        ])->paginate(10);
    
        return Inertia::render('StatusMitra/List', [
            'statusMitra' => $statusMitra
        ]);
    }
}
