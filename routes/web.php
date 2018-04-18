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

Auth::routes();

Route::get('/', 'HomeController@index');
Route::get('/login', 'HomeController@index');
Route::get('/home', 'HomeController@index');

/*
 Auth routes
 vendor/laravel/framework/src/Illuminate/Routing/Router.php
 public function auth()
 */