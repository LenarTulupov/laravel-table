<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductColorsController extends Controller
{
    public function index() {
        $productColors = ProductColor::all();
        return response()->json($productColors);
    }

    public function store(Request $request) {
        $productColor = ProductColor::create($request->all());
        return response()->json($productColor, 201);
    }
}
