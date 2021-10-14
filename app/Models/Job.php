<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'category_id',
        'job_type_id',
        'user_id',
        'logo_url',
        'job_url',
        'company_name',
        'position',
        'location',
        'email',
        'description',
        'how_to_play'
    ];
}
