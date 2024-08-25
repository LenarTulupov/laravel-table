<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoriesController extends Controller
{
    public function index() {
        $categories = Category::all();
        return response()->json($categories);
    }

    public function store(Request $request) {
        $category = Category::create($request->all());
        return response()->json($category, 201);
    }
}
