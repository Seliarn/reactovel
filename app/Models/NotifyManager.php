<?php
/**
 * Created by PhpStorm.
 * User: serge
 * Date: 26.05.18
 * Time: 9:36
 */

namespace App\Models;


class NotifyManager
{
	function notify(SenderInterface $sender)
	{
		$sender->send();
	}
} 