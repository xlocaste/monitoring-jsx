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
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class StatusTelkomController extends Controller
{
    public function index()
    {
        $daftarStatusTelkom = StatusTelkom::with([
            'project',
            'statusPo',
            'statusRekonTelkom',
            'statusBastTelkom'
        ])->paginate(10);

        return inertia('StatusTelkom/List', [
            'statusTelkom' => $daftarStatusTelkom,
        ]);
    }

    public function store(StoreRequest $request)
    {
        StatusTelkom::create([
            'project_id' => $request->project_id,
            'status_po_id' => $request->status_po_id,
            'status_rekon_telkom_id' => $request->status_rekon_telkom_id,
            'status_bast_telkom_id' => $request->status_bast_telkom_id,
            'id_status_telkom' => $request->id_status_telkom,
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
            'status_bast_telkom_id' => $request->status_bast_telkom_id,
            'id_status_telkom' => $request->id_status_telkom,
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

        return Redirect::route('status-telkom   .index')->with('message', 'Data berhasil dihapus');
    }

    public function show(StatusTelkom $statusTelkom)
    {
        $statusTelkom->load([
            'project',
            'statusPo',
            'statusRekonTelkom',
            'statusBastTelkom'
        ]);

        return Inertia::render('StatusTelkom/Detail', [
            'statusTelkom' => $statusTelkom
        ]);
    }

    public function search(Request $request)
    {
        $query = StatusTelkom::with(['project', 'statusPo', 'statusRekonTelkom', 'statusBastTelkom']);

        if ($request->has('keyword') && $request->keyword != '') {
            $keyword = $request->keyword;

            $query->where(function ($q) use ($keyword) {
                $q->where('id_status_telkom', 'like', '%' . $keyword . '%')
                ->orWhere('bulan_order_telkom', 'like', '%' . $keyword . '%')
                ->orWhere('target_bast', 'like', '%' . $keyword . '%')
                ->orWhere('target_bulan_bast', 'like', '%' . $keyword . '%')
                ->orWhere('no_sp_telkom', 'like', '%' . $keyword . '%')
                ->orWhere('material_telkom', 'like', '%' . $keyword . '%')
                ->orWhere('jasa_telkom', 'like', '%' . $keyword . '%')
                ->orWhere('nilai_sp_telkom', 'like', '%' . $keyword . '%')
                ->orWhere('rekon_material_telkom', 'like', '%' . $keyword . '%')
                ->orWhere('rekon_jasa_telkom', 'like', '%' . $keyword . '%')
                ->orWhere('nilai_rekon_telkom', 'like', '%' . $keyword . '%')
                ->orWhere('gap_selisih', 'like', '%' . $keyword . '%')
                ->orWhere('no_bast_telkom', 'like', '%' . $keyword . '%')
                ->orWhere('bulan_bast_telkom', 'like', '%' . $keyword . '%')
                ->orWhereHas('project', function ($q2) use ($keyword) {
                    $q2->where('id_project', 'like', '%' . $keyword . '%');
                });
            });
        }

        $filtered = $query->paginate(10)->appends(['keyword' => $request->keyword]);

        return Inertia::render('StatusTelkom/List', [
            'statusTelkom' => $filtered,
            'filters' => [
                'keyword' => $request->keyword,
            ],
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function edit(StatusTelkom $statusTelkom)
    {
        return Inertia::render('StatusTelkom/Update', [
            'statusTelkom' => $statusTelkom,
            'Projects' => Project::all(['id', 'id_project']),
            'StatusPo' => StatusPo::all(['id', 'status_po']),
            'StatusRekonTelkom' => StatusRekonTelkom::all(['id', 'status_rekon_telkom']),
            'StatusBastTelkom' => StatusBastTelkom::all(['id', 'status_bast_telkom']),
        ]);
    }

    public function create()
    {
        return Inertia::render('StatusTelkom/Add', [
            'Projects' => Project::all(['id', 'id_project']),
            'StatusPo' => StatusPo::all(['id', 'status_po']),
            'StatusRekonTelkom' => StatusRekonTelkom::all(['id', 'status_rekon_telkom']),
            'StatusBastTelkom' => StatusBastTelkom::all(['id', 'status_bast_telkom']),
        ]);
    }
}
