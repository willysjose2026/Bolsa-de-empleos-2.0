<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SignUpController;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

#CATEGORY ROUTES
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/category', [CategoryController::class, 'show']);
Route::post('/categories', [CategoryController::class, 'store']);
Route::put('/categories', [CategoryController::class, 'update']);
Route::delete('/categories', [CategoryController::class, 'destroy']);

#JOB ROUTES
Route::get('/jobs', [JobController::class, 'index']);
Route::get('/jobs/job', [JobController::class, 'show']);
Route::post('/jobs', [JobController::class, 'store']);
Route::put('/jobs', [JobController::class, 'update']);
Route::delete('/jobs', [JobController::class, 'destroy']);

#JOBTYPE ROUTES

#USER ROUTES
Route::get('/login', [LoginController::class, 'Login']);
Route::post('/signup', [SignUpController::class, 'SignUp']);
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/user', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
#Route::delete('/users', [UserController::class, 'destroy']);

#USERTYPE ROUTES
