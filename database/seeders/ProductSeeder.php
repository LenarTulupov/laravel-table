<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    public function run()
    {
        DB::transaction(function () {
            $product1 = [
                'title' => 'SUPER STRETCH TAPERED TAILORED TROUSER',
                'description' => 'Рабочая одежда не должна быть скучной, и эти рабочие брюки — безопасный выбор стиля. Немного более формальная одежда, эти брюки с высокой талией и зауженные к низу. Выбирайте между пуговицей или молнией, эти элегантные брюки нарядны и остры как бритва, внушая серьезное отношение. Всегда практичный элемент гардероба, наденьте их и готовьтесь произвести впечатление в любом профессиональном сценарии или ситуации.',
                'price_new' => 20.00,
                'price_old' => 25.00,
                'quantity' => 10,
                'category_id' => 4,
            ];

            $product1Id = DB::table('products')->insertGetId($product1);

            $color2 = DB::table('colors')->where('name', 'beige')->first();
            $product1ColorId = DB::table('product_colors')->insertGetId([
                'product_id' => $product1Id,
                'color_id' => $color2->id
            ]);

            DB::table('product_color_images')->insert([
                ['product_color_id' => $product1ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_stone_xl/female-stone-super-stretch-tapered-tailored-trouser/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit'],
                ['product_color_id' => $product1ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_stone_xl_1/female-stone-super-stretch-tapered-tailored-trouser'],
                ['product_color_id' => $product1ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_stone_xl_2/female-stone-super-stretch-tapered-tailored-trouser'],
                ['product_color_id' => $product1ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_stone_xl_3/female-stone-super-stretch-tapered-tailored-trouser']
            ]);

            $sizeIds = DB::table('sizes')->whereIn('name', ['xs', 's', 'm', 'l', 'xl'])->pluck('id');
            foreach ($sizeIds as $sizeId) {
                DB::table('product_sizes')->insert([
                    'product_id' => $product1Id,
                    'size_id' => $sizeId
                ]);
            }

            $product2 = [
                'title' => 'SUPER STRETCH TAPERED TAILORED TROUSER',
                'description' => 'Рабочая одежда не должна быть скучной, и эти рабочие брюки — безопасный выбор стиля. Немного более формальная одежда, эти брюки с высокой талией и зауженные к низу. Выбирайте между пуговицей или молнией, эти элегантные брюки нарядны и остры как бритва, внушая серьезное отношение. Всегда практичный элемент гардероба, наденьте их и готовьтесь произвести впечатление в любом профессиональном сценарии или ситуации.',
                'price_new' => 20.00,
                'price_old' => 25.00,
                'quantity' => 10,
                'category_id' => 4,
            ];

            $product2Id = DB::table('products')->insertGetId($product2);

            $color1 = DB::table('colors')->where('name', 'blue')->first();
            $product2ColorId = DB::table('product_colors')->insertGetId([
                'product_id' => $product2Id,
                'color_id' => $color1->id
            ]);

            DB::table('product_color_images')->insert([
                ['product_color_id' => $product2ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_navy_xl/female-navy-super-stretch-tapered-tailored-trouser/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit'],
                ['product_color_id' => $product2ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_navy_xl_1/female-navy-super-stretch-tapered-tailored-trouser'],
                ['product_color_id' => $product2ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_navy_xl_2/female-navy-super-stretch-tapered-tailored-trouser'],
                ['product_color_id' => $product2ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_navy_xl_3/female-navy-super-stretch-tapered-tailored-trouser']
            ]);

            $sizeIds = DB::table('sizes')->pluck('id');
            foreach ($sizeIds as $sizeId) {
                DB::table('product_sizes')->insert([
                    'product_id' => $product2Id,
                    'size_id' => $sizeId
                ]);
            }

            $product3 = [
                'title' => 'SUPER STRETCH TAPERED TAILORED TROUSER',
                'description' => 'Рабочая одежда не должна быть скучной, и эти рабочие брюки — безопасный выбор стиля. Немного более формальная одежда, эти брюки с высокой талией и зауженные к низу. Выбирайте между пуговицей или молнией, эти элегантные брюки нарядны и остры как бритва, внушая серьезное отношение. Всегда практичный элемент гардероба, наденьте их и готовьтесь произвести впечатление в любом профессиональном сценарии или ситуации.',
                'price_new' => 20.00,
                'price_old' => 25.00,
                'quantity' => 10,
                'category_id' => 4,
            ];

            $product3Id = DB::table('products')->insertGetId($product3);

            $product3ColorId = DB::table('product_colors')->insertGetId([
                'product_id' => $product3Id,
                'color_id' => 3
            ]);

            DB::table('product_color_images')->insert([
                ['product_color_id' => $product3ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_black_xl/female-black-super-stretch-tapered-tailored-trouser/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit'],
                ['product_color_id' => $product3ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_black_xl_1/female-black-super-stretch-tapered-tailored-trouser'],
                ['product_color_id' => $product3ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_black_xl_2/female-black-super-stretch-tapered-tailored-trouser'],
                ['product_color_id' => $product3ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_black_xl_3/female-black-super-stretch-tapered-tailored-trouser']
            ]);

            $sizeIds = DB::table('sizes')->pluck('id');
            foreach ($sizeIds as $sizeId) {
                DB::table('product_sizes')->insert([
                    'product_id' => $product3Id,
                    'size_id' => $sizeId
                ]);
            }

            $product4 = [
                'title' => 'BUTTON UP FESTIVAL MAC',
                'description' => "
                Got a festival coming up? Practical, statement making, and perfect for dancing in, be prepared to take on whatever the weather decides to throw at you with our festival jackets. Get your rave on in a waterproof festival rain mac or bomber, or switch it up for a festival parka with a tassel trim, or a shredded denim jacket with floral embroidery. Whatever you choose, we've got all the on-trend pieces that'll keep you lookin' badass while you dance the night away.",
                'price_new' => 16.50,
                'price_old' => 22.00,
                'quantity' => 110,
                'category_id' => 4,
            ];

            $product4Id = DB::table('products')->insertGetId($product4);

            $product4ColorId = DB::table('product_colors')->insertGetId([
                'product_id' => $product4Id,
                'color_id' => 3
            ]);

            DB::table('product_color_images')->insert([
                ['product_color_id' => $product4ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_black_xl/female-black-super-stretch-tapered-tailored-trouser/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit'],
                ['product_color_id' => $product4ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_black_xl_1/female-black-super-stretch-tapered-tailored-trouser'],
                ['product_color_id' => $product4ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_black_xl_2/female-black-super-stretch-tapered-tailored-trouser'],
                ['product_color_id' => $product4ColorId, 'image_path' => 'https://media.boohoo.com/i/boohoo/fzz77463_black_xl_3/female-black-super-stretch-tapered-tailored-trouser']
            ]);

            $sizeIds = DB::table('sizes')->pluck('id');
            foreach ($sizeIds as $sizeId) {
                DB::table('product_sizes')->insert([
                    'product_id' => $product4Id,
                    'size_id' => $sizeId
                ]);
            }
        });
    }
}
