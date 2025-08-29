<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('user_profile', function (Blueprint $table) {
            // Add user_id as nullable first, then update later if needed
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            // Modify existing columns to unique strings
            $table->string('user_email')->unique()->change();
            $table->string('phone_no')->unique()->change();
            $table->string('account_no')->unique()->change(); // Enforce uniqueness
            $table->string('iban_no')->unique()->change();   // Enforce uniqueness
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_profile', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropColumn('user_id');

            // Drop unique constraints
            $table->dropUnique('user_profile_user_email_unique');
            $table->dropUnique('user_profile_phone_no_unique');
            $table->dropUnique('user_profile_account_no_unique');
            $table->dropUnique('user_profile_iban_no_unique');

            // Revert to original schema (adjust if originally non-nullable)
            $table->string('user_email')->nullable()->change();
            $table->string('phone_no')->nullable()->change();
            $table->string('account_no')->nullable()->change();
            $table->string('iban_no')->nullable()->change();
        });
    }
};