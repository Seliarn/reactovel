<?php

namespace App\Models\Order\Generators;

use App\Models\OrderInterface;

class HtmlOrderGenerator implements \App\Models\Order\OrderGeneratorInterface
{
    private $_template = 'order/htmlOrder';

    function generate(OrderInterface $order)
    {
        return \Illuminate\Support\Facades\View::make($this->_template, ['order' => $order]);
    }
}