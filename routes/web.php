<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AideController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SurMesureController;
use App\Http\Controllers\TestimonialsController;
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


    Route::get('/', [HomeController::class, 'index']);
    Route::get('/avisettemoignages', [TestimonialsController::class, 'index']);
    Route::get('/cvsurmesure', [SurMesureController::class, 'index']);
    Route::get('/aide', [AideController::class, 'index']);


require __DIR__.'/auth.php';
