<?php

namespace App\Http\Controllers\Data;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mitra;
use App\Http\Requests\Data\Mitra\StoreRequest;
use App\Http\Requests\Data\Mitra\UpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MitraController extends Controller
{
    public function index()
    {
        $daftarMitra = Mitra::paginate(10);

        return Inertia::render('Data/Mitra/List', [
            'Mitra' => $daftarMitra,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }
}
