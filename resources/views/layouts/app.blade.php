<html lang="{{ config('app.locale') }}" class="{{ config('locastyle.theme') }}">
<head>
    <meta charset="utf-8">
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="description" content="Boilerplate">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Admin</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
@yield('content')
<script src="{{ mix('js/vendor.js') }}"></script>
</body>
</html>