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

Route::get('/', function() {
    return view('welcome');
});

Route::get('/uccello', function() {
    $domain = uccello()->useMultiDomains() ? uccello()->getLastOrDefaultDomain()->slug : null;
    $route = ucroute('uccello.home', $domain);
    return redirect($route);
});

Auth::routes();

// If you deactivate multi domains, this route 
// will be in conflict with 'uccello.home' route
Route::get('/home', 'HomeController@index')->name('home');
