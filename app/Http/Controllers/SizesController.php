<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Size;

class SizesController extends Controller
{
    public function index() {
        $sizes = Size::all();
        return response()->json($sizes);
    }

    public function store(Request $request) {
        $size = Size::create($request->all());
        return response()->json($size, 201);
    }
}
