<?php

namespace App\Models\Order;

use App\Models\Order;
use App\Models\ProductInterface;

class OrderManager
{
	private $_order;

	function generateOrder($email, ProductInterface $product, OrderGeneratorInterface $generator, $params = [])
	{
		$data = $product->getProductDataForOrder();
        $data['email'] = $email;
		$this->_order = Order::create($data);
		$result = $generator->generate($this->_order);
		return $result;
	}

	function getOrder()
	{
		return $this->_order;
	}
}