
<!doctype html>

    <html lang="{{ app()->getLocale() }}">

    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600"
              rel="stylesheet" type="text/css">

        {{--<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,--}}
        {{--400,600|Roboto|Roboto+Condensed:300" rel="stylesheet">--}}

        <link href="https://fonts.googleapis
        .com/css?family=Open+Sans|PT+Sans" rel="stylesheet">


        <meta name="csrf-token" content="{{ csrf_token() }}">



    </head>



    <body>


        <div id="app">

            {{--<auth-page-component></auth-page-component>--}}

            <search-page-component></search-page-component>

        </div>

        <script src="js/app.js"></script>

    </body>

</html>




