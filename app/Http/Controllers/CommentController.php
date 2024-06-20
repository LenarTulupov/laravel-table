<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{

    public function store(Request $request) {

        $request->validate([
            'product_id' => 'required|exists:products,id',
            'user_id' => 'required|exists:user,id',
            'comment' => 'required|string',
            'rating' => 'nullable|integer|min:1|max:5',
            'parent_id' => 'nullable|exists:comments,id',
        ]);

        $comment = Comment::create($request->all());
        return response->json($comment, 201);
    }

    public function index($productId) {
        $comments = Comment::where("product_id", $productId)
        ->whereNull('parent_id')
        ->with('replies')
        ->get();


        return response()->json($comments);
    }
}
