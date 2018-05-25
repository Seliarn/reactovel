<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('product_id', false, true)->nullable();
            $table->string('title', 255)->nullable();
            $table->text('description')->nullable();
            $table->decimal('price', 8, 4)->default(0);
            $table->integer('state', false, true)->default(1);
            $table->timestamps();
        });

        Schema::table('articles', function (Blueprint $table) {
            $table->decimal('price', 8, 4)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
        Schema::table('articles', function (Blueprint $table) {
            $table->dropColumn(['price']);
        });
    }
}
