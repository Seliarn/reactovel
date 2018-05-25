<?php

namespace App\Models\Order\Generators;

use App\Models\OrderInterface;

class JsonOrderGenerator implements \App\Models\Order\OrderGeneratorInterface
{
    private $_template = 'order/jsonOrder';

    function generate(OrderInterface $order)
    {
        return \Illuminate\Support\Facades\View::make($this->_template);
    }
}