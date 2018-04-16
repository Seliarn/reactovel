<!doctype html>
<html lang = "{{ app()->getLocale() }}">
<head>
    <meta charset = "utf-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE=edge">
    <meta name = "viewport" content = "width=device-width, initial-scale=1">
    <title>Laravel React application</title>
    <link href = "{{mix('css/app.css')}}" rel = "stylesheet" type = "text/css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>

    <div class="container">
        <div class="row">
            <div class="col-md-12" id="header">

                <!--КОМПОНЕНТ НАВИГАЦИЯ-->
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Categ-1 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Categ-2 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Categ-3 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Categ-4 <span class="sr-only">(current)</span></a>
                            </li>

                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <!--/КОМПОНЕНТ НАВИГАЦИЯ-->

            </div>
        </div>
    </div>

    <div class="container main-content" id="main-content">
        <div class="row justify-content-center" id="articles">

            <!--КОМПОНЕНТ СТАТЬЯ-->
            {{--<div class="col-md-4 col-sm-6">
                <div class="card article">
                    <img class="card-img-top" src="http://via.placeholder.com/300" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>--}}
            <!--/КОМПОНЕНТ СТАТЬЯ-->

        </div>
    </div>

    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p class="footer__text">all rights reserved</p>
                </div>
            </div>
        </div>
    </div>

<!--div id = "root"></div-->

<script src = "{{mix('js/app.js')}}"></script>
</body>
</html>