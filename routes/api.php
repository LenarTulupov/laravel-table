<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/products', [ProductController::class, 'index']);

Route::get('/products/{id}', [ProductController::class, 'show']);

Route::get('/products/{id}/comments', [CommentController::class, 'index']);

Route::post('/products/{id}/comments', [CommentController::class, 'store']);

Route::post('/products/{id}/ratings', [RatingController::class, 'store']);