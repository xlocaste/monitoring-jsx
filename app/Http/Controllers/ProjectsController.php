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

    public function show($projectId)
    {
        $project = Project::with(['pic', 'mitra', 'tematik', 'sto'])->findOrFail($projectId);

        return Inertia::render('Projects/Detail',[
            'projects' => $project,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function store(StoreRequest $request)
    {
        $project = Project::create([
            'pic_id' => $request -> pic_id,
            'mitra_id' => $request -> mitra_id,
            'tematik_id' => $request -> tematik_id,
            'sto_id' => $request -> sto_id,
            'id_project' => $request -> id_project,
            'id_sap' => $request -> id_sap,
            'tahun' => $request -> tahun,
            'bulan' => $request -> bulan,
            'lokasi_wo_lop' => $request -> lokasi_wo_lop,
            'uraian_pekerjaan' => $request -> uraian_pekerjaan,
        ]);

        return redirect()->route('project.index');
    }

    public function update(UpdateRequest $request, Project $project)
    {
        $project->update([
            'pic_id' => $request -> pic_id,
            'mitra_id' => $request -> mitra_id,
            'tematik_id' => $request -> tematik_id,
            'sto_id' => $request -> sto_id,
            'id_project' => $request -> id_project,
            'id_sap' => $request -> id_sap,
            'tahun' => $request -> tahun,
            'bulan' => $request -> bulan,
            'lokasi_wo_lop' => $request -> lokasi_wo_lop,
            'uraian_pekerjaan' => $request -> uraian_pekerjaan,
        ]);

        return redirect()->route('project.index');
    }

    public function destroy(Project $project)
    {
        $project->delete();

        return Redirect::route('project.index')->with('message', 'Data berhasil dihapus');
    }

    public function search(Request $request)
    {
        $query = Project::with(['pic', 'mitra', 'tematik', 'sto']);

        if ($request->has('keyword') && $request->keyword != '') {
            $keyword = $request->keyword;

            $query->where(function ($q) use ($keyword) {
                $q->where('id_project', 'like', '%' . $keyword . '%')
                ->orWhere('id_sap', 'like', '%' . $keyword . '%')
                ->orWhere('tahun', 'like', '%' . $keyword . '%')
                ->orWhere('bulan', 'like', '%' . $keyword . '%')
                ->orWhere('lokasi_wo_lop', 'like', '%' . $keyword . '%')
                ->orWhere('uraian_pekerjaan', 'like', '%' . $keyword . '%');
            });
        }

        $filteredProjects = $query->paginate(10)->appends(['keyword' => $request->keyword]);

        return Inertia::render('Projects/List', [
            'projects' => $filteredProjects,
            'filters' => [
                'keyword' => $request->keyword,
            ],
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function edit(Project $project)
    {
        return Inertia::render('Projects/Update', [
            'project' => $project,
            'Tematik' => Tematik::all(),
            'Sto' => Sto::all(['id', 'sto']),
            'Pic' => Pic::all(),
            'Mitra' => Mitra::all(['id', 'nama_mitra']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Projects/Add', [
        'Tematik' => Tematik::all(),
        'Sto' => Sto::all(['id', 'sto']),
        'Pic' => Pic::all(),
        'Mitra' => Mitra::all(),
        ]);
    }

}
