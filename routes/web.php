<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\SignInController;

Route::get('/', function () {
    return Inertia::render('Home/Index', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/favorite', function () {
    return Inertia::render('Favorite/Index');
})->name('favorite');

Route::get('/product/{id}', function($id) {
    return Inertia::render('Product/Index', ['productId' => $id]);
});

Route::fallback(function () {
    return Inertia::render('NotFound/NotFound');
});

Route::get('/register', [RegisterController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [RegisterController::class, 'register']);

Route::get('/signin', [SignInController::class, 'showLoginForm'])->name('signin');
Route::post('/signin', [SignInController::class, 'signin']);
Route::post('logout', [SignInController::class, 'logout'])->name('logout');

Route::get('/profile', function() {
    return Inertia::render('Profile/Profile');
})->name('profile');

// Nav
Route::get('/all', function() {
    return Inertia::render('Nav/All/All');
});
Route::get('/dresses', function() {
    return Inertia::render('Nav/Dresses/Dresses');
});
Route::get('/new', function() {
    return Inertia::render('Nav/New/New');
});
Route::get('/summer', function() {
    return Inertia::render('Nav/Summer/Summer');
});
Route::get('/trends', function() {
    return Inertia::render('Nav/Trends/Trends');
});

require __DIR__.'/auth.php';
