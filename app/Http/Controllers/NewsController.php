<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use Illuminate\Support\Facades\Validator;

class NewsController extends Controller
{
    
    public function index()
    {
        // Mendapatkan semua data dari tabel 'news'.
        $newss = News::all();

        // Mengecek apakah data kosong.
        if ($newss->isEmpty()) {
            // Jika kosong, kembalikan pesan 'No data found' dengan kode 404.
            return response()->json(['message' => 'No data found'], 404);
        }

        // Jika data ditemukan, kembalikan respons JSON dengan data dan kode 200.
        return response()->json([
            'message' => 'Success Showing All News Data',
            'data' => $newss
        ], 200);
    }


    public function store(Request $request)
    {
        // Validasi data input dari request.
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'author' => 'required',
            'description' => 'required',
            'content' => 'required',
            'url' => 'required',
            'url_image' => 'required',
            'category' => 'required',
            'published_at' => 'required'
        ]);

        // Jika validasi gagal, kembalikan respons dengan kesalahan validasi dan kode 422.
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        // Menyimpan data yang valid ke dalam database.
        $newss = News::create($request->only(['title', 'author', 'description', 'content', 'url', 'url_image', 'category', 'published_at']));

        // Menyusun data respons.
        $data = [
            'message' => 'newss is created successfully',
            'data' => $request,
        ];

        // Kembalikan respons JSON dengan data dan kode 201 (created).
        return response()->json($data, 201);
    }

    public function show(string $id)
    {
        // Mencari data 'news' berdasarkan ID.
        $newss = News::find($id);
    
        // Jika data tidak ditemukan, kembalikan respons dengan pesan 'Resource not found' dan kode 404.
        if (!$newss) {
            return response()->json(['message' => 'Resource not found'], 404);
        }
    
        // Jika data ditemukan, kembalikan data dengan pesan sukses dan kode 200.
        return response()->json(['message' => 'Get Detail Resource', 'data' => $newss], 200);
    }
     
    public function update(Request $request, string $id)
    {
        // Mencari data 'news' berdasarkan ID.
        $newss = News::find($id);

        // Jika data ditemukan, perbarui dengan input yang tersedia.
        if ($newss) {
            $input = [
                'title' => $request->title ?? $newss->title,
                'author' => $request->author ?? $newss->author,
                'description' => $request->description ?? $newss->description,
                'content' => $request->content ?? $newss->content,
                'url' => $request->url ?? $newss->url,
                'url_image' => $request->url_image ?? $newss->url_image,
                'category' => $request->category ?? $newss->category,
                'published_at' => $request->published_at ?? $newss->published_at,
            ];

            // Memperbarui data di database.
            $newss->update($input);

            // Menyusun respons JSON.
            $data = [
                'message' => 'News is updated',
                'data' => $newss
            ];

            // Mengembalikan respons JSON dengan kode 200.
            return response()->json($data, 200);
        } else {
            // Jika data tidak ditemukan, kembalikan pesan 'News not found' dengan kode 404.
            $data = [
                'message' => 'News not found'
            ];

            return response()->json($data, 404);
        }
    }


    public function destroy(string $id)
    {
        // Mencari data 'news' berdasarkan ID.
        $newss = News::find($id);

        // Jika data ditemukan, hapus data dari database.
        if ($newss) {
            $newss->delete();

            // Menyusun dan mengembalikan respons JSON dengan pesan sukses dan kode 200.
            $data = [
                'message' => 'news is deleted'
            ];

            return response()->json($data, 200);
        } else {
            // Jika data tidak ditemukan, kembalikan pesan 'news not found' dengan kode 404.
            $data = [
                'message' => 'news not found'
            ];

            return response()->json($data, 404);
        }
    }

    public function search($title)
    {
        // Mencari data 'news' berdasarkan judul yang sesuai dengan parameter.
        $newss = News::where('title', 'like', "%$title%")->get();

        // Jika data tidak ditemukan, kembalikan respons dengan pesan 'Resource not found' dan kode 404.
        if ($newss->isEmpty()) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        // Jika data ditemukan, kembalikan data dengan pesan sukses dan kode 200.
        return response()->json(['message' => 'Get searched resource', 'data' => $newss], 200);
    }

    public function getByCategory($category)
    {
        // Mencari data 'news' berdasarkan kategori.
        $newss = News::where('category', $category)->get();

        // Jika data tidak ditemukan, kembalikan respons dengan pesan 'Resource not found' dan kode 404.
        if ($newss->isEmpty()) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        // Jika data ditemukan, kembalikan data dengan jumlah total item dan pesan sukses.
        return response()->json(['message' => 'Get category resource', 'total' => $newss->count(), 'data' => $newss], 200);
    }

}