<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Laporan;
use App\Models\StatusTelkom;
use App\Models\StatusMitra;
use App\Http\Requests\Laporan\StoreRequest;
use App\Http\Requests\Laporan\UpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LaporanController extends Controller
{
    public function index()
    {
        $daftarLaporan = Laporan::with('statusTelkom', 'statusMitra')->paginate(10);

        return Inertia::render('Laporan/List', [
            'laporan' => $daftarLaporan,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function store(StoreRequest $request)
    {
        Laporan::create([
            'status_telkom_id'=>$request->status_telkom_id,
            'status_mitra_id'=>$request->status_mitra_id,
            'keterangan'=>$request->keterangan,
        ]);

        return redirect()->route('laporan.index');
    }

    public function create()
    {
        return Inertia::render('Laporan/Add', [
            'StatusTelkom' => StatusTelkom::get(),
            'StatusMitra' => StatusMitra::get(),
        ]);
    }
}
