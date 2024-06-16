<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductSizesController extends Controller
{
    public function index() {
        $productSizes = ProductSize::all();
        return response()->json($productSizes);
    }

    public function store(Request $request) {
        $productSize = ProductSize::create($request->all());
        return response()->json($productSize, 201);
    }
}
