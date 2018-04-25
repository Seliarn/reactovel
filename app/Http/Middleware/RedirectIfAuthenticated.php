<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @param  string|null $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            $user = Auth::guard($guard)->user();
            $token = $user->getToken();
            if ($user->checkApiToken()) // Auth::guard($guard)->user()
            {
                return response()->json([
                    'data' => $token,
                    200
                ]);
            }
//            return redirect('/home');
        }

        return $next($request);
    }
}
