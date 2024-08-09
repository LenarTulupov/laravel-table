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
                "title" => "SUPER STRETCH TAPERED TAILORED TROUSER",
                "description" =>
                    "Рабочая одежда не должна быть скучной, и эти рабочие брюки — безопасный выбор стиля. Немного более формальная одежда, эти брюки с высокой талией и зауженные к низу. Выбирайте между пуговицей или молнией, эти элегантные брюки нарядны и остры как бритва, внушая серьезное отношение. Всегда практичный элемент гардероба, наденьте их и готовьтесь произвести впечатление в любом профессиональном сценарии или ситуации.",
                "price_new" => 20.0,
                "price_old" => 25.0,
                "quantity" => 10,
            ];

            $product1Id = DB::table("products")->insertGetId($product1);

            $color2 = DB::table("colors")->where("name", "beige")->first();
            $product1ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product1Id,
                "color_id" => $color2->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product1ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz77463_stone_xl/female-stone-super-stretch-tapered-tailored-trouser/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product1ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz77463_stone_xl_1/female-stone-super-stretch-tapered-tailored-trouser",
                ],
                [
                    "product_color_id" => $product1ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz77463_stone_xl_2/female-stone-super-stretch-tapered-tailored-trouser",
                ],
                [
                    "product_color_id" => $product1ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz77463_stone_xl_3/female-stone-super-stretch-tapered-tailored-trouser",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product1Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product1Id,
                'category_id' => 4, 
            ]);

            $product2 = [
                "title" => "SUPER STRETCH TAPERED TAILORED TROUSER",
                "description" =>
                    "Рабочая одежда не должна быть скучной, и эти рабочие брюки — безопасный выбор стиля. Немного более формальная одежда, эти брюки с высокой талией и зауженные к низу. Выбирайте между пуговицей или молнией, эти элегантные брюки нарядны и остры как бритва, внушая серьезное отношение. Всегда практичный элемент гардероба, наденьте их и готовьтесь произвести впечатление в любом профессиональном сценарии или ситуации.",
                "price_new" => 20.0,
                "price_old" => 25.0,
                "quantity" => 10,
            ];

            $product2Id = DB::table("products")->insertGetId($product2);

            $color1 = DB::table("colors")->where("name", "blue")->first();
            $product2ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product2Id,
                "color_id" => $color1->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product2ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz77463_navy_xl/female-navy-super-stretch-tapered-tailored-trouser/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product2ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz77463_navy_xl_1/female-navy-super-stretch-tapered-tailored-trouser",
                ],
                [
                    "product_color_id" => $product2ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz77463_navy_xl_2/female-navy-super-stretch-tapered-tailored-trouser",
                ],
                [
                    "product_color_id" => $product2ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz77463_navy_xl_3/female-navy-super-stretch-tapered-tailored-trouser",
                ],
            ]);

            $sizeIds = DB::table("sizes")->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product2Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product2Id,
                'category_id' => 4, 
            ]);

            $product3 = [
                "title" => "SUPER STRETCH TAPERED TAILORED TROUSER",
                "description" =>
                    "Рабочая одежда не должна быть скучной, и эти рабочие брюки — безопасный выбор стиля. Немного более формальная одежда, эти брюки с высокой талией и зауженные к низу. Выбирайте между пуговицей или молнией, эти элегантные брюки нарядны и остры как бритва, внушая серьезное отношение. Всегда практичный элемент гардероба, наденьте их и готовьтесь произвести впечатление в любом профессиональном сценарии или ситуации.",
                "price_new" => 20.0,
                "price_old" => 25.0,
                "quantity" => 10,
            ];

            $product3Id = DB::table("products")->insertGetId($product3);

            $product3ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product3Id,
                "color_id" => 3,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product3ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz77463_black_xl/female-black-super-stretch-tapered-tailored-trouser/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product3ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz77463_black_xl_1/female-black-super-stretch-tapered-tailored-trouser",
                ],
                [
                    "product_color_id" => $product3ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz77463_black_xl_2/female-black-super-stretch-tapered-tailored-trouser",
                ],
                [
                    "product_color_id" => $product3ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz77463_black_xl_3/female-black-super-stretch-tapered-tailored-trouser",
                ],
            ]);

            $sizeIds = DB::table("sizes")->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product3Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product3Id,
                'category_id' => 4, 
            ]);

            $product4 = [
                "title" => "BUTTON UP FESTIVAL MAC",
                "description" => "
                Got a festival coming up? Practical, statement making, and perfect for dancing in, be prepared to take on whatever the weather decides to throw at you with our festival jackets. Get your rave on in a waterproof festival rain mac or bomber, or switch it up for a festival parka with a tassel trim, or a shredded denim jacket with floral embroidery.",
                "price_new" => 19.8,
                "price_old" => 22.0,
                "quantity" => 90,
            ];

            $product4Id = DB::table("products")->insertGetId($product4);

            $color18 = DB::table("colors")->where("name", "stone")->first();
            $product4ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product4Id,
                "color_id" => $color18->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product4ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz91994_stone_xl/female-stone-button-up-festival-mac-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product4ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz91994_stone_xl_1/female-stone-button-up-festival-mac-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product4ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz91994_stone_xl_2/female-stone-button-up-festival-mac-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product4ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz91994_stone_xl_3/female-stone-button-up-festival-mac-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product4Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'jackets'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product4Id,
                            'category_id' => $categoryId,
                        ]);
                    }

            $product5 = [
                "title" => "SHIRRED TRIANGLE BIKINI TOP",
                "description" =>
                    "You’ll have all eyes on you this summer in this triangle bikini. Getting its name from the two triangle-shaped pieces of fabric that form each cup, this style is a classic silhouette that's flattering for all sizes. Look on point in knot-tie triangle bikini tops or bring the heat in a mesh detail styles. This one would look fire with matching bottoms, fine gold jewellery, heeled wedges and an oversized beach bag. It’s poolside glam that you’ll never want to take off.",
                "price_new" => 3.0,
                "price_old" => 12.0,
                "quantity" => 65,
            ];

            $product5Id = DB::table("products")->insertGetId($product5);

            $color14 = DB::table("colors")->where("name", "green")->first();
            $product5ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product5Id,
                "color_id" => $color14->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product5ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz02901_green_xl/female-green-shirred-triangle-bikini-top-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product5ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz02901_green_xl_1/female-shirred-triangle-bikini-top-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product5ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz02901_green_xl_2/female-shirred-triangle-bikini-top-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product5ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz02901_green_xl_3/female-shirred-triangle-bikini-top-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product5Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product5Id,
                            'category_id' => $categoryId,
                        ]);
                    }

            $product6 = [
                "title" => "3 PACK LEOPARD PAISLEY TIE BIKINI KIMONO SET",
                "description" =>
                    "Protect your skin from the sun with this beach cover up from our latest beachwear collection. Designed to keep your skin out of the sun on those super hot beach days, our cover ups for the beach strike the perfect balance between practicality and style. Need style inspo? Team with a matching bikini and sandals for beach club plans. Golden hour awaits...just add a beach bag and sunglasses and you're good to go!",
                "price_new" => 33.5,
                "price_old" => 35.0,
                "quantity" => 14,
            ];

            $product6Id = DB::table("products")->insertGetId($product6);

            $color7 = DB::table("colors")->where("name", "pink")->first();
            $product6ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product6Id,
                "color_id" => $color7->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product6ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz19581_pink_xl/female-pink-3-pack-leopard-paisley-tie-bikini-kimono-set?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product6ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz19581_pink_xl_1/female-pink-3-pack-leopard-paisley-tie-bikini-kimono-set?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product6ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz19581_pink_xl_2/female-pink-3-pack-leopard-paisley-tie-bikini-kimono-set?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product6ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz19581_pink_xl_3/female-pink-3-pack-leopard-paisley-tie-bikini-kimono-set?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product6Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product6Id,
                            'category_id' => $categoryId,
                        ]);
                    }

            $product7 = [
                "title" =>
                    "MOLLY SMITH FRUIT LEOPARD TRIM DETAIL CUT OUT SWIMSUIT",
                "description" =>
                    "Shop summer staples with this piece from the Molly Smith x boohoo edit...the endless summer collection. Made for your vacay plans, the collection takes inspo from Molly’s signature villa looks. In summer sorbets with pops of brights and fruit prints, these styles have day-to-night dressing covered. Shop the full Molly Smith x boohoo edit on site now. POV: your holiday wardrobe is right here.",
                "price_new" => 16.2,
                "price_old" => 18.0,
                "quantity" => 58,
            ];

            $product7Id = DB::table("products")->insertGetId($product7);

            $color15 = DB::table("colors")->where("name", "orange")->first();
            $product7ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product7Id,
                "color_id" => $color15->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product7ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz98340_orange_xl/female-orange-molly-smith-fruit-leopard-trim-detail-cut-out-swimsuit?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product7ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz98340_orange_xl_1/female-orange-molly-smith-fruit-leopard-trim-detail-cut-out-swimsuit?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product7ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz98340_orange_xl_2/female-orange-molly-smith-fruit-leopard-trim-detail-cut-out-swimsuit?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product7ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz98340_orange_xl_3/female-orange-molly-smith-fruit-leopard-trim-detail-cut-out-swimsuit?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product7Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product7Id,
                            'category_id' => $categoryId,
                        ]);
                    }

            // Dresses

            $product8 = [
                "title" => "DEEP V NECK MINI DRESS",
                "description" =>
                    "Looking for the perfect casual dress to wear every day? This on-trend piece from our day dresses collection is just for you. A day dress is your go-to style for versatility and easy wearing, just pair it with trainers to achieve the perfect casual look. With its relaxed silhouette and floaty style, day dresses mean you stay comfortable all day, no matter what your plans.",
                "price_new" => 25.2,
                "price_old" => 28.0,
                "quantity" => 6,
            ];

            $product8Id = DB::table("products")->insertGetId($product8);

            $color16 = DB::table("colors")->where("name", "white")->first();
            $product8ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product8Id,
                "color_id" => $color16->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product8ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz97114_white_xl/female-white-deep-v-neck-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product8ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz97114_white_xl_1/female-white-deep-v-neck-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product8ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz97114_white_xl_2/female-white-deep-v-neck-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product8ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz97114_white_xl_3/female-white-deep-v-neck-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product8Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product8Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            // --
            $product9 = [
                "title" => "MOLLY SMITH FRUIT PRINT RUFFLE MESH MINI DRESS",
                "description" =>
                    "Shop summer staples with this piece from the Molly Smith x boohoo edit...the endless summer collection. Made for your vacay plans, the collection takes inspo from Molly’s signature villa looks. In summer sorbets with pops of brights and fruit prints, these styles have day-to-night dressing covered.",
                "price_new" => 12.0,
                "price_old" => 20.0,
                "quantity" => 60,
            ];

            $product9Id = DB::table("products")->insertGetId($product9);

            $color17 = DB::table("colors")->where("name", "multi")->first();
            $product9ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product9Id,
                "color_id" => $color17->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product9ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz00350_multi_xl/female-multi-molly-smith-fruit-print-ruffle-mesh-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product9ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz00350_multi_xl_1/female-multi-molly-smith-fruit-print-ruffle-mesh-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product9ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz00350_multi_xl_2/female-multi-molly-smith-fruit-print-ruffle-mesh-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product9ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz00350_multi_xl_3/female-multi-molly-smith-fruit-print-ruffle-mesh-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product9Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product9Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            // --
            $product10 = [
                "title" => "BURNOUT TIE DETAIL MINI DRESS",
                "description" =>
                    "Looking for the perfect casual dress to wear every day? This on-trend piece from our day dresses collection is just for you. A day dress is your go-to style for versatility and easy wearing, just pair it with trainers to achieve the perfect casual look. With its relaxed silhouette and floaty style, day dresses mean you stay comfortable all day, no matter what your plans.",
                "price_new" => 22.5,
                "price_old" => 25.0,
                "quantity" => 160,
            ];

            $product10Id = DB::table("products")->insertGetId($product10);

            $color18 = DB::table("colors")->where("name", "stone")->first();
            $product10ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product10Id,
                "color_id" => $color18->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product10ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz97120_stone_xl/female-stone-burnout-tie-detail-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product10ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz97120_stone_xl_1/female-stone-burnout-tie-detail-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product10ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz97120_stone_xl_2/female-stone-burnout-tie-detail-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product10ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz97120_stone_xl_3/female-stone-burnout-tie-detail-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product10Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product10Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            // 11
            $product11 = [
                "title" => "BASIC CREW NECK LONG SLEEVE MINI DRESS",
                "description" =>
                    "It’s the dress your nights out need - welcome the mini bodycon dress to your wardrobe girl. Let's face it, everyone needs a bodycon mini dress in their collection, and this one's got the perfect vibe for going out and making a statement. Wear it with lace up barely there heels and add some accessories for extra details. Can't decide what colour? We're loving red and black mini bodycon dresses for a look that serves you all season.",
                "price_new" => 6.6,
                "price_old" => 11.0,
                "quantity" => 3,
            ];

            $product11Id = DB::table("products")->insertGetId($product11);

            $color19 = DB::table("colors")->where("name", "hot-pink")->first();
            $product11ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product11Id,
                "color_id" => $color19->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product11ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz65113_hot%20pink_xl/female-hot%20pink-basic-crew-neck-long-sleeve-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product11ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz65113_hot%20pink_xl_1/female-hot%20pink-basic-crew-neck-long-sleeve-mini-dress",
                ],
                [
                    "product_color_id" => $product11ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz65113_hot%20pink_xl_2/female-hot%20pink-basic-crew-neck-long-sleeve-mini-dress",
                ],
                [
                    "product_color_id" => $product11ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz65113_hot%20pink_xl_3/female-hot%20pink-basic-crew-neck-long-sleeve-mini-dress",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product11Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product11Id,
                'category_id' => 3, 
            ]);
            // 12
            $product12 = [
                "title" => "BASIC CREW NECK LONG SLEEVE MINI DRESS",
                "description" =>
                    "It’s the dress your nights out need - welcome the mini bodycon dress to your wardrobe girl. Let's face it, everyone needs a bodycon mini dress in their collection, and this one's got the perfect vibe for going out and making a statement. Wear it with lace up barely there heels and add some accessories for extra details. Can't decide what colour? We're loving red and black mini bodycon dresses for a look that serves you all season.",
                "price_new" => 7.2,
                "price_old" => 12.0,
                "quantity" => 33,
            ];

            $product12Id = DB::table("products")->insertGetId($product12);

            $color3 = DB::table("colors")->where("name", "black")->first();
            $product12ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product12Id,
                "color_id" => $color3->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product12ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz65113_black_xl/female-black-basic-crew-neck-long-sleeve-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product12ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz65113_black_xl_1/female-black-basic-crew-neck-long-sleeve-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product12ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz65113_black_xl_2/female-black-basic-crew-neck-long-sleeve-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product12ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz65113_black_xl_3/female-black-basic-crew-neck-long-sleeve-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl", "xxl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product12Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product12Id,
                'category_id' => 3, 
            ]);
            // 13
            $product13 = [
                "title" => "MOLLY SMITH CUT OUT TRIM DETAIL MAXI DRESS",
                "description" =>
                    "Shop summer staples with this piece from the Molly Smith x boohoo edit...the endless summer collection. Made for your vacay plans, the collection takes inspo from Molly’s signature villa looks. In summer sorbets with pops of brights and fruit prints, these styles have day-to-night dressing covered.",
                "price_new" => 22.5,
                "price_old" => 25.0,
                "quantity" => 330,
            ];

            $product13Id = DB::table("products")->insertGetId($product13);

            $color20 = DB::table("colors")->where("name", "olive")->first();
            $product13ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product13Id,
                "color_id" => $color20->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product13ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz03268_olive_xl/female-olive-molly-smith-cut-out-trim-detail-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product13ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz03268_olive_xl_1/female-olive-molly-smith-cut-out-trim-detail-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product13ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz03268_olive_xl_2/female-olive-molly-smith-cut-out-trim-detail-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product13ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz03268_olive_xl_3/female-olive-molly-smith-cut-out-trim-detail-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl", "xxl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product13Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product13Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            //14
            $product14 = [
                "title" => "UTILITY TIE WAIST BLAZER DRESS",
                "description" =>
                    "Show 'em who's boss with this blazer dress from our latest collection. Cut to resemble a traditional suit jacket but with a casual fit and long-line length, the blazer dress is the current trend of the moment, and we're obsessed. Featuring soft tailoring and button detailing, pair this one with simple court shoes and a matching clutch and let your dress do the talking.",
                "price_new" => 37.8,
                "price_old" => 42.0,
                "quantity" => 76,
            ];

            $product14Id = DB::table("products")->insertGetId($product14);

            $color21 = DB::table("colors")->where("name", "khaki")->first();
            $product14ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product14Id,
                "color_id" => $color21->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product14ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz95458_khaki_xl/female-khaki-utility-tie-waist-blazer-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product14ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz95458_khaki_xl_1/female-khaki-utility-tie-waist-blazer-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product14ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz95458_khaki_xl_2/female-khaki-utility-tie-waist-blazer-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product14ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz95458_khaki_xl_3/female-khaki-utility-tie-waist-blazer-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl", "xxl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product14Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product14Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            //15
            $product15 = [
                "title" => "DAISY FLORAL MAXI DRESS",
                "description" =>
                    "Embrace your femininity with this floral dress from our latest collection. Complete with a bold floral print that's sure to make you stand out from the crowd this season, this style is bold, feminine, and the perfect addition to your warm weather wardrobe. From floral midi dresses to maxi styles, just pair with barely-there heels and your go-to look is sorted.",
                "price_new" => 19.8,
                "price_old" => 22.0,
                "quantity" => 52,
            ];

            $product15Id = DB::table("products")->insertGetId($product15);

            $color3 = DB::table("colors")->where("name", "black")->first();
            $product15ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product15Id,
                "color_id" => $color3->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product15ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz96667_black_xl/female-black-daisy-floral-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product15ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz96667_black_xl_1/female-black-daisy-floral-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product15ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz96667_black_xl_2/female-black-daisy-floral-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product15ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz96667_black_xl_3/female-black-daisy-floral-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl", "xxl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product15Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product15Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            //16
            $product16 = [
                "title" => "LINEN CUT OUT WAIST MIDAXI DRESS",
                "description" =>
                    "Got plans? Stay party ready with this fierce contouring bodycon dress. A figure flattering style made of a stretchy material that hugs your curves in all the right places, this form-fitting bodycon dress is the perfect style to achieve that flawless silhouette. From date night to girls night, a tight dress is the essential wardrobe must-have every girl needs. ",
                "price_new" => 28.8,
                "price_old" => 33.0,
                "quantity" => 112,
            ];

            $product16Id = DB::table("products")->insertGetId($product16);

            $color22 = DB::table("colors")->where("name", "ecru")->first();
            $product16ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product16Id,
                "color_id" => $color22->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product16ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz82237_ecru_xl/female-ecru-linen-cut-out-waist-midaxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product16ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz82237_ecru_xl_1/female-ecru-linen-cut-out-waist-midaxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product16ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz82237_ecru_xl_2/female-ecru-linen-cut-out-waist-midaxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product16ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz82237_ecru_xl_3/female-ecru-linen-cut-out-waist-midaxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product16Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product16Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            // Coats
            $product17 = [
                "title" => "BORG LINED PADDED TRENCH COAT",
                "description" =>
                    "For a look that's as timeless as they come, you can't go wrong with the classic trench coat. We love its loose fit, double-breasted design - it's perfect for throwing on over jeans and your favourite top. A tailored fit that's snug at the waist once tied, a women's trench coat is the ideal trans-seasonal piece to keep out the rain. We're pairing ours with jeans and trainers for a head to toe refresh.",
                "price_new" => 27.0,
                "price_old" => 42.0,
                "quantity" => 52,
            ];

            $product17Id = DB::table("products")->insertGetId($product17);

            $color21 = DB::table("colors")->where("name", "khaki")->first();
            $product17ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product17Id,
                "color_id" => $color21->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product17ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz09182_khaki_xl/female-khaki-borg-lined-padded-trench-coat?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product17ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz09182_khaki_xl_1/female-khaki-borg-lined-padded-trench-coat?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product17ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz09182_khaki_xl_2/female-khaki-borg-lined-padded-trench-coat?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product17ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz09182_khaki_xl_3/female-khaki-borg-lined-padded-trench-coat?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product17Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product17Id,
                'category_id' => 1, 
            ]);
            // Jackets
            $product18 = [
                "title" => "OVERSIZED WOOL BOMBER JACKET",
                "description" =>
                    "For a look that's as timeless as they come, you can't go wrong with the classic trench coat. We love its loose fit, double-breasted design - it's perfect for throwing on over jeans and your favourite top. A tailored fit that's snug at the waist once tied, a women's trench coat is the ideal trans-seasonal piece to keep out the rain. We're pairing ours with jeans and trainers for a head to toe refresh.",
                "price_new" => 33.00,
                "price_old" => 45.00,
                "quantity" => 16,
            ];

            $product18Id = DB::table("products")->insertGetId($product18);

            $color14 = DB::table("colors")->where("name", "green")->first();
            $product18ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product18Id,
                "color_id" => $color14->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product18ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz55722_green_xl/female-green-oversized-wool-bomber-jacket-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product18ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz55722_green_xl_1/female-green-oversized-wool-bomber-jacket-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product18ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz55722_green_xl_2/female-green-oversized-wool-bomber-jacket-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product18ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz55722_green_xl_3/female-green-oversized-wool-bomber-jacket-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product18Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'jackets'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product18Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            // 19
            $product19 = [
                "title" => "TEDDY FUR TRIM PREMIUM AVIATOR",
                "description" =>
                    "Take your outfit to new style heights with an aviator jacket. Perfect for layering, create a stylish oversized silhouette as you choose from crop belted jackets to faux fur lined options. A cross between a classic flight jacket and a leather biker, it's all about the detailing with this snug winter staple. Pair your aviator coat with high waisted mom jeans and a fierce attitude as you stroll your way through your social calendar.",
                "price_new" => 25.00,
                "price_old" => 90.00,
                "quantity" => 66,
            ];

            $product19Id = DB::table("products")->insertGetId($product19);

            $color2 = DB::table("colors")->where("name", "beige")->first();
            $product19ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product19Id,
                "color_id" => $color2->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product19ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz75041_beige_xl/female-beige-teddy-fur-trim-premium-aviator-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product19ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz75041_beige_xl_1/female-beige-teddy-fur-trim-premium-aviator-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product19ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz75041_beige_xl_2/female-beige-teddy-fur-trim-premium-aviator-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product19ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz75041_beige_xl_3/female-beige-teddy-fur-trim-premium-aviator-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["s", "m", "l"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product19Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product19Id,
                'category_id' => 2, 
            ]);
            // 20
            $product20 = [
                "title" => "PETITE LUXE FAUX FUR HOOD SPORTY CROPPED COAT",
                "description" =>
                    "Keep toasty this season with our collection of petite coats and jackets. From petite trench coats to petite teddy coats, our coats for petite women are specifically designed to fit all you girls sitting pretty at 5’3’’ and under. Step out in a petite blazer or pass the vibe check in a petite puffer jacket. Whatever your style, we’ve got you, girl.",
                "price_new" => 25.00,
                "price_old" => 65.00,
                "quantity" => 43,
            ];

            $product20Id = DB::table("products")->insertGetId($product20);

            $color3 = DB::table("colors")->where("name", "black")->first();
            $product20ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product20Id,
                "color_id" => $color3->id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product20ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/pzz82346_black_xl/female-black-petite-luxe-faux-fur-hood-sporty-cropped-coat?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product20ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/pzz82346_black_xl_1/female-black-petite-luxe-faux-fur-hood-sporty-cropped-coat?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product20ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/pzz82346_black_xl_2/female-black-petite-luxe-faux-fur-hood-sporty-cropped-coat?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product20ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/pzz82346_black_xl_3/female-black-petite-luxe-faux-fur-hood-sporty-cropped-coat?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl", "xxl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product20Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product20Id,
                'category_id' => 1, 
            ]);
            // 21
            $product21 = [
                "title" => "OVERSIZED MIDAXI TRENCH COAT",
                "description" =>
                    "For a look that's as timeless as they come, you can't go wrong with the classic trench coat. We love its loose fit, double-breasted design - it's perfect for throwing on over jeans and your favourite top. A tailored fit that's snug at the waist once tied, a women's trench coat is the ideal trans-seasonal piece to keep out the rain.",
                "price_new" => 45.00,
                "price_old" => 50.00,
                "quantity" => 88,
            ];

            $product21Id = DB::table("products")->insertGetId($product21);

            $color23 = DB::table("colors")->where("name", "gray")->first();
            $product21ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product21Id,
                "color_id" => $color23 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product21ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz86668_grey_xl/female-grey-oversized-midaxi-trench-coat-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product21ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz86668_grey_xl_1/female-grey-oversized-midaxi-trench-coat-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product21ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz86668_grey_xl_2/female-grey-oversized-midaxi-trench-coat-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product21ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz86668_grey_xl_3/female-grey-oversized-midaxi-trench-coat-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product21Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product21Id,
                'category_id' => 1, 
            ]);
            //22
            $product22 = [
                "title" => "BADGE DETAIL PARKA",
                "description" =>
                    "
                    Just because it's raining outside doesn't mean you have to sacrifice your style this season. Designed to keep you warm and protected from the elements, keep covered in our reliable women's parkas while giving off ultimate cosy-chic vibes. A longline coat complete with a cosy hood and warm lining, a parka is the winter staple your wardrobe won't be complete without.",
                "price_new" => 19.00,
                "price_old" => 45.00,
                "quantity" => 22,
            ];

            $product22Id = DB::table("products")->insertGetId($product22);

            $color18 = DB::table("colors")->where("name", "stone")->first();
            $product22ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product22Id,
                "color_id" => $color18 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product22ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz69663_stone_xl/female-stone-badge-detail-parka?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product22ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz69663_stone_xl_1/female-stone-badge-detail-parka?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product22ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz69663_stone_xl_2/female-stone-badge-detail-parka?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product22ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz69663_stone_xl_3/female-stone-badge-detail-parka?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product22Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product22Id,
                'category_id' => 1, 
            ]);
            // 23
            $product23 = [
                "title" => "BADGE DETAIL PARKA",
                "description" =>
                    "
                    Just because it's raining outside doesn't mean you have to sacrifice your style this season. Designed to keep you warm and protected from the elements, keep covered in our reliable women's parkas while giving off ultimate cosy-chic vibes. A longline coat complete with a cosy hood and warm lining, a parka is the winter staple your wardrobe won't be complete without.",
                "price_new" => 22.00,
                "price_old" => 45.00,
                "quantity" => 22,
            ];

            $product23Id = DB::table("products")->insertGetId($product23);

            $color3 = DB::table("colors")->where("name", "black")->first();
            $product23ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product23Id,
                "color_id" => $color3 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product23ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz69663_black_xl/female-black-badge-detail-parka?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product23ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz69663_black_xl_1/female-black-badge-detail-parka?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product23ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz69663_black_xl_2/female-black-badge-detail-parka?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product23ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz69663_black_xl_3/female-black-badge-detail-parka?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product23Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product23Id,
                'category_id' => 1, 
            ]);
            //24
            $product24 = [
                "title" => "POCKET DETAIL HOODED PUFFER JACKET",
                "description" =>
                    "
                    Just because it's raining outside doesn't mean you have to sacrifice your style this season. Designed to keep you warm and protected from the elements, keep covered in our reliable women's parkas while giving off ultimate cosy-chic vibes. A longline coat complete with a cosy hood and warm lining, a parka is the winter staple your wardrobe won't be complete without.",
                "price_new" => 24.00,
                "price_old" => 60.00,
                "quantity" => 50,
            ];

            $product24Id = DB::table("products")->insertGetId($product24);

            $color21 = DB::table("colors")->where("name", "khaki")->first();
            $product24ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product24Id,
                "color_id" => $color21 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product24ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz12580_khaki_xl/female-khaki-pocket-detail-hooded-puffer-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product24ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz12580_khaki_xl_1/female-khaki-pocket-detail-hooded-puffer-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product24ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz12580_khaki_xl_2/female-khaki-pocket-detail-hooded-puffer-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product24ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz12580_khaki_xl_3/female-khaki-pocket-detail-hooded-puffer-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product24Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product24Id,
                'category_id' => 2, 
            ]);
            //25
            $product25 = [
                "title" => "POCKET DETAIL HOODED PUFFER JACKET",
                "description" =>
                    "
                    Just because it's raining outside doesn't mean you have to sacrifice your style this season. Designed to keep you warm and protected from the elements, keep covered in our reliable women's parkas while giving off ultimate cosy-chic vibes. A longline coat complete with a cosy hood and warm lining, a parka is the winter staple your wardrobe won't be complete without. ",
                "price_new" => 16.00,
                "price_old" => 60.00,
                "quantity" => 30,
            ];

            $product25Id = DB::table("products")->insertGetId($product25);

            $color18 = DB::table("colors")->where("name", "stone")->first();
            $product25ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product25Id,
                "color_id" => $color18 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product25ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz12580_stone_xl/female-stone-pocket-detail-hooded-puffer-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product25ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz12580_stone_xl_1/female-stone-pocket-detail-hooded-puffer-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product25ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz12580_stone_xl_2/female-stone-pocket-detail-hooded-puffer-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product25ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz12580_stone_xl_3/female-stone-pocket-detail-hooded-puffer-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["s", "m", "l"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product25Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product25Id,
                'category_id' => 2, 
            ]);
            //26
            $product26 = [
                "title" => "POCKET DETAIL HOODED PUFFER JACKET",
                "description" =>
                    "
                    Just because it's raining outside doesn't mean you have to sacrifice your style this season. Designed to keep you warm and protected from the elements, keep covered in our reliable women's parkas while giving off ultimate cosy-chic vibes. ",
                "price_new" => 39.00,
                "price_old" => 65.00,
                "quantity" => 99,
            ];

            $product26Id = DB::table("products")->insertGetId($product26);

            $color3 = DB::table("colors")->where("name", "black")->first();
            $product26ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product26Id,
                "color_id" => $color3 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product26ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz12580_black_xl/female-black-pocket-detail-hooded-puffer-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product26ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz12580_black_xl_1/female-black-pocket-detail-hooded-puffer-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product26ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz12580_black_xl_2/female-black-pocket-detail-hooded-puffer-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product26ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/fzz12580_black_xl_3/female-black-pocket-detail-hooded-puffer-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product26Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product26Id,
                'category_id' => 2, 
            ]);
            // 27
            $product27 = [
                "title" => "OVERSIZED WOOL LOOK BOMBER JACKET",
                "description" =>
                    "
                    Keep things casual but always on-trend with a piece of outerwear perfection, the bomber jacket. A light jacket featuring a gathered, ribbed waistband and matching cuffs, a bomber jacket is versatile, timeless, and the perfect way to edge up your casual wear. Wear your new women's bomber jacket with a shirt and stripe joggers for the hottest look of the moment: sports luxe, or layer a varsity jacket over a t shirt dress for a fresh new-season look.",
                "price_new" => 27.00,
                "price_old" => 45.00,
                "quantity" => 33,
            ];

            $product27Id = DB::table("products")->insertGetId($product27);

            $color24 = DB::table("colors")->where("name", "cream")->first();
            $product27ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product27Id,
                "color_id" => $color24 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product27ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz75382_cream_xl/female-cream-oversized-wool-look-bomber-jacket-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product27ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz75382_cream_xl_1/female-cream-oversized-wool-look-bomber-jacket-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product27ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz75382_cream_xl_2/female-cream-oversized-wool-look-bomber-jacket-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product27ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz75382_cream_xl_3/female-cream-oversized-wool-look-bomber-jacket-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product27Id,
                    "size_id" => $sizeId,
                ]);
            }
            DB::table('categories_merge')->insert([
                'product_id' => $product27Id,
                'category_id' => 2, 
            ]);

            // 28
            $product28 = [
                "title" => "TIERED FRILL MINI SKIRT",
                "description" =>
                    "
                    This season it's all about having fun with your hemline. Mix it up in minis, midis and maxis or go matchy-matchy and co-ordinate with a crop top. Push the boundaries in pleated pastels and fondant shade full circle styles, updating with a holographic clutch for a cool colour clash. Flirt with the skirt for your favourite every day and evening ensembles.",
                "price_new" => 10.50,
                "price_old" => 15.00,
                "quantity" => 77,
            ];

            $product28Id = DB::table("products")->insertGetId($product28);

            $color16 = DB::table("colors")->where("name", "white")->first();
            $product28ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product28Id,
                "color_id" => $color16 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product28ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz88480_white_xl/female-white-tiered-frill-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product28ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz88480_white_xl_1/female-white-tiered-frill-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product28ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz88480_white_xl_2/female-white-tiered-frill-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product28ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz88480_white_xl_3/female-white-tiered-frill-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product28Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'skirt'])->pluck('id');
            foreach ($categories as $categoryId) {
                DB::table('categories_merge')->insert([
                    'product_id' => $product28Id,
                    'category_id' => $categoryId,
                ]);
            }
            // 29
            $product29 = [
                "title" => "LONGLINE WAISTCOAT",
                "description" =>
                    "
                    Camis or crops, bandeaus or bralets, we've got all the trend-setting tops so you can stay statement in separates this season. Hit refresh on your jersey basics with pastel hues and pick a quirky kimono to give your ensemble that Eastern-inspired edge. Off the shoulder styles are oh-so-sweet, with slogans making your tee a talking point.",
                "price_new" => 19.60,
                "price_old" => 28.00,
                "quantity" => 187,
            ];

            $product29Id = DB::table("products")->insertGetId($product29);

            $color25 = DB::table("colors")->where("name", "mocha")->first();
            $product29ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product29Id,
                "color_id" => $color25 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product29ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz03098_mocha_xl/female-mocha-longline-waistcoat?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product29ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz03098_mocha_xl_1/female-mocha-longline-waistcoat?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product29ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz03098_mocha_xl_2/female-mocha-longline-waistcoat?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product29ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz03098_mocha_xl_3/female-mocha-longline-waistcoat?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl", "xxl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product29Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'coats'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product29Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            // 30
            $product30 = [
                "title" => "DSGN BADGE VINTAGE TINT STRIPE DENIM MINI SKIRT",
                "description" =>
                    "
                    Secure a wardrobe staple this season with this denim skirt from our latest collection. The perfect tool for day-to-night dressing, denim skirts for women are a wardrobe staple which never go out of style. Featuring a rigid denim fabric that can be dressed up or down, we’re talking wear anywhere and everywhere kinda vibes.",
                "price_new" => 17.50,
                "price_old" => 25.00,
                "quantity" => 18,
            ];

            $product30Id = DB::table("products")->insertGetId($product30);

            $color26 = DB::table("colors")->where("name", "vintage-wash")->first();
            $product30ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product30Id,
                "color_id" => $color26 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product30ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz94307_vintage%20wash_xl/female-vintage%20wash-dsgn-badge-vintage-tint-stripe-denim-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product30ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz94307_vintage%20wash_xl_1/female-vintage%20wash-dsgn-badge-vintage-tint-stripe-denim-mini-skirt",
                ],
                [
                    "product_color_id" => $product30ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz94307_vintage%20wash_xl_2/female-vintage%20wash-dsgn-badge-vintage-tint-stripe-denim-mini-skirt",
                ],
                [
                    "product_color_id" => $product30ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/gzz94307_vintage%20wash_xl_3/female-vintage%20wash-dsgn-badge-vintage-tint-stripe-denim-mini-skirt",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl", "xxl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product30Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'skirt'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product30Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            // 31
            $product31 = [
                "title" => "TALL CONTRAST LEOPARD TIE FRONT TOP",
                "description" =>
                    "
                    Secure a wardrobe staple this season with this denim skirt from our latest collection. The perfect tool for day-to-night dressing, denim skirts for women are a wardrobe staple which never go out of style. Featuring a rigid denim fabric that can be dressed up or down, we’re talking wear anywhere and everywhere kinda vibes.",
                "price_new" => 16.10,
                "price_old" => 23.00,
                "quantity" => 43,
            ];

            $product31Id = DB::table("products")->insertGetId($product31);

            $color16 = DB::table("colors")->where("name", "white")->first();
            $product31ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product31Id,
                "color_id" => $color16 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product31ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz03432_white_xl/female-white-tall-contrast-leopard-tie-front-top?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product31ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz03432_white_xl_1/female-white-tall-contrast-leopard-tie-front-top?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product31ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz03432_white_xl_2/female-white-tall-contrast-leopard-tie-front-top?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product31ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz03432_white_xl_3/female-white-tall-contrast-leopard-tie-front-top?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl", "xxl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product31Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'top'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product31Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            //32
            $product32 = [
                "title" => "STRAWBERRY GRAPHIC OVERSIZED T-SHIRT",
                "description" =>
                    "
                    Camis or crops, bandeaus or bralets, we've got all the trend-setting tops so you can stay statement in separates this season. Hit refresh on your jersey basics with pastel hues and pick a quirky kimono to give your ensemble that Eastern-inspired edge. Off the shoulder styles are oh-so-sweet, with slogans making your tee a talking point.",
                "price_new" => 8.40,
                "price_old" => 12.00,
                "quantity" => 27,
            ];

            $product32Id = DB::table("products")->insertGetId($product32);

            $color16 = DB::table("colors")->where("name", "white")->first();
            $product32ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product32Id,
                "color_id" => $color16 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product32ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz08173_white_xl/female-white-strawberry-graphic-oversized-t-shirt-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product32ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz08173_white_xl_1/female-white-strawberry-graphic-oversized-t-shirt-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product32ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz08173_white_xl_2/female-white-strawberry-graphic-oversized-t-shirt-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product32ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz08173_white_xl_3/female-white-strawberry-graphic-oversized-t-shirt-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product32Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['summer', 't-shirt'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product32Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            //33
            $product33 = [
                "title" => "BENGALINE GINGHAM RUFFLE MINI SKIRT",
                "description" =>
                    "
                    This season it's all about having fun with your hemline. Mix it up in minis, midis and maxis or go matchy-matchy and co-ordinate with a crop top. Push the boundaries in pleated pastels and fondant shade full circle styles, updating with a holographic clutch for a cool colour clash. Flirt with the skirt for your favourite every day and evening ensembles.",
                "price_new" => 12.60,
                "price_old" => 18.00,
                "quantity" => 55,
            ];

            $product33Id = DB::table("products")->insertGetId($product33);

            $color27 = DB::table("colors")->where("name", "gingham")->first();
            $product33ColorId = DB::table("product_colors")->insertGetId([
                "product_id" => $product33Id,
                "color_id" => $color27 -> id,
            ]);

            DB::table("product_color_images")->insert([
                [
                    "product_color_id" => $product33ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz01315_gingham_xl/female-gingham-bengaline-gingham-ruffle-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product33ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz01315_gingham_xl_1/female-gingham-bengaline-gingham-ruffle-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fitt",
                ],
                [
                    "product_color_id" => $product33ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz01315_gingham_xl_2/female-gingham-bengaline-gingham-ruffle-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
                [
                    "product_color_id" => $product33ColorId,
                    "image_path" =>
                        "https://media.boohoo.com/i/boohoo/hzz01315_gingham_xl_3/female-gingham-bengaline-gingham-ruffle-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
                ],
            ]);

            $sizeIds = DB::table("sizes")
                ->whereIn("name", ["xs", "s", "m", "l", "xl", "xxl"])
                ->pluck("id");
            foreach ($sizeIds as $sizeId) {
                DB::table("product_sizes")->insert([
                    "product_id" => $product33Id,
                    "size_id" => $sizeId,
                ]);
            }
            $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'skirt'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product33Id,
                            'category_id' => $categoryId,
                        ]);
                    }
            //34 with two categories
            $product34 = [
                        'title' => 'SHIRRED TIE SIDE BIKINI BRIEF',
                        'description' => "
                            Featuring a flattering fit which is comfortable, form-fitting, and perfect for poolside lounging, step out in style this season in this pair of fierce bikini bottoms. Creating a clear waistline to accentuate your curves, this style is everything you’ve been scrolling for. From itty-bitty thong bikini bottoms to high leg styles, we’ve got you (and your peach) covered all summer long.",
                        'price_new' => 8.00,
                        'price_old' => 12.00,
                        'quantity' => 31
                    ];

                    // Вставка продукта и получение его ID
                    $product34Id = DB::table('products')->insertGetId($product34);

                    // Вставка цвета продукта
                    $color28 = DB::table('colors')->where('name', 'gingham')->first();
                    $product34ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product34Id,
                        'color_id' => $color28->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product34ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz02899_lilac_xl/female-lilac-shirred-tie-side-bikini-brief-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product34ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz02899_lilac_xl_1/female-lilac-shirred-tie-side-bikini-brief-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product34ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz02899_lilac_xl_2/female-lilac-shirred-tie-side-bikini-brief-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product34ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz02899_lilac_xl_3/female-lilac-shirred-tie-side-bikini-brief-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ['l', 'xl', 'xxl'])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product34Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product34Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    // 35
                    $product35 = [
                        'title' => 'MOLLY SMITH SEQUIN KNIT CUT OUT BEACH MAXI DRESS',
                        'description' => "
                            Shop summer staples with this piece from the Molly Smith x boohoo edit...the endless summer collection. Made for your vacay plans, the collection takes inspo from Molly’s signature villa looks. In summer sorbets with pops of brights and fruit prints, these styles have day-to-night dressing covered. Shop the full Molly Smith x boohoo edit on site now. POV: your holiday wardrobe is right here.",
                        'price_new' => 22.50,
                        'price_old' => 30.00,
                        'quantity' => 21
                    ];

                    // Вставка продукта и получение его ID
                    $product35Id = DB::table('products')->insertGetId($product35);

                    // Вставка цвета продукта
                    $color22 = DB::table('colors')->where('name', 'ecru')->first();
                    $product35ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product35Id,
                        'color_id' => $color22->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product35ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz95496_ecru_xl/female-ecru-molly-smith-sequin-knit-cut-out-beach-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product35ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz95496_ecru_1/female-ecru-molly-smith-sequin-knit-cut-out-beach-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product35ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz95496_ecru_xl_2/female-ecru-molly-smith-sequin-knit-cut-out-beach-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product35ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz95496_ecru_xl_3/female-ecru-molly-smith-sequin-knit-cut-out-beach-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ['s', 'm', 'l'])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product35Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product35Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    // 36
                    $product36 = [
                        'title' => 'MOLLY SMITH SEQUIN KNIT CUT OUT BEACH MAXI DRESS',
                        'description' => "
                            Shop spring staples with this piece from the Molly Smith x boohoo collection. Made for your spring plans, the collection takes inspo from Molly’s signature villa looks. In pretty pastels with pops of leopard and zebra prints, these styles have day-to-night dressing covered. Shop the full Molly Smith x boohoo edit on site now. Best dressed = secured.",
                        'price_new' => 22.50,
                        'price_old' => 30.00,
                        'quantity' => 21
                    ];

                    // Вставка продукта и получение его ID
                    $product36Id = DB::table('products')->insertGetId($product36);

                    // Вставка цвета продукта
                    $color7 = DB::table('colors')->where('name', 'pink')->first();
                    $product36ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product36Id,
                        'color_id' => $color7->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product36ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz91984_pink_xl/female-pink-molly-smith-ruched-slinky-cut-out-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product36ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz91984_pink_xl_1/female-pink-molly-smith-ruched-slinky-cut-out-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product36ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz91984_pink_xl_2/female-pink-molly-smith-ruched-slinky-cut-out-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product36ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz91984_pink_xl_3/female-pink-molly-smith-ruched-slinky-cut-out-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product36Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product36Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //37
                    $product37 = [
                        'title' => 'MOLLY SMITH COWL NECK TIE FRONT PRINTED MAXI DRESS',
                        'description' => "
                            Shop spring staples with this piece from the Molly Smith x boohoo collection. Made for your spring plans, the collection takes inspo from Molly’s signature villa looks. In pretty pastels with pops of leopard and zebra prints, these styles have day-to-night dressing covered. Shop the full Molly Smith x boohoo edit on site now. Best dressed = secured.",
                        'price_new' => 22.50,
                        'price_old' => 30.00,
                        'quantity' => 27
                    ];

                    // Вставка продукта и получение его ID
                    $product37Id = DB::table('products')->insertGetId($product37);

                    // Вставка цвета продукта
                    $color17 = DB::table('colors')->where('name', 'multi')->first();
                    $product37ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product37Id,
                        'color_id' => $color17->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product37ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz94131_multi_xl/female-multi-molly-smith-cowl-neck-tie-front-printed-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product37ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz94131_multi_xl_1/female-multi-molly-smith-cowl-neck-tie-front-printed-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product37ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz94131_multi_xl_2/female-multi-molly-smith-cowl-neck-tie-front-printed-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product37ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz94131_multi_xl_3/female-multi-molly-smith-cowl-neck-tie-front-printed-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product37Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product37Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    // 38
                    $product38 = [
                        'title' => 'MOLLY SMITH MIX PRINT BANDEAU LACE TRIM MAXI DRESS',
                        'description' => "
                            Shop spring staples with this piece from the Molly Smith x boohoo collection. Made for your spring plans, the collection takes inspo from Molly’s signature villa looks. In pretty pastels with pops of leopard and zebra prints, these styles have day-to-night dressing covered. Shop the full Molly Smith x boohoo edit on site now. Best dressed = secured.",
                        'price_new' => 21.00,
                        'price_old' => 28.00,
                        'quantity' => 36
                    ];

                    // Вставка продукта и получение его ID
                    $product38Id = DB::table('products')->insertGetId($product38);

                    // Вставка цвета продукта
                    $color4 = DB::table('colors')->where('name', 'brown')->first();
                    $product38ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product38Id,
                        'color_id' => $color4->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product38ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92889_brown_xl/female-brown-molly-smith-mix-print-bandeau-lace-trim-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product38ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92889_brown_xl_1/female-brown-molly-smith-mix-print-bandeau-lace-trim-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product38ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92889_brown_xl_2/female-brown-molly-smith-mix-print-bandeau-lace-trim-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product38ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92889_brown_xl_3/female-brown-molly-smith-mix-print-bandeau-lace-trim-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product38Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product38Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    // 39
                    $product39 = [
                        'title' => 'MOLLY SMITH BANDEAU RUFFLE ASSYMETRIC DEVORE MINI DRESS',
                        'description' => "
                            Shop spring staples with this piece from the Molly Smith x boohoo collection. Made for your spring plans, the collection takes inspo from Molly’s signature villa looks. In pretty pastels with pops of leopard and zebra prints, these styles have day-to-night dressing covered. Shop the full Molly Smith x boohoo edit on site now. Best dressed = secured.",
                        'price_new' => 21.00,
                        'price_old' => 28.00,
                        'quantity' => 36
                    ];

                    // Вставка продукта и получение его ID
                    $product39Id = DB::table('products')->insertGetId($product39);

                    // Вставка цвета продукта
                    $color16 = DB::table('colors')->where('name', 'white')->first();
                    $product39ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product39Id,
                        'color_id' => $color16->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product39ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz89419_white_xl/female-white-molly-smith-bandeau-ruffle-assymetric-devore-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product39ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz89419_white_xl_1/female-white-molly-smith-bandeau-ruffle-assymetric-devore-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product39ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz89419_white_xl_2/female-white-molly-smith-bandeau-ruffle-assymetric-devore-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product39ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz89419_white_xl_3/female-white-molly-smith-bandeau-ruffle-assymetric-devore-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product39Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product39Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //40
                    $product40 = [
                        'title' => 'MOLLY SMITH HALTER PRINTED RUFFLE MESH MINI DRESS',
                        'description' => "
                            Shop spring staples with this piece from the Molly Smith x boohoo collection. Made for your spring plans, the collection takes inspo from Molly’s signature villa looks. In pretty pastels with pops of leopard and zebra prints, these styles have day-to-night dressing covered. Shop the full Molly Smith x boohoo edit on site now. Best dressed = secured.",
                        'price_new' => 17.75,
                        'price_old' => 25.00,
                        'quantity' => 45
                    ];

                    // Вставка продукта и получение его ID
                    $product40Id = DB::table('products')->insertGetId($product40);

                    // Вставка цвета продукта
                    $color17 = DB::table('colors')->where('name', 'multi')->first();
                    $product40ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product40Id,
                        'color_id' => $color17->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product40ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92062_pink_xl/female-pink-molly-smith-halter-printed-ruffle-mesh-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product40ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92062_pink_xl_1/female-pink-molly-smith-halter-printed-ruffle-mesh-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product40ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92062_pink_xl_2/female-pink-molly-smith-halter-printed-ruffle-mesh-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product40ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92062_pink_xl_3/female-pink-molly-smith-halter-printed-ruffle-mesh-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product40Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product40Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //41
                    $product41 = [
                        'title' => 'MOLLY SMITH FLORAL TIE FRONT MAXI DRESS',
                        'description' => "
                            Shop spring staples with this piece from the Molly Smith x boohoo collection. Made for your spring plans, the collection takes inspo from Molly’s signature villa looks. In pretty pastels with pops of leopard and zebra prints, these styles have day-to-night dressing covered. Shop the full Molly Smith x boohoo edit on site now. Best dressed = secured.",
                        'price_new' => 22.50,
                        'price_old' => 30.00,
                        'quantity' => 11
                    ];

                    // Вставка продукта и получение его ID
                    $product41Id = DB::table('products')->insertGetId($product41);

                    // Вставка цвета продукта
                    $color7 = DB::table('colors')->where('name', 'pink')->first();
                    $product41ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product41Id,
                        'color_id' => $color7->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product41ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92888_pink_xl/female-pink-molly-smith-floral-tie-front-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product41ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92888_pink_xl_1/female-pink-molly-smith-floral-tie-front-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product41ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92888_pink_xl_2/female-pink-molly-smith-floral-tie-front-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product41ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92888_pink_xl_3/female-pink-molly-smith-floral-tie-front-maxi-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product41Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product41Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //42 
                    $product42 = [
                        'title' => 'MOLLY SMITH MIX PRINT RUCHED MINI DRESS',
                        'description' => "
                            Shop spring staples with this piece from the Molly Smith x boohoo collection. Made for your spring plans, the collection takes inspo from Molly’s signature villa looks. In pretty pastels with pops of leopard and zebra prints, these styles have day-to-night dressing covered. Shop the full Molly Smith x boohoo edit on site now. Best dressed = secured.",
                        'price_new' => 21.00,
                        'price_old' => 28.00,
                        'quantity' => 111
                    ];

                    // Вставка продукта и получение его ID
                    $product42Id = DB::table('products')->insertGetId($product42);

                    // Вставка цвета продукта
                    $color4 = DB::table('colors')->where('name', 'brown')->first();
                    $product42ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product42Id,
                        'color_id' => $color4->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product42ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92887_brown_xl/female-brown-molly-smith-mix-print-ruched-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product42ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92887_brown_xl_1/female-brown-molly-smith-mix-print-ruched-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product42ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92887_brown_xl_2/female-brown-molly-smith-mix-print-ruched-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product42ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz92887_brown_xl_3/female-brown-molly-smith-mix-print-ruched-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product42Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product42Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //43
                    $product43 = [
                        'title' => 'MOLLY SMITH MIX PRINT TIE FRONT MESH CAMI TOP',
                        'description' => "
                            Shop spring staples with this piece from the Molly Smith x boohoo collection. Made for your spring plans, the collection takes inspo from Molly’s signature villa looks. In pretty pastels with pops of leopard and zebra prints, these styles have day-to-night dressing covered. Shop the full Molly Smith x boohoo edit on site now. Best dressed = secured.",
                        'price_new' => 11.00,
                        'price_old' => 16.00,
                        'quantity' => 111
                    ];

                    // Вставка продукта и получение его ID
                    $product43Id = DB::table('products')->insertGetId($product43);

                    // Вставка цвета продукта
                    $color4 = DB::table('colors')->where('name', 'brown')->first();
                    $product43ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product43Id,
                        'color_id' => $color4->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product43ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz94038_brown_xl/female-brown-molly-smith-mix-print-tie-front-mesh-cami-top?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product43ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz94038_brown_xl_1/female-brown-molly-smith-mix-print-tie-front-mesh-cami-top?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product43ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz94038_brown_xl_2/female-brown-molly-smith-mix-print-tie-front-mesh-cami-top?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product43ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz94038_brown_xl_4/female-brown-molly-smith-mix-print-tie-front-mesh-cami-top?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product43Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'top'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product43Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //44
                    $product44 = [
                        'title' => 'MOLLY SMITH BANDEAU TRIM CUT OUT MINI DRESS',
                        'description' => "
                            Shop spring staples with this piece from the Molly Smith x boohoo collection. Made for your spring plans, the collection takes inspo from Molly’s signature villa looks. In pretty pastels with pops of leopard and zebra prints, these styles have day-to-night dressing covered. Shop the full Molly Smith x boohoo edit on site now. Best dressed = secured.",
                        'price_new' => 18.75,
                        'price_old' => 25.00,
                        'quantity' => 27
                    ];

                    // Вставка продукта и получение его ID
                    $product44Id = DB::table('products')->insertGetId($product44);

                    // Вставка цвета продукта
                    $color29 = DB::table('colors')->where('name', 'yellow')->first();
                    $product44ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product44Id,
                        'color_id' => $color29->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product44ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz91920_yellow_xl/female-yellow-molly-smith-bandeau-trim-cut-out-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product44ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz91920_yellow_xl_1/female-yellow-molly-smith-bandeau-trim-cut-out-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product44ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz91920_yellow_xl_2/female-yellow-molly-smith-bandeau-trim-cut-out-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product44ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz91920_yellow_xl_3/female-yellow-molly-smith-bandeau-trim-cut-out-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product44Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product44Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //45
                    $product45 = [
                        'title' => 'MOLLY SMITH BANDEAU TRIM CUT OUT MINI DRESS',
                        'description' => "
                            Shop spring staples with this piece from the Molly Smith x boohoo collection. Made for your spring plans, the collection takes inspo from Molly’s signature villa looks. In pretty pastels with pops of leopard and zebra prints, these styles have day-to-night dressing covered. Shop the full Molly Smith x boohoo edit on site now. Best dressed = secured.",
                        'price_new' => 16.50,
                        'price_old' => 22.00,
                        'quantity' => 276
                    ];

                    // Вставка продукта и получение его ID
                    $product45Id = DB::table('products')->insertGetId($product45);

                    // Вставка цвета продукта
                    $color19 = DB::table('colors')->where('name', 'hot-pink')->first();
                    $product45ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product45Id,
                        'color_id' => $color19->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product45ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz91966_hot%20pink_xl/female-hot%20pink-molly-smith-plunge-zebra-acetate-slinky-cut-out-mini-dress-?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product45ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz91966_hot%20pink_xl_1/female-hot%20pink-molly-smith-plunge-zebra-acetate-slinky-cut-out-mini-dress-',
                        ],
                        [
                            'product_color_id' => $product45ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz91966_hot%20pink_xl_2/female-hot%20pink-molly-smith-plunge-zebra-acetate-slinky-cut-out-mini-dress-',
                        ],
                        [
                            'product_color_id' => $product45ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz91966_hot%20pink_xl_3/female-hot%20pink-molly-smith-plunge-zebra-acetate-slinky-cut-out-mini-dress-',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product45Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'dresses'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product45Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //46
                    $product46 = [
                        'title' => 'RELAXED FIT CARGO TROUSERS',
                        'description' => "
                            Stay on trend this season and invest in a pair of cargo pants from our latest collection. Want a look that’s comfortable yet flattering? Cargo trousers are the way to go. Bring a new energy to your wardrobe with these military-inspired trousers; complete with pocket detailing, these loosely cut trousers bridge the gap between comfy and cool. ",
                        'price_new' => 7.00,
                        'price_old' => 22.00,
                        'quantity' => 27
                    ];

                    // Вставка продукта и получение его ID
                    $product46Id = DB::table('products')->insertGetId($product46);

                    // Вставка цвета продукта
                    $color3 = DB::table('colors')->where('name', 'black')->first();
                    $product46ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product46Id,
                        'color_id' => $color3->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product46ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/fzz25478_black_xl/female-black-relaxed-fit-cargo-trousers?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product46ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/fzz25478_black_xl_1/female-black-relaxed-fit-cargo-trousers?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product46ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/fzz25478_black_xl_2/female-black-relaxed-fit-cargo-trousers?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product46ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/fzz25478_black_xl_3/female-black-relaxed-fit-cargo-trousers?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "l", "xl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product46Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'trousers'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product46Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    // 47
                    $product47 = [
                        'title' => 'LEOPARD WIDE LEG TIE WAIST TROUSER',
                        'description' => "
                            Stay on trend this season and invest in a pair of cargo pants from our latest collection. Want a look that’s comfortable yet flattering? Cargo trousers are the way to go. Bring a new energy to your wardrobe with these military-inspired trousers; complete with pocket detailing, these loosely cut trousers bridge the gap between comfy and cool. ",
                        'price_new' => 7.00,
                        'price_old' => 22.00,
                        'quantity' => 27
                    ];

                    // Вставка продукта и получение его ID
                    $product47Id = DB::table('products')->insertGetId($product47);

                    // Вставка цвета продукта
                    $color4 = DB::table('colors')->where('name', 'brown')->first();
                    $product47ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product47Id,
                        'color_id' => $color4->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product47ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz98556_brown_xl/female-brown-leopard-wide-leg-tie-waist-trouser?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product47ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz98556_brown_xl_1/female-brown-leopard-wide-leg-tie-waist-trouser?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product47ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz98556_brown_xl_2/female-brown-leopard-wide-leg-tie-waist-trouser?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product47ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz98556_brown_xl_3/female-brown-leopard-wide-leg-tie-waist-trouser?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product47Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', 'trousers'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product47Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    // 48
                    $product48 = [
                        'title' => 'DOUBLE CARGO POCKET STRAIGHT LEG JOGGER',
                        'description' => "
                            If the last two years have got you hooked on wearing joggers, the good news is, you don’t have to give them up to serve fire looks. These khaki cargo joggers are loosely cut and cuffed at the ankle, with pocket detailing and a waist-cinching effect - who says your comfies can’t be cute? If you’re looking for new casual faves, the scroll ends with cargo joggers.",
                        'price_new' => 10.00,
                        'price_old' => 20.00,
                        'quantity' => 60
                    ];

                    // Вставка продукта и получение его ID
                    $product48Id = DB::table('products')->insertGetId($product48);

                    // Вставка цвета продукта
                    $color18 = DB::table('colors')->where('name', 'stone')->first();
                    $product48ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product48Id,
                        'color_id' => $color18->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product48ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz77273_stone_xl/female-stone-double-cargo-pocket-straight-leg-jogger?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product48ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz77273_stone_xl_1/female-stone-double-cargo-pocket-straight-leg-jogger?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product48ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz77273_stone_xl_2/female-stone-double-cargo-pocket-straight-leg-jogger?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product48ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz77273_stone_xl_3/female-stone-double-cargo-pocket-straight-leg-jogger?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["s", "m", "l", "xl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product48Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'joggers'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product48Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //49
                    $product49 = [
                        'title' => 'DOUBLE CARGO POCKET STRAIGHT LEG JOGGER',
                        'description' => "
                            If the last two years have got you hooked on wearing joggers, the good news is, you don’t have to give them up to serve fire looks. These khaki cargo joggers are loosely cut and cuffed at the ankle, with pocket detailing and a waist-cinching effect - who says your comfies can’t be cute? If you’re looking for new casual faves, the scroll ends with cargo joggers.",
                        'price_new' => 12.00,
                        'price_old' => 20.00,
                        'quantity' => 44
                    ];

                    // Вставка продукта и получение его ID
                    $product49Id = DB::table('products')->insertGetId($product49);

                    // Вставка цвета продукта
                    $color3 = DB::table('colors')->where('name', 'black')->first();
                    $product49ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product49Id,
                        'color_id' => $color3->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product49ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz77273_black_xl/female-black-double-cargo-pocket-straight-leg-jogger?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product49ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz77273_black_xl_1/female-black-double-cargo-pocket-straight-leg-jogger?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product49ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz77273_black_xl_2/female-black-double-cargo-pocket-straight-leg-jogger?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product49ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz77273_black_xl_3/female-black-double-cargo-pocket-straight-leg-jogger?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product49Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'joggers'])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product49Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    // 50
                    $product50 = [
                        'title' => 'BOW DETAIL PLEATED DENIM MINI SKIRT',
                        'description' => "
                            Skirts are the statement separate in every wardrobe.This season it's all about having fun with your hemline. Mix it up in minis, midis and maxis or go matchy-matchy and co-ordinate with a crop top. Push the boundaries in pleated pastels and fondant shade full circle styles, updating with a holographic clutch for a cool colour clash. Flirt with the skirt for your favourite every day and evening ensembles.",
                        'price_new' => 18.75,
                        'price_old' => 25.00,
                        'quantity' => 146
                    ];

                    // Вставка продукта и получение его ID
                    $product50Id = DB::table('products')->insertGetId($product50);

                    // Вставка цвета продукта
                    $color30 = DB::table('colors')->where('name', 'denim')->first();
                    $product50ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product50Id,
                        'color_id' => $color30->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product50ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02660_denim_xl/female-denim-bow-detail-pleated-denim-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product50ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02660_denim_xl_1/female-denim-bow-detail-pleated-denim-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product50ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02660_denim_xl_2/female-denim-bow-detail-pleated-denim-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product50ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02660_denim_xl_3/female-denim-bow-detail-pleated-denim-mini-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product50Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', "skirt"])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product50Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //51
                    $product51 = [
                        'title' => 'RUCHED SLEEVE BLAZER',
                        'description' => "
                            The rules of Friday-night dressing have changed and soft tailoring is hot AF right now. Simply throw on this ruched-sleeve blazer over your separates for instant sass as you head out with the gang. With 3/4 sleeves and side-slit pockets, this ruched-sleeve jacket is your fast-track route to bossin' styling.",
                        'price_new' => 15.00,
                        'price_old' => 40.00,
                        'quantity' => 289
                    ];

                    // Вставка продукта и получение его ID
                    $product51Id = DB::table('products')->insertGetId($product51);

                    // Вставка цвета продукта
                    $color12 = DB::table('colors')->where('name', 'camel')->first();
                    $product51ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product51Id,
                        'color_id' => $color12->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product51ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/dzz81444_camel_xl/female-camel-ruched-sleeve-blazer?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product51ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/dzz81444_camel_xl_1/female-camel-ruched-sleeve-blazer?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product51ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/dzz81444_camel_xl_2/female-camel-ruched-sleeve-blazer?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product51ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/dzz81444_camel_xl_3/female-camel-ruched-sleeve-blazer?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["s", "m", "l", "xl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product51Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', "blazer"])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product51Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //52
                    $product51 = [
                        'title' => 'RUCHED SLEEVE BLAZER',
                        'description' => "
                            The rules of Friday-night dressing have changed and soft tailoring is hot AF right now. Simply throw on this ruched-sleeve blazer over your separates for instant sass as you head out with the gang. With 3/4 sleeves and side-slit pockets, this ruched-sleeve jacket is your fast-track route to bossin' styling.",
                        'price_new' => 36.00,
                        'price_old' => 40.00,
                        'quantity' => 522
                    ];

                    // Вставка продукта и получение его ID
                    $product51Id = DB::table('products')->insertGetId($product51);

                    // Вставка цвета продукта
                    $color3 = DB::table('colors')->where('name', 'black')->first();
                    $product51ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product51Id,
                        'color_id' => $color3->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product51ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/dzz81444_black_xl/female-black-ruched-sleeve-blazer?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product51ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/dzz81444_black_xl_1/female-black-ruched-sleeve-blazer?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product51ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/dzz81444_black_xl_2/female-black-ruched-sleeve-blazer?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product51ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/dzz81444_black_xl_3/female-black-ruched-sleeve-blazer?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["s", "m", "l"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product51Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', "blazer"])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product51Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //53
                    $product53 = [
                        'title' => 'MOCK HORN BUTTON TAILORED MINI DRESS',
                        'description' => "
                            Dresses are the most-wanted wardrobe item for day-to-night dressing.From cool-tone whites to block brights, we've got the everyday skater dresses and party-ready bodycon styles that are perfect for transitioning from day to play. ",
                        'price_new' => 24.50,
                        'price_old' => 35.00,
                        'quantity' => 246
                    ];

                    // Вставка продукта и получение его ID
                    $product53Id = DB::table('products')->insertGetId($product53);

                    // Вставка цвета продукта
                    $color31 = DB::table('colors')->where('name', 'chocolate')->first();
                    $product53ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product53Id,
                        'color_id' => $color31->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product53ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02638_chocolate_xl/female-chocolate-mock-horn-button-tailored-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product53ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02638_chocolate_xl_1/female-chocolate-mock-horn-button-tailored-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product53ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02638_chocolate_xl_2/female-chocolate-mock-horn-button-tailored-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product53ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02638_chocolate_xl_3/female-chocolate-mock-horn-button-tailored-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product53Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', "dresses"])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product53Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //54
                    $product54 = [
                        'title' => 'HIGH NECK STRUCTURED TAILORED MINI DRESS',
                        'description' => "
                            Every girl's wardrobe should include a classic skater dress, and we think this one is a pretty good starting point. Comprised of a fitted bodice with a flared skirt, this is a style that flatters all body shapes. Figure balancing, super flattering, and seriously easy to style, dress up with heels or down with trainers, depending on your vibe.",
                        'price_new' => 19.60,
                        'price_old' => 28.00,
                        'quantity' => 222
                    ];

                    // Вставка продукта и получение его ID
                    $product54Id = DB::table('products')->insertGetId($product54);

                    // Вставка цвета продукта
                    $color25 = DB::table('colors')->where('name', 'mocha')->first();
                    $product54ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product54Id,
                        'color_id' => $color25->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product54ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02633_mocha_xl/female-mocha-high-neck-structured-tailored-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product54ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02633_mocha_xl_1/female-mocha-high-neck-structured-tailored-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product54ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02633_mocha_xl_2/female-mocha-high-neck-structured-tailored-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product54ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02633_mocha_xl_3/female-mocha-high-neck-structured-tailored-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product54Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', "dresses"])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product54Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //55
                    $product55 = [
                        'title' => 'SLASH NECK MOCK HORN MINI DRESS',
                        'description' => "
                            Every girl's wardrobe should include a classic skater dress, and we think this one is a pretty good starting point. Comprised of a fitted bodice with a flared skirt, this is a style that flatters all body shapes. Figure balancing, super flattering, and seriously easy to style, dress up with heels or down with trainers, depending on your vibe.",
                        'price_new' => 25.20,
                        'price_old' => 36.00,
                        'quantity' => 222
                    ];

                    // Вставка продукта и получение его ID
                    $product55Id = DB::table('products')->insertGetId($product55);

                    // Вставка цвета продукта
                    $color32 = DB::table('colors')->where('name', 'butter')->first();
                    $product55ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product55Id,
                        'color_id' => $color32->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product55ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02631_butter_xl/female-butter-slash-neck-mock-horn-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product55ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02631_butter_xl_1/female-butter-slash-neck-mock-horn-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product55ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02631_butter_xl_2/female-butter-slash-neck-mock-horn-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product55ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/hzz02631_butter_xl_3/female-butter-slash-neck-mock-horn-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product55Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', "dresses"])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product55Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //56
                    $product56 = [
                        'title' => 'HALTERNECK STRAPPY SKATER DRESS',
                        'description' => "
                            Every girl's wardrobe should include a classic skater dress, and we think this one is a pretty good starting point. Comprised of a fitted bodice with a flared skirt, this is a style that flatters all body shapes. Figure balancing, super flattering, and seriously easy to style, dress up with heels or down with trainers, depending on your vibe.",
                        'price_new' => 15.40,
                        'price_old' => 22.00,
                        'quantity' => 27
                    ];

                    // Вставка продукта и получение его ID
                    $product56Id = DB::table('products')->insertGetId($product56);

                    // Вставка цвета продукта
                    $color15 = DB::table('colors')->where('name', 'orange')->first();
                    $product56ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product56Id,
                        'color_id' => $color15->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product56ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz82117_orange_xl/female-orange-halterneck-strappy-skater-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product56ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz82117_orange_xl_1/female-orange-halterneck-strappy-skater-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product56ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz82117_orange_xl_2/female-orange-halterneck-strappy-skater-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product56ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz82117_orange_xl_3/female-orange-halterneck-strappy-skater-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product56Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', "dresses"])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product56Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //57
                    $product57 = [
                        'title' => 'VOLUME SLEEVE TIE WAIST BLAZER DRESS',
                        'description' => "
                            Every girl's wardrobe should include a classic skater dress, and we think this one is a pretty good starting point. Comprised of a fitted bodice with a flared skirt, this is a style that flatters all body shapes. Figure balancing, super flattering, and seriously easy to style, dress up with heels or down with trainers, depending on your vibe.",
                        'price_new' => 11.00,
                        'price_old' => 30.00,
                        'quantity' => 27
                    ];

                    // Вставка продукта и получение его ID
                    $product57Id = DB::table('products')->insertGetId($product57);

                    // Вставка цвета продукта
                    $color33 = DB::table('colors')->where('name', 'red')->first();
                    $product57ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product57Id,
                        'color_id' => $color33->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product57ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz76426_red_xl/female-red-volume-sleeve-tie-waist-blazer-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product57ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz76426_red_xl_1/female-red-volume-sleeve-tie-waist-blazer-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product57ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz76426_red_xl_2/female-red-volume-sleeve-tie-waist-blazer-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product57ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz76426_red_xl_3/female-red-volume-sleeve-tie-waist-blazer-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product57Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', "dresses"])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product57Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //58
                    $product58 = [
                        'title' => 'PRINTED HALTERNECK STRAPPY SKATER DRESS',
                        'description' => "
                            Every girl's wardrobe should include a classic skater dress, and we think this one is a pretty good starting point. Comprised of a fitted bodice with a flared skirt, this is a style that flatters all body shapes. Figure balancing, super flattering, and seriously easy to style, dress up with heels or down with trainers, depending on your vibe.",
                        'price_new' => 10.00,
                        'price_old' => 22.00,
                        'quantity' => 13
                    ];

                    // Вставка продукта и получение его ID
                    $product58Id = DB::table('products')->insertGetId($product58);

                    // Вставка цвета продукта
                    $color17 = DB::table('colors')->where('name', 'multi')->first();
                    $product58ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product58Id,
                        'color_id' => $color17->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product58ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz82116_multi_xl/female-multi-printed-halterneck-strappy-skater-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product58ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz82116_multi_xl_1/female-multi-printed-halterneck-strappy-skater-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product58ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz82116_multi_xl_2/female-multi-printed-halterneck-strappy-skater-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product58ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz82116_multi_xl_3/female-multi-printed-halterneck-strappy-skater-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product58Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', "dresses"])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product58Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //59
                    $product59 = [
                        'title' => 'BENGALINE BOW DETAIL PLUNGE MINI DRESS',
                        'description' => "
                            Every girl's wardrobe should include a classic skater dress, and we think this one is a pretty good starting point. Comprised of a fitted bodice with a flared skirt, this is a style that flatters all body shapes. Figure balancing, super flattering, and seriously easy to style, dress up with heels or down with trainers, depending on your vibe.",
                        'price_new' => 11.00,
                        'price_old' => 22.00,
                        'quantity' => 130
                    ];

                    // Вставка продукта и получение его ID
                    $product59Id = DB::table('products')->insertGetId($product59);

                    // Вставка цвета продукта
                    $color34 = DB::table('colors')->where('name', 'taupe')->first();
                    $product59ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product59Id,
                        'color_id' => $color34->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product59ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz79683_taupe_xl/female-taupe-bengaline-bow-detail-plunge-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product59ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz79683_taupe_xl_1/female-taupe-bengaline-bow-detail-plunge-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product59ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz79683_taupe_xl_2/female-taupe-bengaline-bow-detail-plunge-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product59ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz79683_taupe_xl_3/female-taupe-bengaline-bow-detail-plunge-mini-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product59Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', "dresses"])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product59Id,
                            'category_id' => $categoryId,
                        ]);
                    }
                    //60
                    $product60 = [
                        'title' => 'PETITE FLORAL SATIN DOUBLE HEM SKATER DRESS',
                        'description' => "
                            Every girl's wardrobe should include a classic skater dress, and we think this one is a pretty good starting point. Comprised of a fitted bodice with a flared skirt, this is a style that flatters all body shapes. Figure balancing, super flattering, and seriously easy to style, dress up with heels or down with trainers, depending on your vibe.",
                        'price_new' => 13.00,
                        'price_old' => 28.00,
                        'quantity' => 130
                    ];

                    // Вставка продукта и получение его ID
                    $product60Id = DB::table('products')->insertGetId($product60);

                    // Вставка цвета продукта
                    $color7 = DB::table('colors')->where('name', 'pink')->first();
                    $product60ColorId = DB::table('product_colors')->insertGetId([
                        'product_id' => $product60Id,
                        'color_id' => $color7->id,
                    ]);

                    // Вставка изображений продукта
                    DB::table('product_color_images')->insert([
                        [
                            'product_color_id' => $product60ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz89054_pink_xl/female-pink-petite-floral-satin-double-hem-skater-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product60ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz89054_pink_xl_1/female-pink-petite-floral-satin-double-hem-skater-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product60ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz89054_pink_xl_2/female-pink-petite-floral-satin-double-hem-skater-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                        [
                            'product_color_id' => $product60ColorId,
                            'image_path' => 'https://media.boohoo.com/i/boohoo/gzz89054_pink_xl_3/female-pink-petite-floral-satin-double-hem-skater-dress?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                        ],
                    ]);

                    // Вставка размеров продукта
                    $sizeIds = DB::table('sizes')
                        ->whereIn('name', ["xs", "s", "m", "l", "xl", "xxl"])
                        ->pluck('id');
                    foreach ($sizeIds as $sizeId) {
                        DB::table('product_sizes')->insert([
                            'product_id' => $product60Id,
                            'size_id' => $sizeId,
                        ]);
                    }

                    // Добавление продукта в категории
                    $categories = DB::table('categories')->whereIn('name', ['trends', 'summer', "dresses"])->pluck('id');
                    foreach ($categories as $categoryId) {
                        DB::table('categories_merge')->insert([
                            'product_id' => $product60Id,
                            'category_id' => $categoryId,
                        ]);
                    }

        });
    }
}
