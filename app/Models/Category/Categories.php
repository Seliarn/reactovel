<?php

namespace App\Models;

use App\Models\Category\ICategory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model implements Category\ICategory
{
    public function getChildren(ICategory $parent = null)
    {
        // TODO: Implement getChildren() method.
    }
}
