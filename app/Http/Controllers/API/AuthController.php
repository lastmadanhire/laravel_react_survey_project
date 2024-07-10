<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Signup.
     */
    public function signup(SignupRequest $request):JsonResponse
    {
        $data=$request->validated();

        $user=User::create([
            'email' => $data['email'],
            'name' => $data['name'],
            'password' => Hash::make($data['password'])
        ]);
        $token=$user->createToken('myApp')->plainTextToken;
        $response['user'] = $user;
        $response['token'] = $token;
        return $this->successResponse('Registration successful', $response);
    }
    /**
     * Signin.
     */
    public function signin(LoginRequest $request):JsonResponse

    {
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            return $this->errorResponse('Invalid login credentials',422);
            // return response([
            //     'error' =>'The provided credentials do not match',
            // ],422);
        }
        $user=Auth::user();
        $token=$user->createToken('myApp')->plainTextToken;
        $response['user'] = $user;
        $response['token'] = $token;
        return $this->successResponse('Login successful', $response);
    }
    /**
     * Logout.
     */
    public function logou(Request $request){
        $user=Auth::user();
        $user->currentAccessToken()->delete();
        return response([
            'success' =>true
        ]);
    }

}
