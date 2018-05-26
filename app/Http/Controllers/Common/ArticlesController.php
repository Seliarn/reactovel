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
use App\Models\NotifyManager;
use App\Models\Order\Generators\HtmlOrderGenerator;
use App\Models\Order\OrderManager;
use App\Models\Sender\Email;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ArticlesController
 * @package App\Http\Controllers\Common
 */
class ArticlesController extends Controller
{
	const MAIL_SUBJECT = 'Your order #';

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
		$article = Article::find($id);
		return response()->json([
			'data' => [
				'content' => [$article],
				'meta' => [
					'totalCount' => $article->count()
				]
			]
		], Response::HTTP_OK);
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
		$validatedData = $request->validate([
			'email' => 'required|email|max:255',
			'articleId' => 'required|integer',
		]);

		if ($article = Article::find($validatedData['articleId'])) {
			$orderManager = new OrderManager();
			$result = $orderManager->generateOrder($article, new HtmlOrderGenerator());

			$subject = self::MAIL_SUBJECT . $orderManager->getOrder();
			$email = new Email($validatedData['email'], $subject, $result);
			$notifyManager = new NotifyManager();
			$notifyManager->notify($email);

			return response()->json(true, Response::HTTP_CREATED);
		} else {
			response()->json(null, Response::HTTP_NO_CONTENT);
		}
	}
}