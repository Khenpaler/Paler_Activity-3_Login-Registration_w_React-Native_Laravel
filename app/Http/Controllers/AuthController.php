<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    protected $model;

    public function __construct(){
        $this->model = new User();
    }



    public function login(Request $request)
    {

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        try {

            if(!Auth::attempt($credentials)){
                return response(['message' => "Account is not registered"], 200);
            } 

            $user = $this->model->where('email', $request->email)->first();            
            $token = $user->createToken($request->email . Str::random(8))->plainTextToken;

            return response(['token' => $token], 200);
            
        }catch(\Exception $e){
            return response(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function register(Request $request)
    {
        $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|confirmed|min:6', 
        ]);

        try{
            $request['role'] = '1';
            $this->model->create($request->all());
            return response(['message' => "Successfully Created"], 201);
        }catch(\Exception $e){
            return response(['message' => $e->getMessage()], 400);
        }
    }
}
