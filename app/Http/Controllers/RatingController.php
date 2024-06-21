<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rating;

class RatingController extends Controller
{
    public function store(Request $request) {
        $rating = Rating::create($request->all());
        return response()->json($rating, 201);
    }

    public function index($productId) {
        $ratings = Rating::where('product_id', $productId)->get();
        return response()->json($ratings);
    }
}
