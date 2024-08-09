<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Product;
use Carbon\Carbon;

class UpdateProductTimestamps extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:update-product-timestamps';
    

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update null updated_at timestamps for products';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $updatedRows = Product::whereNull('updated_at')->update(['updated_at' => Carbon::now()]);
        $this->info("Updated {$updatedRows} products with current timestamp.");
    }
}
