<?php

namespace App\Models\Order;

use App\Models\Order;
use App\Models\ProductInterface;

class OrderManager
{
    private $_order;
    private $_orderGenerators = [
        'html' => '\App\Models\Order\Generators\HtmlOrderGenerator',
    ];

    function generateOrder(ProductInterface $product, $format = 'html', $params = [])
    {
        if (key_exists($format, $this->_orderGenerators)) {
            $data = $product->getProductDataForOrder();
            $this->_order = Order::create($data);

            /**
             * @var $generator OrderGeneratorInterface
             */
            $generator = new $this->_orderGenerators[$format]();
            $result = $generator->generate($this->_order);
            return $result;
        }
    }

    function getOrder()
    {
        return $this->_order;
    }
}