<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("colors")->insert([
            ["name" => "blue"],
            ["name" => "beige"],
            ["name" => "black"],
            ["name" => "brown"],
            ["name" => "ruby"],
            ["name" => "darkbrown"],
            ["name" => "pink"],
            ["name" => "brightpink"],
            ["name" => "middlebrown"],
            ["name" => "brightbrown"],
            ["name" => "sand"],
            ["name" => "camel"],
            ["name" => "lightblue"],
            ["name" => "green"],
            ["name" => "orange"],
            ["name" => "white"],
            ["name" => "multi"],
            ["name" => "stone"],
            ["name" => "hot-pink"],
            ["name" => "olive"], // 20
            ["name" => "khaki"],
            ["name" => "ecru"],
            ["name" => "gray"],
            ["name" => "cream"],
            ["name" => "mocha"],
            ["name" => "vintage-wash"],
            ["name" => "gingham"],
            ["name" => "lilac"],
            ["name" => "yellow"], // 29
            ["name" => "denim"],
            ["name" => "chocolate"],
            ["name" => "butter"],
            ["name" => "red"],
            ["name" => "taupe"]
        ]);
    }
}
