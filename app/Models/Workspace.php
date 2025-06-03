<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workspace extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'slug',
        'cover',
        'logo',
        'visibility',
    ];

    protected function casts(): array # fungsi casting ini digunakan utk mendefinisikan bagaimana atribut dari model akan dikonversi saat diambil atau disimpan kedalam database, dgn kata lain fungsi ini mengkonversi atribut ketipe data tertentu atau ke objek tertentu
    {
        return [
            'visibility' => WorkspaceVisibility::class
        ];
    }
}
