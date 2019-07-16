<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
    }
}

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        $user = factory(\Uccello\Core\Models\User::class)->make();
        $user->username = 'admin';
        $user->name = 'Admin';
        $user->is_admin = true;
        $user->save();
    }
}