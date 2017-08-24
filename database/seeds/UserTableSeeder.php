<?php

use Illuminate\Database\Seeder;
use TrayLabs\Admin\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        User::create([
            'name'     => 'Tray E-commerce',
            'username'    => 'trayuser',
            'email'    => 'trayuser@tray.com.br',
            'password' => Hash::make('tray2017'),
        ]);
    }
}
