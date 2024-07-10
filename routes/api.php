<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


//open routes
Route::prefix('v1')->group(function(){
    // signup
    Route::post('/signup',[AuthController::class,'signup']);
    // signin
    Route::post('/signin',[AuthController::class,'signin']);
});


// protected routes
Route::middleware('auth:sanctium')->group(function(){
    // logout
    Route::post('/logout',[AuthController::class,'logout']);
});
