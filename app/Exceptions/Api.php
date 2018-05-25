<?php
/**
 * Created by PhpStorm.
 * User: autodoc
 * Date: 25.05.18
 * Time: 19:19
 */

namespace App\Exceptions;

use Exception;

class Api extends Exception
{
    public function render($request, Exception $exception)
    {
        if ($exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ], $exception->getCode());
        }

        return parent::render($request, $exception);
    }
}