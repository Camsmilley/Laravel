<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SafariController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\AuthController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::get('allHomeSafaris', [SafariController::class, 'index']);
Route::get('safaris/{id}', [SafariController::class, 'show']);
Route::post('/bookings', [BookingController::class, 'store']);