@extends('uccello::layouts.main')

@section('body-class')
signup-page
@endsection

@section('content')
<div class="signup-box">
    <div class="logo">
        <a href="javascript:void(0);">Uccello</b></a>
        <small>Advanced Admin Panel - For Laravel</small>
    </div>
    <div class="card">
        <div class="body">
            <form id="sign_up" method="POST" action="{{ route('register') }}" novalidate>
                @csrf
                <div class="msg">Register a new membership</div>
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="material-icons">person</i>
                    </span>
                    <div class="form-line">
                        <input id="name" type="text" placeholder="{{ __('Name') }}" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>
                    </div>

                    @if ($errors->has('name'))
                        <span class="invalid-feedback">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="material-icons">email</i>
                    </span>
                    <div class="form-line">
                        <input id="email" type="text" placeholder="{{ __('E-Mail Address') }}" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>
                    </div>

                    @if ($errors->has('email'))
                        <span class="invalid-feedback">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="material-icons">lock</i>
                    </span>
                    <div class="form-line">
                        <input id="password" type="password" placeholder="{{ __('Password') }}" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                    </div>

                    @if ($errors->has('password'))
                        <span class="invalid-feedback">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="material-icons">lock</i>
                    </span>
                    <div class="form-line">
                        <input id="password-confirm" type="password" placeholder="{{ __('Confirm Password') }}" class="form-control" name="password_confirmation" required>
                    </div>
                </div>
                <div class="form-group">
                    <input type="checkbox" name="terms" id="terms" class="filled-in chk-col-pink">
                    <label for="terms">I read and agree to the <a href="javascript:void(0);">terms of usage</a>.</label>
                </div>

                <button class="btn btn-block btn-lg bg-primary waves-effect" type="submit">{{ __('Register') }}</button>

                <div class="m-t-25 m-b--5 align-center">
                    <a href="{{ route('login') }}">You already have a membership?</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('uccello-script')
    {{ Html::script(mix('js/manifest.js', 'vendor/uccello/uccello')) }}
    {{ Html::script(mix('js/vendor.js', 'vendor/uccello/uccello')) }}
@endsection