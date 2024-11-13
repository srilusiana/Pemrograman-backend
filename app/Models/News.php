<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
<<<<<<< HEAD
    // Menentukan tabel yang digunakan model ini.
    protected $table = 'news';

    // Mendefinisikan kolom-kolom yang dapat diisi secara massal.
    // Ini penting untuk menghindari *Mass Assignment* vulnerabilities dan menentukan field yang bisa diisi langsung melalui metode seperti `create()` atau `update()`.
    protected $fillable = ['id', 'title', 'author', 'description', 'content', 'url', 'url_image', 'category', 'published_at', 'created_at', 'updated_at'];
}

=======
    protected $table = 'news';
    protected $fillable = ['id', 'title', 'author', 'description', 'content', 'url', 'url_image', 'category', 'published_at', 'created_at', 'updated_at'];
}
>>>>>>> 3bfa8005c0fb94a20eac2cf238e8a3516cfbf6de
