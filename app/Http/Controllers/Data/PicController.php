<?php

namespace App\Http\Controllers\Data;

use App\Http\Controllers\Controller;
use App\Models\Mitra;
use App\Models\Project;
use App\Models\StatusMitra;
use App\Models\StatusTelkom;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Pic;
use App\Http\Requests\Data\PIC\StoreRequest;
use App\Http\Requests\Data\PIC\UpdateRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PicController extends Controller
{
    public function index()
    {
        $daftarPic = Pic::paginate(10);

        return Inertia::render('Data/Pic/List', [
            'Pic' => $daftarPic,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function search(Request $request)
    {
        $query = Pic::query();

        if ($request->has('keyword') && $request->keyword != '') {
            $keyword = $request->keyword;
            $query->where(function ($q) use ($keyword) {
                $q->where('pic_admin', 'like', '%' . $keyword . '%')
                ->orWhere('pic_project', 'like', '%' . $keyword . '%')
                ->orWhere('waspang_ta', 'like', '%' . $keyword . '%');
            });
        }

        $filteredPic = $query->paginate(10)->appends(['keyword' => $request->keyword]);

        return Inertia::render('Data/Pic/List', [
            'Pic' => $filteredPic,
            'filters' => [
                'keyword' => $request->keyword,
            ],
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function show($picId)
    {
        $pic = Pic::findOrFail($picId);

        return Inertia::render('Data/Pic/Detail', [
            'Pic' => $pic,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function store(StoreRequest $request)
    {
        $pic = Pic::create([
            'pic_admin'=>$request->pic_admin,
            'pic_project'=>$request->pic_project,
            'waspang_ta'=>$request->waspang_ta,
        ]);

        return redirect()->route('pic.index');
    }

    public function update(UpdateRequest $request, Pic $pic)
    {
        $pic->update([
            'pic_admin'=>$request->pic_admin,
            'pic_project'=>$request->pic_project,
            'waspang_ta'=>$request->waspang_ta,
        ]);

        return redirect()->route('pic.index');
    }

    public function destroy(Pic $pic)
    {
        $pic->delete();

        return Redirect::route('pic.index')->with('message', 'Data berhasil dihapus');
    }

    public function edit(Pic $pic)
    {
        return Inertia::render('Data/Pic/Update', [
            'pic' => $pic
        ]);
    }

    public function create()
    {
        return Inertia::render('Data/Pic/Add');
    }

    public function dashboard()
    {
        $nilaiPerMitra = DB::table('status_telkom')
            ->join('project', 'status_telkom.project_id', '=', 'project.id')
            ->join('mitra', 'project.mitra_id', '=', 'mitra.id')
            ->select(
                'mitra.nama_mitra as mitra',
                DB::raw('SUM(nilai_sp_telkom) as nilai_sp_telkom'),
                DB::raw('SUM(nilai_rekon_telkom) as nilai_rekon_telkom'),
                DB::raw('SUM(gap_selisih) as gap_selisih')
            )
            ->groupBy('mitra.id', 'mitra.nama_mitra')
            ->orderByDesc(DB::raw('SUM(nilai_sp_telkom)'))
            ->limit(5)
            ->get();

        return Inertia::render('Dashboard', [
            'auth' => [
                'user' => auth()->user()
            ],
            'nilaiPerMitra' => $nilaiPerMitra,
            'totalPic' => Pic::count(),
            'totalMitra' => Mitra::count(),
            'totalProject' => Project::count(),
            'totalStatusMitra' => StatusMitra::count(),
            'totalStatusTelkom' => StatusTelkom::count(),
        ]);
    }
}
