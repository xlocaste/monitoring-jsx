<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Sto;
use App\Models\Tematik;
use App\Models\Pic;
use App\Models\Mitra;
use App\Http\Requests\Projects\StoreRequest;
use App\Http\Requests\Projects\UpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function index()
    {
        $daftarProject = Project::with(['pic', 'mitra', 'tematik', 'sto'])->paginate(10);

        return inertia('Projects/List', [
            'projects' => $daftarProject,
        ]);
    }

    public function store(StoreRequest $request)
    {
        $project = Project::create([

            'pic_id' => $request -> pic_id,
            'mitra_id' => $request -> mitra_id,
            'tematik_id' => $request -> tematik_id,
            'sto_id' => $request -> sto_id,
            'id_sap' => $request -> id_sap,
            'tahun' => $request -> tahun,
            'bulan' => $request -> bulan,
            'lokasi_wo_lop' => $request -> lokasi_wo_lop,
            'no_kontrak' => $request -> no_kontrak,
            'uraian_pekerjaan' => $request -> uraian_pekerjaan,
        ]);

        return redirect()->route('project.index');
    }

    public function create()
    {
        return Inertia::render('Projects/Add', [
        'Tematik' => Tematik::all(['id', 'tematik']),
        'Sto' => Sto::all(['id', 'sto']),
        'Pic' => Pic::all(['id', 'pic_admin']),
        'Mitra' => Mitra::all(['id', 'nama_mitra']),
        ]);
    }
}
