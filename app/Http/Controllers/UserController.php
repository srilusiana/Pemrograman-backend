<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{

    public $users = ['cat', 'fish', 'bird'];
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->users;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->users[] = $request->users;
        return $this->users;
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
        if (isset($this->users[$id])) {
            $this->users[$id] = $request->users;
            return $this->users;
        }
        return response()->json(['message' => 'users not found'], 404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (isset($this->users[$id])) {
            unset($this->users[$id]);
            return $this->users;
        }
        return response()->json(['message' => 'Animal not found'], 404);
    }
}