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
        $daftarLaporan = Laporan::with([
            'statusTelkom.statusBastTelkom',
            'statusTelkom.project.tematik',
            'statusTelkom.statusRekonTelkom',
            'statusMitra.statusTagihanMitra',
            'statusMitra.project.tematik'
        ])->paginate(10);

        return Inertia::render('Laporan/List', [
            'laporan' => $daftarLaporan,
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

    public function update(UpdateRequest $request, Laporan $laporan)
    {
        $laporan->update([
            'status_telkom_id'=>$request->status_telkom_id,
            'status_mitra_id'=>$request->status_mitra_id,
            'keterangan'=>$request->keterangan,
        ]);

        return redirect()->route('laporan.index');
    }

    public function destroy(Laporan $laporan)
    {
        $laporan->delete();

        return Redirect::route('laporan.index')->with('message', 'Data berhasil dihapus');
    }

    public function show(Laporan $laporan)
    {
        $laporan->load([
            'statusMitra.project',
            'statusMitra.statusPekerjaan',
            'statusMitra.statusRekonMitra',
            'statusMitra.statusTagihanMitra',
            'statusMitra.ketStatusTagihanMitra',
            'statusTelkom.project',
            'statusTelkom.statusPo',
            'statusTelkom.statusRekonTelkom',
            'statusTelkom.statusBastTelkom',
            'statusTelkom.project.pic',
            'statusTelkom.project.mitra',
            'statusTelkom.project.sto',
            'statusTelkom.project.tematik',
        ]);

        return Inertia::render('Laporan/Detail', [
            'Laporan' => $laporan
        ]);
    }

    public function edit(Laporan $laporan)
    {
        return Inertia::render('Laporan/Update', [
            'laporan' => $laporan,
            'StatusTelkom' => StatusTelkom::get(),
            'StatusMitra' => StatusMitra::get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Laporan/Add', [
            'StatusTelkom' => StatusTelkom::get(),
            'StatusMitra' => StatusMitra::get(),
        ]);
    }
}
