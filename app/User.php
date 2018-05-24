<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    const API_TOKEN_LIFETIME = 86400;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function generateToken()
    {
        $this->api_token = str_random(60);
        $this->api_token_expire = time() + static::API_TOKEN_LIFETIME;
        $this->save();

        return $this->getToken();
    }

    public function checkApiToken($apiToken)
    {
        return $apiToken === $this->api_token &&
            $this->api_token_expire < time();
    }

    public function getToken()
    {
        return ['api_token' => $this->api_token, 'api_token_expire' => $this->api_token_expire];
    }

    public function resetToken()
    {
        $this->api_token = null;
        $this->api_token_expire = null;
        $this->save();
    }
}
