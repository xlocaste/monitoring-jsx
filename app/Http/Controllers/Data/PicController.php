<?php

namespace App\Http\Controllers\Data;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pic;
// use App\Http\Requests\Alumni\Mahasiswa\StoreRequest;
// use App\Http\Requests\Alumni\Mahasiswa\UpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PicController extends Controller
{
    public function index()
    {
        $daftarPic = Pic::all();

        return Inertia::render('Data/Pic/List', [
            'Pic' => $daftarPic,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }
}
