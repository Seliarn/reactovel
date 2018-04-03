<?php

use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        // Create 50 product records
        for ($i = 0; $i < 50; $i++) {
            \App\Models\Article::create([
                'title' => $faker->title,
                'content' => $faker->paragraph,
                'url' => $faker->paragraph,
                'meta_keywords' => $faker->paragraph,
                'meta_description' => $faker->paragraph,
                'meta_title' => $faker->paragraph,
                'publish_date' => $faker->unixTime
            ]);
        }
    }
}
