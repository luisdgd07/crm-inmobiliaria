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


Route::get('/', function () {
    return view('welcome');
});
Route::post('register', 'UserController@register');
Route::post('login', 'UserController@authenticate');
Route::group(['middleware' => ['jwt.verify']], function() {
});
Route::resources(['api-properties' => PropertyController::class]);
Route::get('/home', 'HomeController@index')->name('home');
