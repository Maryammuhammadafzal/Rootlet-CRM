<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserProfile;

class UserProfileSeeder extends Seeder
{
    public function run(): void
    {
        UserProfile::create([
            'user_id' => 1, // Use current user or a test user ID
            'first_name' => 'Test',
            'last_name' => 'User',
            'user_email' => 'test@example.com',
            'phone_no' => '1234567890',
            'account_no' => 'ACC123',
            'iban_no' => 'IBAN123',
            'qualification' => 'Test Qual',
            'employee_id' => 12345,
            'employee_picture' => 'default.png',
        ]);
    }
}