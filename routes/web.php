<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get( 'dashboard', [DashboardController::class, 'index'])->name('dashboard')
    ->middleware(['auth']);

Route::get('testing', fn() => Inertia::render('Testing')); # fungsi dari inertia render adlh utk merender sebuah view atau halaman menggunakan InertiaJS, Inertia ini adlh library yg memungkinkan laravel berfungi sbg SPA tanpa menggunakan API. Kemudian ketika kita menggunakan INertia render ini hanya componen tyg berada didlm folder Pages aj yg dirender, kalo diluar itu pasti tdk bisa pasti bisa error

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
