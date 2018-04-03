<?php

namespace App\Models;

use App\Models\Category\ICategory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model implements Category\ICategory
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'alias'
    ];

    public function getChildren(ICategory $parent = null)
    {
        // TODO: Implement getChildren() method.
    }

    public function getPages(ICategory $category)
    {
        // TODO: Implement getPages() method.
    }
}
