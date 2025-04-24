<?php

namespace App\Http\Controllers\Data;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pic;
use App\Http\Requests\Data\PIC\StoreRequest;
use App\Http\Requests\Data\PIC\UpdateRequest;
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

        return redirect()->route('data.pic.index');
    }

    public function update(UpdateRequest $request, Pic $pic)
    {
        $pic->update([
            'pic_admin'=>$request->pic_admin,
            'pic_project'=>$request->pic_project,
            'waspang_ta'=>$request->waspang_ta,
        ]);

        return redirect()->route('data.pic.index');
    }

    public function destroy(Pic $pic)
    {
        $pic->delete();

        return Redirect::route('data.pic.index')->with('message', 'Data berhasil dihapus');
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
}
