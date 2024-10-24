<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        # Menginisialisasi dengan beberapa data hewan
        $this->animal = new \Animal(['Kucing', 'Anjing', 'Ikan']);
    }

    public function index()
    {
        return response()->json($this->animal->index());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
