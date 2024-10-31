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
            'message' => 'Success Showing All Students Data',
            'data' => $students
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
        $students = Student::find($id);
        
        if ($students) {

            $input = [
                'name' => $request->name ?? $students->name, 
                'nim' => $request->nim ?? $students->nim,
                'email' => $request->email ?? $students->email,
                'majority' => $request->majority ?? $students->majority
            ];

            $students-> update($input);

            $data = [
                'message' => 'Student is updated', 
                'data' => $students
            ];

            return response()->json($data, 200);
        }
        else {
            $data = [ 'message' => 'Student not found' ];
            
            return response()->json($data, 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $students = Student::find($id);
        
        if ($students) {

            $students->delete(); 

            $data = ['message' => 'Student is deleted'];

            return response()->json($data, 200);
        }
        else {
            $data = [ 'message' => 'Student not found' ];
            
            return response()->json($data, 404);
        }
    }
}
