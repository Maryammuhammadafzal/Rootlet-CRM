<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserProfile extends Model
{
    protected $table = 'user_profile'; // Correct table name as a string

    protected $fillable = [
        'id',
        'first_name',
        'last_name',
        'user_email',
        'phone_no',
        'account_no',
        'iban_no',
        'qualification',
        'employee_id',
        'employee_picture',
        'user_id', // Include user_id if mass assignable
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id'); // Relate to User model
    }
}