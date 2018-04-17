<?php
/**
 * Created by PhpStorm.
 * User: autodoc
 * Date: 03.04.18
 * Time: 12:35
 */

namespace App\Http\Controllers;


class EntityController extends Controller
{

    public function index()
    {
//        return Article::all();
    }

    public function show(IPage $article)
    {
        return $article;
    }

    public function create(Request $request)
    {
        $Article = Article::create($request->all());

        return response()->json($Article, 201);
    }

    public function update(Request $request, Article $Article)
    {
        $Article->update($request->all());

        return response()->json($Article, 200);
    }

    public function delete(Article $Article)
    {
        $Article->delete();

        return response()->json(null, 204);
    }
}