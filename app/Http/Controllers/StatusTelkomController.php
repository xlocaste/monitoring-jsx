<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StatusTelkom;
use App\Models\Project;
use App\Models\StatusPo;
use App\Models\StatusRekonTelkom;
use App\Models\StatusRekonMitra;
use App\Models\StatusBastTelkom;
use App\Http\Requests\StatusTelkom\StoreRequest;
use App\Http\Requests\StatusTelkom\UpdateRequest;
use Inertia\Inertia;

class StatusTelkomController extends Controller
{
    public function index()
    {
        $daftarStatusTelkom = StatusTelkom::with([
            'project',
            'statusPo',
            'statusRekonTelkom',
            'statusRekonMitra',
            'statusBastTelkom'
        ])->paginate(10);

        return inertia('StatusTelkom/List', [
            'statusTelkom' => $daftarStatusTelkom,
        ]);
    }

    public function store(StoreRequest $request)
    {
        $statusTelkom = StatusTelkom::create([
            'project_id' => $request->project_id,
            'status_po_id' => $request->status_po_id,
            'status_rekon_telkom_id' => $request->status_rekon_telkom_id,
            'status_rekon_mitra_id' => $request->status_rekon_mitra_id,
            'status_bast_telkom_id' => $request->status_bast_telkom_id,
            'bulan_order_telkom' => $request->bulan_order_telkom,
            'target_bast' => $request->target_bast,
            'target_bulan_bast' => $request->target_bulan_bast,
            'no_sp_telkom' => $request->no_sp_telkom,
            'material_telkom' => $request->material_telkom,
            'jasa_telkom' => $request->jasa_telkom,
            'nilai_sp_telkom' => $request->nilai_sp_telkom,
            'rekon_material_telkom' => $request->rekon_material_telkom,
            'rekon_jasa_telkom' => $request->rekon_jasa_telkom,
            'nilai_rekon_telkom' => $request->nilai_rekon_telkom,
            'gap_selisih' => $request->gap_selisih,
            'no_bast_telkom' => $request->no_bast_telkom,
            'bulan_bast_telkom' => $request->bulan_bast_telkom,
        ]);

        return redirect()->route('status-telkom.index');
    }

    public function update(UpdateRequest $request, StatusTelkom $statusTelkom)
    {
        $statusTelkom->update([
            'project_id' => $request->project_id,
            'status_po_id' => $request->status_po_id,
            'status_rekon_telkom_id' => $request->status_rekon_telkom_id,
            'status_rekon_mitra_id' => $request->status_rekon_mitra_id,
            'status_bast_telkom_id' => $request->status_bast_telkom_id,
            'bulan_order_telkom' => $request->bulan_order_telkom,
            'target_bast' => $request->target_bast,
            'target_bulan_bast' => $request->target_bulan_bast,
            'no_sp_telkom' => $request->no_sp_telkom,
            'material_telkom' => $request->material_telkom,
            'jasa_telkom' => $request->jasa_telkom,
            'nilai_sp_telkom' => $request->nilai_sp_telkom,
            'rekon_material_telkom' => $request->rekon_material_telkom,
            'rekon_jasa_telkom' => $request->rekon_jasa_telkom,
            'nilai_rekon_telkom' => $request->nilai_rekon_telkom,
            'gap_selisih' => $request->gap_selisih,
            'no_bast_telkom' => $request->no_bast_telkom,
            'bulan_bast_telkom' => $request->bulan_bast_telkom,
        ]);

        return redirect()->route('status-telkom.index');
    }

    public function destroy(StatusTelkom $statusTelkom)
    {
        $statusTelkom->delete();

        return Redirect::route('status-telkom.index')->with('message', 'Data berhasil dihapus');
    }

    public function edit(StatusTelkom $statusTelkom)
    {
        return Inertia::render('StatusTelkom/Update', [
            'statusTelkom' => $statusTelkom,
            'Projects' => Project::all(['id', 'id_sap']),
            'StatusPo' => StatusPo::all(['id', 'status_po']),
            'StatusRekonTelkom' => StatusRekonTelkom::all(['id', 'status_rekon_telkom']),
            'StatusRekonMitra' => StatusRekonMitra::all(['id', 'status_rekon_mitra']),
            'StatusBastTelkom' => StatusBastTelkom::all(['id', 'status_bast_telkom']),
        ]);
    }

    public function create()
    {
        return Inertia::render('StatusTelkom/Add', [
            'Projects' => Project::all(['id', 'id_sap']),
            'StatusPo' => StatusPo::all(['id', 'status_po']),
            'StatusRekonTelkom' => StatusRekonTelkom::all(['id', 'status_rekon_telkom']),
            'StatusRekonMitra' => StatusRekonMitra::all(['id', 'status_rekon_mitra']),
            'StatusBastTelkom' => StatusBastTelkom::all(['id', 'status_bast_telkom']),
        ]);
    }
}
