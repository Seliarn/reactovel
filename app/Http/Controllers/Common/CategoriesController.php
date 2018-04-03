<?php
/**
 * Created by PhpStorm.
 * User: autodoc
 * Date: 03.04.18
 * Time: 18:16
 */

namespace App\Http\Controllers\Common;


class CategoriesController
{
    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Category::all();
    }

    /**
     * @param IPage $category
     * @return IPage
     */
    public function show($id)
    {
        return Category::find($id);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $category = Category::create($request->all());

        return response()->json($category, 201);
    }

    /**
     * @param Request $request
     * @param Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Category $category)
    {
        $category->update($request->all());

        return response()->json($category, 200);
    }

    /**
     * @param Category $category
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function delete(Category $category)
    {
        $category->delete();

        return response()->json(null, 204);
    }
}