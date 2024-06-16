<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Color;

class ColorsController extends Controller
{
    public function index() {
        $colors= Color::all();
        return response()->json($colors);
    }

    public function store(Request $request) {
        $color = Color::create($request->all());
        return response()->json($color, 201);
    }
}
