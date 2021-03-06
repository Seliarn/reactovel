<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:api')
    ->get('/user', function (Request $request) {
        var_dump($request->user());
        return $request->user();
    });
*/

Route::get('articles', '\App\Http\Controllers\Common\ArticlesController@index');
Route::post('articles/buy', '\App\Http\Controllers\Common\ArticlesController@buy');
Route::get('articles/{id}', '\App\Http\Controllers\Common\ArticlesController@show');

Route::get('categories', '\App\Http\Controllers\Common\ArticlesController@index');
Route::get('categories/{id}', '\App\Http\Controllers\Common\ArticlesController@show');


Route::group(['middleware' => ['auth:api']], function () {
    Route::post('articles', '\App\Http\Controllers\Common\ArticlesController@create');
    Route::put('articles/{id}', '\App\Http\Controllers\Common\ArticlesController@update');
    Route::delete('articles/{id}', '\App\Http\Controllers\Common\ArticlesController@delete');

    Route::post('categories', '\App\Http\Controllers\Common\ArticlesController@create');
    Route::put('categories/{id}', '\App\Http\Controllers\Common\ArticlesController@update');
    Route::delete('categories/{id}', '\App\Http\Controllers\Common\ArticlesController@delete');
});
