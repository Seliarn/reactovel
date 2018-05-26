<?php
namespace App\Models\Sender;

use App\Models\SenderInterface;

class Email implements SenderInterface
{
	private $_subject;
	private $_message;
	private $_recipient;

	function __construct($_recipient, $_subject, $_message)
	{
		$this->_recipient = $_recipient;
		$this->_subject = $_subject;
		$this->_message = $_message;
	}

	function send()
	{
		mail($this->_recipient, $this->_subject, $this->_message);
	}
}