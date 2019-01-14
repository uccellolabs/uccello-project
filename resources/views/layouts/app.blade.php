@extends('uccello::layouts.app')

@if (auth()->check())
    @section('user-avatar'){{ 'https://www.gravatar.com/avatar/' . md5(auth()->user()->email) . '?d=mm' }}@endsection
    @section('user-name') {{ auth()->user()->first_name }} {{ auth()->user()->last_name }}@endsection
    @section('user-email') {{ auth()->user()->email }}@endsection
@endif