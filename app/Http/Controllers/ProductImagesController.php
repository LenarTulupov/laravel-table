<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductImagesController extends Controller
{
    public function index() {
        $productImages = ProductImage::all();
        return response()->json($productImages);
    }

    public function store(Request $request) {
        $productImage = ProductImage::create($request->all());
        return response()->json($productImage, 201);
    }
}
