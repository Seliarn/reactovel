<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
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
            \App\Models\Categories::create([
                'title' => $faker->title,
                'description' => $faker->paragraph,
                'alias' => $faker->title
            ]);
        }
    }
}
