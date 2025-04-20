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

}
