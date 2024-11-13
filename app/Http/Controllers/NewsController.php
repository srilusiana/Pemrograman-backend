<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use Illuminate\Support\Facades\Validator;

class NewsController extends Controller
{
    

    public function index()
    {
        $newss = News::all();

        if ($newss->isEmpty()) {
            return response()->json(['message' => 'No data found'], 404);
        }

        return response()->json([
            'message' => 'Success Showing All News Data',
            'data' => $newss
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'author' => 'required|string',
            'description' => 'required|string',
            'content' => 'required|string|max:1000',
            'url' => 'required|string',
            'url_image' => 'required|string',
            'category' => 'required|string',
            'published_at' => 'required|date',
        ]);

        $input = $request->only(['title', 'author', 'description', 'content', 'url', 'url_image', 'category', 'published_at']);
        
        $newss = News::create($input);

        return response()->json([
            'message' => 'Successfully created new news',
            'data' => $newss
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $newss = News::find($id);
        if ($newss) {
            return response()->json(['message' => 'Resource not found'], 404);
        }
        return response()->json(['message' => 'Get Detail Resource', 'data' => $newss], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $newss = News::find($id);

        if ($newss) {
            return response()->json(['message' => 'News not found'], 404);
        }

        // Validasi input yang diizinkan saat update
        $request->validate([
            'title' => 'required|string',
            'author' => 'required|string',
            'description' => 'required|string',
            'content' => 'required|string|max:1000',
            'url' => 'required|string',
            'url_image' => 'required|string',
            'category' => 'required|string',
            'published_at' => 'required|date',
        ]);

        $newss->update($request->only(['title', 'author', 'description', 'content', 'url', 'url_image', 'category', 'published_at']));

        return response()->json([
            'message' => 'News is updated',
            'data' => $newss
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $newss = News::find($id);

        if ($newss) {
            return response()->json(['message' => 'News not found'], 404);
        }

        $newss->delete();

        return response()->json(['message' => 'News is deleted'], 200);
    }

    public function search($title)
    {
        $newss = News::where('title', 'like', "%$title%")->get();
        if ($newss->isEmpty()) {
            return response()->json(['message' => 'Resource not found'], 404);
        }
        return response()->json(['message' => 'Get searched resource', 'data' => $newss], 200);
    }

    public function getByCategory($category)
    {
        $newss = News::where('category', $category)->get();
        if ($newss->isEmpty()) {
            return response()->json(['message' => 'Resource not found'], 404);
        }
        return response()->json(['message' => 'Get category resource', 'total' => $newss->count(), 'data' => $newss], 200);
    }
}
