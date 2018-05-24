<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/

//\Illuminate\Support\Facades\Auth::routes();

Route::get('/', 'HomeController@index');
Route::get('login', 'HomeController@index')->name('login');
Route::get('home', 'HomeController@index');

/*
 Auth routes
 vendor/laravel/framework/src/Illuminate/Routing/Router.php
 public function auth()
 */
Route::post('refresh','\App\Http\Controllers\Auth\LoginController@refresh');