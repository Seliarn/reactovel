<?php

namespace App\Models\Order;

use App\Models\Order;
use App\Models\ProductInterface;
use App\Models\Order\Generators\HtmlOrderGenerator;
use App\Models\Order\Generators\JsonOrderGenerator;

class OrderManager
{
    private $_orderGenerators = ['html' => '\App\Models\Order\Generators\HtmlOrderGenerator'];

    function generateOrder(ProductInterface $product, $format = 'html', $params = [])
    {
        if (key_exists($format, $this->_orderGenerators)) {
            $data = $product->getProductDataForOrder();
            $order = Order::create($data);
            $generator = new $this->_orderGenerators[$format]();
            return $generator->generate($order);
        }
    }
}