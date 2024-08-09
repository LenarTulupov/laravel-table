<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    $categories = [
               ['name' => 'coats'],
               ['name' => 'jackets'],
               ['name' => 'dresses'],
               ['name' => 'trousers'],
               ['name' => 'summer'],
               ['name' => 'trends'],
               ['name' => 'new'],
               ['name' => 'skirt'],
               ['name' => 'top'],
               ['name' => 't-shirt'],
               ['name' => 'joggers'],
               ['name' => 'blazer']
           ];

           foreach ($categories as $category) {
               DB::table('categories')->updateOrInsert(['name' => $category['name']], $category);
           }
    }
}
