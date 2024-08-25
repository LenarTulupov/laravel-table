<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

<<<<<<< HEAD
    protected $fillable = ['product_id', 'name', 'email', 'comment', 'parent_id'];
=======
<<<<<<< HEAD
    protected $fillable = ['product_id', 'name', 'email', 'comment', 'parent_id'];
=======
    protected $fillable = ['product_id', 'user_id', 'comment', 'parent_id'];
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a

    public function product() {
        return $this->belongsTo(Product::class);
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    public function user() {
        return $this->belongsTo(User::class);
    }

>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
    public function replies() {
        return $this->hasMany(Comment::class, 'parent_id');
    }

    public function parent() {
        return $this->belongsTo(Comment::class, 'parent_id');
    }
}
