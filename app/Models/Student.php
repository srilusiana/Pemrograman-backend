<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'students';
    protected $fillable = ['id', 'name', 'nim', 'email', 'majority', 'created_at', 'updated_at'];
}
