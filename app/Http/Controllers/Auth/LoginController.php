<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
//    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);

        if ($this->attemptLogin($request)) {
            /**
             * @var User $user
             */
            $user = $this->guard()->user();
            $user->generateToken();

            return response()->json([
                'data' => $user->toArray(),
                Response::HTTP_OK
            ]);
        }

        return $this->sendFailedLoginResponse($request);
    }

    public function logout(Request $request)
    {
        /**
         * @var User $user
         */
        $user = Auth::guard('api')->user();

        if ($user) {
            $user->api_token = null;
            $user->api_token_expire = null;
            $user->save();
        }

        return response()->json(['data' => 'User logged out.'], Response::HTTP_OK);
    }

    public function refresh(Request $request)
    {
        /**
         * @var User $user
         */
        $user = $this->guard()->user();

        if ($user) {
            if ($user->checkApiToken($request['api_token'])) {
                $response = $user->generateToken();

                return response()->json([
                    'data' => $response,
                    Response::HTTP_OK
                ]);
            } else {
                $user->resetToken();
            }
        }

        return response()->json(['data' => 'User logged out.'], Response::HTTP_UNAUTHORIZED);
    }
}
