<?php
/**
 * Created by PhpStorm.
 * User: autodoc
 * Date: 03.04.18
 * Time: 12:30
 */

namespace App\Http\Controllers\Common;

use App\Models\Article;
use App\Models\Pages\IPage;
use Illuminate\Http\Request;

/**
 * Class ArticlesController
 * @package App\Http\Controllers\Common
 */
class ArticlesController extends EntityController
{
    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Article::all();
    }

    /**
     * @param IPage $article
     * @return IPage
     */
    public function show(IPage $article)
    {
        return $article;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $article = Article::create($request->all());

        return response()->json($article, 201);
    }

    /**
     * @param Request $request
     * @param Article $article
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Article $article)
    {
        $article->update($request->all());

        return response()->json($article, 200);
    }

    /**
     * @param Article $article
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function delete(Article $article)
    {
        $article->delete();

        return response()->json(null, 204);
    }
}