<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\UserController;

class SignUpController extends Controller
{
    public function SignUp(Request $credentials){

        return redirect()->action([UserController::class, 'store'], $credentials);        
    }
}
