<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; // Import DB facade

class SafariSeeder extends Seeder
{
    public function run()
    {
        $images = [
            'card1.jpg',
            'card2.jpg',
            'card3.jpg'
        ];

        $safaris = [
            [
                'title' => 'Mount Pulag Trek',
                'min_guests' => 2,
                'location' => 'Mount Pulag',
                'price' => 800,
                'image' => $images[array_rand($images)],
            ],
            [
                'title' => 'Banaue Rice Terraces',
                'min_guests' => 4,
                'location' => 'Banaue',
                'price' => 1200,
                'image' => $images[array_rand($images)],
            ],
            [
                'title' => 'Chocolate Hills Adventure',
                'min_guests' => 2,
                'location' => 'Bohol',
                'price' => 1500,
                'image' => $images[array_rand($images)],
            ],
        ];

        foreach ($safaris as $safari) {
            DB::table('safaris')->insert($safari);
        }
    }
}
