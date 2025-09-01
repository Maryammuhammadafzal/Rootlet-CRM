<?php

use App\Http\Controllers\UserProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('messages', function () {
        return Inertia::render('messages');
    })->name('messages');
    Route::get('employees', function () {
        return Inertia::render('employees');
    })->name('employees');
    Route::resource('userProfile', UserProfileController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
