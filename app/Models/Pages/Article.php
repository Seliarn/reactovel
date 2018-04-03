<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model implements Pages\IPage
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
}
