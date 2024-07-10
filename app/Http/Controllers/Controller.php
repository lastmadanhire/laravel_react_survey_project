<?php

namespace App\Http\Controllers;

abstract class Controller
{
    public function successResponse($message,$data=[]){
        $response=[
            'success'=>true,
            'message'=>$message,
            $data,
        ];
        return response()->json($response);
    }
    public function errorResponse($error,$status=404){
        $response=[
            'success'=>false,
            'errors'=>$error
        ];
        return response()->json($response,$status);
    }
}
