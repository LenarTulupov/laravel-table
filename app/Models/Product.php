<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'price_new',
        'price_old',
        'quantity',
        'category_id',
        'added_to_favorite',
        'added_to_cart',
        'available'
    ];

    public $timestamps = true;

    public function categories() {
        return $this->belongsToMany(Category::class, 'categories_merge');
    }

    public function productColors() {
        return $this->hasMany(ProductColor::class);
    }

    public function productSizes() {
        return $this->hasMany(ProductSize::class);
    }

    public function colors() {
        return $this->belongsToMany(Color::class);
    }

    public function sizes() {
        return $this->belongsToMany(Size::class, 'product_sizes');
    }

    public function ratings() {
        return $this->hasMany(Rating::class);
    }

    public function comments() {
        return $this->hasMany(Comment::class);
    }

    public function getAverageRating() {
        $average = $this->ratings()->avg('rating');
        return $average ?: 0;
    }
}
