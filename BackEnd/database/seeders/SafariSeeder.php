<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SafariSeeder extends Seeder
{
    public function run()
    {
        $safaris = [
            [
                'title' => 'Mount Pulag Trek',
                'min_guests' => 2,
                'location' => 'Mount Pulag',
                'price' => 800,
                'image' => 'pulag.jpg',
                'description' => 'Experience the breathtaking beauty of Mount Pulag, the highest peak in Luzon.',
                'inclusions' => "- All entrance and exit fees\n- Camping equipment\n- Guide fees\n- 3 meals per day\n- Transportation from Baguio City",
                'exclusions' => "- Personal expenses\n- Travel insurance\n- Tips for guides",
                'additional_info' => 'This trek is available for joiners from all over the Philippines. A good level of fitness is required.',
            ],
            [
                'title' => 'Banaue Rice Terraces',
                'min_guests' => 4,
                'location' => 'Banaue',
                'price' => 1200,
                'image' => 'tereces.jpg',
                'description' => 'Explore the ancient Banaue Rice Terraces, often called the "Eighth Wonder of the World".',
                'inclusions' => "- Guided tour of the terraces\n- Traditional Ifugao lunch\n- Jeepney ride to viewpoints\n- Entrance fees",
                'exclusions' => "- Accommodation\n- Transportation to and from Banaue\n- Personal expenses",
                'additional_info' => 'This tour is suitable for all ages. Wear comfortable walking shoes.',
            ],
            [
                'title' => 'Chocolate Hills Adventure',
                'min_guests' => 2,
                'location' => 'Bohol',
                'price' => 1500,
                'image' => 'hills.jpg',
                'description' => 'Discover the unique landscape of the Chocolate Hills and enjoy exciting adventures in Bohol.',
                'inclusions' => "- Entrance to Chocolate Hills Complex\n- Loboc River Cruise with lunch\n- Visit to Tarsier Sanctuary\n- ATV ride",
                'exclusions' => "- Flights to and from Bohol\n- Hotel accommodation\n- Personal expenses",
                'additional_info' => 'This adventure tour combines natural wonders with exciting activities. Suitable for families and adventure seekers.',
            ],
        ];

        foreach ($safaris as $safari) {
            DB::table('safaris')->insert($safari);
        }
    }
}