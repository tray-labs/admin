@extends('layouts.app')

@section('content')
    <div class="ls-login-parent">
        <div class="ls-login-inner">
            <div class="ls-login-container">
                <div class="ls-login-box">
                    <h1 class="ls-login-logo"><img title="Logo login" src="{{ asset('images/logo-locaweb.png') }}" /></h1>
                    @if (!$errors->isEmpty())
                        <div class="ls-alert-danger ls-md-space" role="alert">
                            {!! $errors->first() !!}
                        </div>
                    @endif
                    <form class="ls-form ls-login-form" action="{{ route('login') }}" method="POST">
                        {{ csrf_field() }}
                        <fieldset>

                            <label class="ls-label">
                                <b class="ls-label-text ls-hidden-accessible">Email</b>
                                <input class="ls-login-bg-user ls-field-lg" type="email" placeholder="Email" name="email" required autofocus>
                            </label>

                            <label class="ls-label">
                                <b class="ls-label-text ls-hidden-accessible">Senha</b>
                                <div class="ls-prefix-group ls-field-lg">
                                    <input id="password_field" class="ls-login-bg-password" type="password" placeholder="Senha" name="password" required>
                                    <a class="ls-label-text-prefix ls-toggle-pass ls-ico-eye" data-toggle-class="ls-ico-eye, ls-ico-eye-blocked" data-target="#password_field" href="#"></a>
                                </div>
                            </label>

                            <div>
                                <p><a class="ls-login-forgot" href="#">Esqueci minha senha</a></p>
                                <input type="submit" value="Entrar" class="ls-btn-primary ls-btn-block ls-btn-lg">
                                <p class="ls-txt-center ls-login-signup">Não possui um usuário na Locaweb? <a href="#">Cadastre-se agora</a></p>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
