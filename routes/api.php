<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('companies', 'App\Http\Controllers\Api\CompanyController@index')->name('api.company.index');
Route::get('companies/{company}', 'App\Http\Controllers\Api\CompanyController@show')->name('api.company.show');
Route::post('companies', 'App\Http\Controllers\Api\CompanyController@store')->name('api.company.store');
Route::put('companies/{company}', 'App\Http\Controllers\Api\CompanyController@update')->name('api.company.update');
Route::delete('companies/{company}', 'App\Http\Controllers\Api\CompanyController@delete')->name('api.company.delete');
