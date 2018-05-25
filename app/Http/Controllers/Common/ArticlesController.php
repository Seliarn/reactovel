<?php
/**
 * Created by PhpStorm.
 * User: autodoc
 * Date: 03.04.18
 * Time: 12:30
 */

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Order\OrderManager;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ArticlesController
 * @package App\Http\Controllers\Common
 */
class ArticlesController extends Controller
{
    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        $articles = Article::all();
        return response()->json([
            'data' => [
                'content' => $articles,
                'meta' => [
                    'totalCount' => $articles->count()
                ]
            ]
        ], Response::HTTP_OK);
    }

    public function show($id)
    {
        return Article::find($id);
    }

    public function create(Request $request)
    {
        $article = Article::create($request->all());

        return response()->json($article, Response::HTTP_CREATED);
    }

    public function update(Request $request, Article $article)
    {
        $article->update($request->all());

        return response()->json($article, Response::HTTP_OK);
    }

    public function delete(Article $article)
    {
        $article->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }

    public function buy(Request $request)
    {
        $productId = $request->get('productId', false);
        if ($productId && $article = Article::find($productId)) {
            $ordermanager = new OrderManager();
            return $ordermanager->generateOrder($article, 'html');
        }
    }
}