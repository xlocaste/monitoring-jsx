<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Data\PicController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('/data')->name('data.')->group(function() {
    Route::prefix('/pic')->name('pic.')->group(function() {
        Route::group(['middleware' => ['auth']], function() {
            Route::get('/create', [PicController::class, 'create'])->name('create');
            Route::post('/', [PicController::class, 'store'])->name('store');
            Route::put('/{pic}', [PicController::class, 'update'])->name('update');
            Route::delete('/{pic}', [PicController::class, 'destroy'])->name('destroy');
            Route::get('/{pic}/edit', [PicController::class, 'edit'])->name('edit');
        });
        Route::get('/', [PicController::class, 'index'])->name('index');
    });
});

require __DIR__.'/auth.php';
