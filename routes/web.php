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
    return Inertia::render('NotFound/Index');
});

Route::get('/register', [RegisterController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [RegisterController::class, 'register']);

Route::get('/signin', [SignInController::class, 'showLoginForm'])->name('signin');
Route::post('/signin', [SignInController::class, 'signin']);
Route::post('logout', [SignInController::class, 'logout'])->name('logout');

Route::get('/profile', function() {
    return Inertia::render('Profile/Index');
})->name('profile');

// Nav
Route::get('/all', function() {
    return Inertia::render('All/Index');
});
Route::get('/dresses', function() {
    return Inertia::render('Dresses/Index');
});
Route::get('/new', function() {
    return Inertia::render('New/Index');
});
Route::get('/summer', function() {
    return Inertia::render('Summer/Index');
});
Route::get('/trends', function() {
    return Inertia::render('Trends/Index');
});
Route::get('/add', function() {
    return Inertia::render('AddNewProduct/AddNewProduct');
});

require __DIR__.'/auth.php';
