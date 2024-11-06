<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function __construct()
    {
        // Middleware untuk melindungi route dengan autentikasi Sanctum
        $this->middleware('auth:sanctum');
    }

    public function index()
    {
        $students = Student::all();

        if ($students->isEmpty()) {
            return response()->json(['message' => 'No student data found'], 404);
        }

        return response()->json([
            'message' => 'Success Showing All Students Data',
            'data' => $students
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'nim' => 'required|integer|unique:students',
            'email' => 'required|email|unique:students',
            'majority' => 'required|string'
        ]);

        $input = $request->only(['name', 'nim', 'email', 'majority']);
        $students = Student::create($input);

        return response()->json([
            'message' => 'Successfully created new student',
            'data' => $students
        ], 201);
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
        $students = Student::find($id);

        if (!$students) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        // Validasi input yang diizinkan saat update
        $request->validate([
            'name' => 'required|string',
            'nim' => 'required|integer|unique:students,nim,' . $id,
            'email' => 'required|email|unique:students,email,' . $id,
            'majority' => 'required|string'
        ]);

        // Update hanya field yang ada di request
        $students->update($request->only(['name', 'nim', 'email', 'majority']));

        return response()->json([
            'message' => 'Student is updated',
            'data' => $students
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $students = Student::find($id);

        if (!$students) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $students->delete();

        return response()->json(['message' => 'Student is deleted'], 200);
    }
}
