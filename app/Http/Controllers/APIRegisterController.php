<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
//use Validator;
use Illuminate\Support\Facades\Validator;
//use JWTFactory;
use Tymon\JWTAuth\Facades\JWTFactory;
//use JWTAuth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;

use App\User;
//use Response;
use Illuminate\Support\Facades\Response;


class APIRegisterController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users',
            'login' => 'required',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        User::create([
            'email' => $request->get('email'),
            'login' => $request->get('login'),
            'password' => bcrypt($request->get('password')),
        ]);
        $email = $request->get('email');
//        $user = User::first();
        $user = User::where('email', $email)->first();
        $token = JWTAuth::fromUser($user);

//        return Response::json(compact('token'));


        return response()->json([
            'access_token' => $token,
            'user' => $user,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }
}









