@extends('uccello::layouts.main')

@section('body-class')
fp-page
@endsection

@section('content')
<div class="fp-box">
    <div class="logo">
        <a href="javascript:void(0);">Uccello</b></a>
        <small>Advanced Admin Panel - For Laravel</small>
    </div>
    <div class="card">
        <div class="body">
            <form id="forgot_password" method="POST" action="{{ route('password.email') }}" novalidate>
                @csrf
                <div class="msg">
                    Enter your email address that you used to register. We'll send you an email with your username and a
                    link to reset your password.
                </div>
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="material-icons">email</i>
                    </span>
                    <div class="form-line">
                        <input id="email" type="email" placeholder="{{ __('E-Mail Address') }}" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>
                    </div>

                    @if ($errors->has('email'))
                        <span class="invalid-feedback">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>

                <button class="btn btn-block btn-lg bg-primary waves-effect" type="submit">{{ __('Send Password Reset Link') }}</button>

                <div class="row m-t-20 m-b--5 align-center">
                    <a href="{{ route('register') }}">{{ __('Register') }}</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('script')
    {{ Html::script(ucasset('js/manifest.js')) }}
    {{ Html::script(ucasset('js/vendor.js')) }}
@endsection