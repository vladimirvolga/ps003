<?php

use Illuminate\Http\Request;

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


//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::get('/users', function () {
    return factory('App\User', 15)->make();
});

Route::post('register','auth\RegisterController@create');



        /*         ---   ПЕРВЫЙ ВАРИАНТ НАСТРОЙКИ JWT-AUTH   ---         */


Route::post('user/register', 'APIRegisterController@register');
Route::post('user/login', 'APILoginController@login');



        /*         ---   ВТОРОЙ ВАРИАНТ НАСТРОЙКИ JWT-AUTH   ---         */


Route::post('auth/register', 'AuthController@register');

Route::group([

//    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

//    Route::post('register', 'AuthController@register');

});


    /*         ---   МАРШРУТ К КОНТРОЛЛЕРУ ПОИСКА   ---         */


Route::post('search', 'SearchController@search');






Route::middleware('jwt.auth')->get('users', function(Request $request) {
    return auth()->user();
});




Route::post('test','TestController@testfunc');
Route::post('getobjectdata','RosreestrController@testRequest');