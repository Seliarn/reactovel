<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends Controller
{/*
    /**
     * Create a new controller instance.
     *
     * @return void
     *
    public function __construct()
    {
        $this->middleware('auth');
    }*/

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('welcome');
        if (Auth::user()) {
            return view('welcome');
        } else {
            return redirect('/login');
        }
    }

    public function checkAuth()
    {
        $user = Auth::guard('api')->user();

        if ($user) {
            return response()->json($user, Response::HTTP_OK);
        } else {
            return response()->json($user, Response::HTTP_UNAUTHORIZED);
        }
    }
}