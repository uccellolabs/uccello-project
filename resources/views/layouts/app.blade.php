@extends('uccello::layouts.app')

@if (auth()->check())
    @section('user-avatar'){{ 'https://www.gravatar.com/avatar/' . md5(auth()->user()->email) . '?d=mm' }}@endsection
    @section('user-name') {{ auth()->user()->first_name }} {{ auth()->user()->last_name }}@endsection
    @section('user-email') {{ auth()->user()->email }}@endsection
@endif

@section('app-css')
    {{-- Put your global CSS files here --}}

    {{-- Uncomment below to load css/app.js with Mix --}}
    {{-- {!! Html::style(mix('css/app.css')) !!} --}}
@endsection

@section('app-script')
    {{-- Put your global JS files here --}}

    {{-- Laroute --}}
    {!! Html::script('js/laroute.js') !!}

    {{-- Uncomment below to load js/app.js with Mix --}}
    {{-- {!! Html::script(mix('js/app.js')) !!} --}}
@endsection