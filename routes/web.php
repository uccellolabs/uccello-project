<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Uccello\Core\Facades\Uccello;

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

// Decomment if you want to make a front-office and use Uccello as a back-office
// Route::get('/', function () {
//     return view('welcome');
// });


// Route::get('/uccello', function() { // Use this line if you want to make a front-office and use Uccello as a back-office
Route::get('/', function () { // Use this line if you want only use Uccello without front-office
    $domain = Uccello::useMultiDomains() ? Uccello::getLastOrDefaultDomain()->slug : null;
    $route = ucroute('uccello.home', $domain);
    return redirect($route);
});

Auth::routes();

// If you deactivate multi domains, this route
// will be in conflict with 'uccello.home' route
// Route::get('/home', 'HomeController@index')->name('home');
