<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model implements OrderInterface
{
    const STATE_NEW = 1;
    const STATE_IN_PROGRESS = 2;
    const STATE_SENT = 3;
    const STATE_PAUSED = 4;
    const STATE_CANCELED = 5;
    const STATE_FINISHED = 6;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'product_id',
        'description',
        'price',
        'email'
    ];

    /**
     * @param Article $product
     */

    function appendProduct(ProductInterface $product)
    {
        $this->product_id = $product->getAttribute('id');
        $this->title = $product->getAttribute('title');
        $this->price = $product->getAttribute('price');

        return $this->save();
    }
}