<!doctype html>
<html lang = "{{ app()->getLocale() }}">
<head>
    <meta charset = "utf-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE=edge">
    <meta name = "viewport" content = "width=device-width, initial-scale=1">
    <title>Reactovel</title>
    <link href = "{{mix('css/app.css')}}" rel = "stylesheet" type = "text/css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>



<div id = "root"></div>

<script src = "{{mix('js/app.js')}}"></script>
</body>
</html>