<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Mendefinisikan route untuk mendapatkan semua data berita.
Route::get('/news', [NewsController::class, 'index']);

// Mendefinisikan route untuk menambahkan data berita baru.
Route::post('/news', [NewsController::class, 'store']);

// Mendefinisikan route untuk mendapatkan detail berita berdasarkan ID.
Route::get('/news/{id}', [NewsController::class, 'show']);

// Mendefinisikan route untuk memperbarui data berita berdasarkan ID.
Route::put('/news/{id}', [NewsController::class, 'update']);

// Mendefinisikan route untuk menghapus data berita berdasarkan ID.
Route::delete('/news/{id}', [NewsController::class, 'destroy']);

// Mendefinisikan route untuk mencari berita berdasarkan judul.
Route::get('/news/search/{title}', [NewsController::class, 'search']);

// Mendefinisikan route untuk mendapatkan berita berdasarkan kategori.
Route::get('/news/category/{category}', [NewsController::class, 'getByCategory']);

// Route spesifik untuk mendapatkan berita kategori 'sport'.
Route::get('/news/category/category/sport', [NewsController::class, 'getByCategory']);

// Route spesifik untuk mendapatkan berita kategori 'finance'.
Route::get('/news/category/finance', [NewsController::class, 'getByCategory']);

// Route spesifik untuk mendapatkan berita kategori 'automotive'.
Route::get('/news/category/automotive', [NewsController::class, 'getByCategory']);
