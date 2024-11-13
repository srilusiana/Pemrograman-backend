<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table = 'news';
    protected $fillable = ['id', 'title', 'author', 'description', 'content', 'url', 'url_image', 'category', 'published_at', 'created_at', 'updated_at'];
}
