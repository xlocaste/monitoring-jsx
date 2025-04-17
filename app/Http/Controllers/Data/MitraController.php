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

    public function store(StoreRequest $request)
    {
        $mitra = Mitra::create([
            'nama_mitra'=>$request->nama_mitra,
            'tipe_kemitraan'=>$request->tipe_kemitraan,
            'gl_account'=>$request->gl_account,
        ]);

        return redirect()->route('data.mitra.index');
    }

    public function update(UpdateRequest $request, Mitra $mitra)
    {
        $mitra->update([
            'nama_mitra'=>$request->nama_mitra,
            'tipe_kemitraan'=>$request->tipe_kemitraan,
            'gl_account'=>$request->gl_account,
        ]);

        return redirect()->route('data.mitra.index');
    }

    public function edit(Mitra $mitra)
    {
        return Inertia::render('Data/Mitra/Update', [
            'mitra' => $mitra
        ]);
    }

    public function create()
    {
        return Inertia::render('Data/Mitra/Add');
    }
}
