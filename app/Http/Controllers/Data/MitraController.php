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
        ]);
    }

    public function store(StoreRequest $request)
    {
        $mitra = Mitra::create([
            'nama_mitra'=>$request->nama_mitra,
            'tipe_kemitraan'=>$request->tipe_kemitraan,
            'gl_account'=>$request->gl_account,
            'no_kontrak'=>$request->no_kontrak,
        ]);

        return redirect()->route('mitra.index');
    }

    public function update(UpdateRequest $request, Mitra $mitra)
    {
        $mitra->update([
            'nama_mitra'=>$request->nama_mitra,
            'tipe_kemitraan'=>$request->tipe_kemitraan,
            'gl_account'=>$request->gl_account,
            'no_kontrak'=>$request->no_kontrak,
        ]);

        return redirect()->route('mitra.index');
    }

    public function destroy(Mitra $mitra)
    {
        $mitra->delete();

        return Redirect::route('mitra.index')->with('message', 'Data berhasil dihapus');
    }

    public function search(Request $request)
    {
        $query = Mitra::query();

        if ($request->has('keyword') && $request->keyword != '') {
            $keyword = $request->keyword;
            $query->where(function ($q) use ($keyword) {
                $q->where('nama_mitra', 'like', '%' . $keyword . '%')
                ->orWhere('tipe_kemitraan', 'like', '%' . $keyword . '%')
                ->orWhere('no_kontrak', 'like', '%' . $keyword . '%')
                ->orWhere('gl_account', 'like', '%' . $keyword . '%');
            });
        }

        $filteredMitra = $query->paginate(10)->appends(['keyword' => $request->keyword]);

        return Inertia::render('Data/Mitra/List', [
            'Mitra' => $filteredMitra,
            'filters' => [
                'keyword' => $request->keyword,
            ],
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
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
