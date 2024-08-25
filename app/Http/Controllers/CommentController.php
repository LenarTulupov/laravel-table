<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
<<<<<<< HEAD
    public function store(Request $request) {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'name' => 'required|string',
            'email' => 'required|email',
=======

    public function store(Request $request) {

        $request->validate([
            'product_id' => 'required|exists:products,id',
            'user_id' => 'required|exists:user,id', 
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
            'comment' => 'required|string',
            'rating' => 'nullable|integer|min:1|max:5',
            'parent_id' => 'nullable|exists:comments,id',
        ]);

<<<<<<< HEAD
        $comment = Comment::create([
            'product_id' => $request->input('product_id'),
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'comment' => $request->input('comment'),
            'rating' => $request->input('rating'),
            'parent_id' => $request->input('parent_id'),
        ]);

        return response()->json($comment, 201);
=======
        $comment = Comment::create($request->all());
        return response->json($comment, 201);
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
    }

    public function index($productId) {
        $comments = Comment::where("product_id", $productId)
<<<<<<< HEAD
            ->whereNull('parent_id')
            ->with('replies')
            ->get();
=======
        ->whereNull('parent_id')
        ->with('replies')
        ->get();

>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

        return response()->json($comments);
    }
}
