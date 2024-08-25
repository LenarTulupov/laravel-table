<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sizes')->insert([
            ['name' => 'xs', 'abbreviation' => 'XS', 'description' => 'Extra Small'],
            ['name' => 's', 'abbreviation' => 'S', 'description' => 'Small'],
            ['name' => 'm', 'abbreviation' => 'M', 'description' => 'Medium'],
            ['name' => 'l', 'abbreviation' => 'L', 'description' => 'Large'],
            ['name' => 'xl', 'abbreviation' => 'XL', 'description' => 'Extra Large'],
            ['name' => 'xxl', 'abbreviation' => 'XXL', 'description' => 'Extra Extra Large'],
        ]);
    }
}
