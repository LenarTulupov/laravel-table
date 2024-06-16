<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('subtitle')->nullable();
            $table->string('description', 500)->nullable();
            $table->decimal('price_new', 10, 2)->check('price_new >= 0');
            $table->decimal('price_old', 10, 2)->nullable()->check('price_old >= 0');
            $table->integer('quantity')->nullable()->check('quantity >= 0');
            $table->unsignedBigInteger('category_id');
            $table->boolean('added_to_favorite')->default(false);
            $table->boolean('added_to_cart')->default(false);
            $table->boolean('available')->default(true);
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
