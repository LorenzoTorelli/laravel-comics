<?php

use Illuminate\Support\Facades\Route;

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
// $comics = config("comics");


Route::get('/', function () {
    $comics = config("comics");
    return view('home', ['comics'=>$comics]);
});

Route::get('/{pages}', function ($page) {
    $comics = config("comics");
    return view('partials.comic', ['comicItem'=>$comics[$page]]);
});
