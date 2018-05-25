<?php

namespace App\Models\Order;

use App\Models\OrderInterface;

interface OrderGeneratorInterface
{
    function generate(OrderInterface $order);
}