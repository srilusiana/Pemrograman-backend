<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();

        $response = [
            'data' => $students,
            'message' => 'Berhasil menampilkan semua data student'
        ];

        return response()->json($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = [
            'name' => $request->name,
            'nim' => $request->nim,
            'email' => $request->email,
            'majority' => $request->majority
        ];
        
        $students = Student::create($input);
        
        $response = [
            'message' => 'Successfully create new student',
            'data' => $students
        ];
        return response()->json($response, 201);
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
        if (isset($this->students[$id])) {
            $this->students[$id] = $request->students;
            return $this->students;
        }
        return response()->json(['message' => 'Student not found'], 404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (isset($this->students[$id])) {
            unset($this->students[$id]);
            return $this->students;
        }
        return response()->json(['message' => 'Student not found'], 404);
    }
}
