<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StatusMitra;
use App\Models\Project;
use App\Models\StatusPekerjaan;
use App\Models\StatusRekonMitra;
use App\Models\StatusTagihanMitra;
use App\Models\KetStatusTagihanMitra;
use App\Http\Requests\StatusMitra\StoreRequest;
use App\Http\Requests\StatusMitra\UpdateRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Redirect;

class StatusMitraController extends Controller
{
    public function index()
    {
        $daftarStatusMitra = StatusMitra::with([
            'project',
            'statusPekerjaan',
            'statusRekonMitra',
            'statusTagihanMitra',
            'ketStatusTagihanMitra'
        ])->paginate(10);

        return Inertia::render('StatusMitra/List', [
            'statusMitra' => $daftarStatusMitra
        ]);
    }

    public function store(StoreRequest $request)
    {
        $statusMitra = StatusMitra::create([
            'project_id' => $request->project_id,
            'id_status_mitra' => $request->id_status_mitra,
            'bulan_order' => $request->bulan_order,
            'no_sp_mitra' => $request->no_sp_mitra,
            'no_po_mitra' => $request->no_po_mitra,
            'id_pr' => $request->id_pr,
            'id_gr' => $request->id_gr,
            'toc_mitra' => $request->toc_mitra,
            'material_mitra' => $request->material_mitra,
            'jasa_mitra' => $request->jasa_mitra,
            'nilai_sp_mitra' => $request->nilai_sp_mitra,
            'rekon_material_mitra' => $request->rekon_material_mitra,
            'rekon_jasa_mitra' => $request->rekon_jasa_mitra,
            'nilai_rekon_mitra' => $request->nilai_rekon_mitra,
            'status_pekerjaan_id' => $request->status_pekerjaan_id,
            'status_rekon_mitra_id' => $request->status_rekon_mitra_id,
            'status_tagihan_mitra_id' => $request->status_tagihan_mitra_id,
            'ket_status_tagihan_mitra_id' => $request->ket_status_tagihan_mitra_id,
        ]);

        return redirect()->route('status-mitra.index');
    }

    public function Update(UpdateRequest $request, StatusMitra $statusMitra)
    {
        $statusMitra->Update([
            'project_id' => $request->project_id,
            'id_status_mitra' => $request->id_status_mitra,
            'bulan_order' => $request->bulan_order,
            'no_sp_mitra' => $request->no_sp_mitra,
            'no_po_mitra' => $request->no_po_mitra,
            'id_pr' => $request->id_pr,
            'id_gr' => $request->id_gr,
            'toc_mitra' => $request->toc_mitra,
            'material_mitra' => $request->material_mitra,
            'jasa_mitra' => $request->jasa_mitra,
            'nilai_sp_mitra' => $request->nilai_sp_mitra,
            'rekon_material_mitra' => $request->rekon_material_mitra,
            'rekon_jasa_mitra' => $request->rekon_jasa_mitra,
            'nilai_rekon_mitra' => $request->nilai_rekon_mitra,
            'status_pekerjaan_id' => $request->status_pekerjaan_id,
            'status_rekon_mitra_id' => $request->status_rekon_mitra_id,
            'status_tagihan_mitra_id' => $request->status_tagihan_mitra_id,
            'ket_status_tagihan_mitra_id' => $request->ket_status_tagihan_mitra_id,
        ]);

        return redirect()->route('status-mitra.index');
    }

    public function destroy(StatusMitra $statusMitra)
    {
        $statusMitra->delete();

        return Redirect::route('status-mitra.index')->with('message', 'Data berhasil dihapus');
    }

    public function show(StatusMitra $statusMitra)
    {
        $statusMitra->load([
            'project',
            'statusPekerjaan',
            'statusRekonMitra',
            'statusTagihanMitra',
            'ketStatusTagihanMitra'
        ]);

        return Inertia::render('StatusMitra/Detail', [
            'statusMitra' => $statusMitra
        ]);
    }

    public function search(Request $request)
    {
        $query = StatusMitra::with(['project', 'statusPekerjaan', 'statusRekonMitra', 'statusTagihanMitra', 'ketStatusTagihanMitra']);

        if ($request->has('keyword') && $request->keyword != '') {
            $keyword = $request->keyword;

            $query->where(function ($q) use ($keyword) {
                $q->where('id_status_mitra', 'like', '%' . $keyword . '%')
                ->orWhere('bulan_order', 'like', '%' . $keyword . '%')
                ->orWhere('no_sp_mitra', 'like', '%' . $keyword . '%')
                ->orWhere('no_po_mitra', 'like', '%' . $keyword . '%')
                ->orWhere('id_pr', 'like', '%' . $keyword . '%')
                ->orWhere('id_gr', 'like', '%' . $keyword . '%')
                ->orWhere('toc_mitra', 'like', '%' . $keyword . '%')
                ->orWhere('material_mitra', 'like', '%' . $keyword . '%')
                ->orWhere('jasa_mitra', 'like', '%' . $keyword . '%')
                ->orWhere('nilai_sp_mitra', 'like', '%' . $keyword . '%')
                ->orWhere('rekon_material_mitra', 'like', '%' . $keyword . '%')
                ->orWhere('rekon_jasa_mitra', 'like', '%' . $keyword . '%')
                ->orWhere('nilai_rekon_mitra', 'like', '%' . $keyword . '%')
                ->orWhereHas('project', function ($sub) use ($keyword) {
                    $sub->where('id_project', 'like', '%' . $keyword . '%');
                });
            });
        }

        $filtered = $query->paginate(10)->appends(['keyword' => $request->keyword]);

        return Inertia::render('StatusMitra/List', [
            'statusMitra' => $filtered,
            'filters' => [
                'keyword' => $request->keyword,
            ],
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function edit(StatusMitra $statusMitra)
    {
        return Inertia::render('StatusMitra/Update', [
            'statusMitra' => $statusMitra,
            'Projects' => Project::all(['id', 'id_project']),
            'StatusPekerjaan' => StatusPekerjaan::all(['id', 'status_pekerjaan']),
            'StatusRekonMitra' => StatusRekonMitra::all(['id', 'status_rekon_mitra']),
            'StatusTagihanMitra' => StatusTagihanMitra::all(['id', 'status_tagihan_mitra']),
            'KetStatusTagihanMitra' => KetStatusTagihanMitra::all(['id', 'ket_status_tagihan_mitra']),
        ]);
    }

    public function create()
    {
        return Inertia::render('StatusMitra/Add', [
            'Projects' => Project::all(['id', 'id_project']),
            'StatusPekerjaan' => StatusPekerjaan::all(['id', 'status_pekerjaan']),
            'StatusRekonMitra' => StatusRekonMitra::all(['id', 'status_rekon_mitra']),
            'StatusTagihanMitra' => StatusTagihanMitra::all(['id', 'status_tagihan_mitra']),
            'KetStatusTagihanMitra' => KetStatusTagihanMitra::all(['id', 'ket_status_tagihan_mitra']),
        ]);
    }
}
