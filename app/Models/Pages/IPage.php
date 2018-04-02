<?php

namespace App\Models\Pages;

interface IPage
{
    public function getContent();

    public function getTitle();
}
