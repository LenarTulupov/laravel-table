<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index() {
        $products = Product::with(['productColors.color', 'productColors.productColorImages', 'sizes', 'ratings'])
            ->get()
            ->map(function ($product) {
                $product->average_rating = $product->average_rating;
                return $product;
            });
        return response()->json($products);
    }

    public function store(Request $request) {
        $product = Product::create($request->all());
        return response()->json($product, 201);
    }

    public function show($id) {
        try {
            $product = Product::with(['productColors.color', 'productColors.productColorImages', 'sizes', 'ratings', 'comments.replies'])->findOrFail($id);
            $product->average_rating = $product->average_rating;
            return response()->json($product);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
}
