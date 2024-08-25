<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with([
            'categories',
            'productColors.color',
            'productColors.productColorImages',
            'sizes',
            'ratings',
        ])
        ->get()
        ->map(function ($product) {
            $product->average_rating = $product->getAverageRating(); 
            return $product;
        });

        return response()->json($products);
    }

    public function show($id)
    {
        try {
            $product = Product::with([
                'categories',
                'productColors.color',
                'productColors.productColorImages',
                'sizes',
                'ratings',
                'comments.replies',
            ])->findOrFail($id);

            $product->average_rating = $product->getAverageRating();
            
            return response()->json($product);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
}
