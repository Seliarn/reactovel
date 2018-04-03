<?php
/**
 * Created by PhpStorm.
 * User: autodoc
 * Date: 02.04.18
 * Time: 17:10
 */

namespace App\Models\Category;


interface ICategory
{
    public function getChildren(ICategory $parent = null);

    public function getPages(ICategory $category);
}