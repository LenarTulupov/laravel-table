<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function store(Request $request) {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'name' => 'required|string',
            'email' => 'required|email',
            'comment' => 'required|string',
            'rating' => 'nullable|integer|min:1|max:5',
            'parent_id' => 'nullable|exists:comments,id',
        ]);

        $comment = Comment::create([
            'product_id' => $request->input('product_id'),
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'comment' => $request->input('comment'),
            'rating' => $request->input('rating'),
            'parent_id' => $request->input('parent_id'),
        ]);

        return response()->json($comment, 201);
    }

    public function index($productId) {
        $comments = Comment::where("product_id", $productId)
            ->whereNull('parent_id')
            ->with('replies')
            ->get();

        return response()->json($comments);
    }
}
