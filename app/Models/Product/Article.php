<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model implements ProductInterface
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'content',
        'url',
        'meta_keywords',
        'meta_title',
        'meta_description',
        'publish_date'
    ];

    //
    public function getContent()
    {
        // TODO: Implement getContent() method.
    }

    public function getTitle()
    {
        // TODO: Implement getTitle() method.
    }


    function getProductDataForOrder()
    {
        return [
            'product_id' => $this->id,
            'title' => $this->title,
            'price' => $this->price
        ];
    }
}
