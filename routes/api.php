<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AnimalController;


Route::get('/animals', [AnimalController::class, 'index']);