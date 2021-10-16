<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class LoginController extends Controller
{
    public function Login(Request $credentials)
    {
        $user = User::where('username', $credentials->username)->first();
        
        if($user){
            $pass_validation = password_verify($credentials->password, $user->password);

            if($pass_validation){
                return array('success'=>true, 'user' => $user);
            }
            
            else{
                return array('success'=>false);
            }
        }
        return array('success'=>false);   
    }
}
