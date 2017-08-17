<template>
    <div>
        <h1 class="ls-title-intro ls-ico-home ls-no-border ls-no-padding-top ls-lg-margin-bottom">Página de aplicativo</h1>

        <div class="animated fade-in-right">

            <div class="ls-lg-margin-bottom ls-txt-right">
                <button class="ls-btn-danger" data-ls-module="modal" data-target="#modal">Desabilitar aplicativo</button>
            </div>

            <div class="ls-box-group ls-overflow-hidden">

                <div class="row">
                    <div class="col-md-4">
                        <div class="ls-box ls-md-space ls-no-bg">
                            <div class="ls-box-head">
                                <h6 class="ls-title-6 ls-sm-margin-bottom">Titulo da caixa</h6>
                                <p class="ls-md-margin-bottom">
                                    Non minim est incididunt do quis incididunt amet voluptate magna ut sint magna enim.
                                    Non minim est incididunt do quis incididunt amet voluptate magna ut sint magna enim.
                                </p>
                            </div>
                            <div class="ls-box-body">
                                <a href="#" class="ls-btn ls-btn-primary ls-btn-block">Botão principal</a>
                                <a href="#" class="ls-btn ls-btn-default ls-btn-block">Botão secundário</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="ls-box ls-md-space ls-no-bg">
                            <div class="ls-box-head">
                                <h6 class="ls-title-6 ls-sm-margin-bottom">Titulo da caixa</h6>
                                <p class="ls-md-margin-bottom">
                                    Non minim est incididunt do quis incididunt amet voluptate magna ut sint magna enim.
                                    Non minim est incididunt do quis incididunt amet voluptate magna ut sint magna enim.
                                </p>
                            </div>
                            <div class="ls-box-body">
                                <a href="#" class="ls-btn ls-btn-primary ls-btn-block">Botão principal</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="ls-box ls-md-space ls-no-bg">
                            <div class="ls-box-head">
                                <h6 class="ls-title-6 ls-sm-margin-bottom">Titulo da caixa</h6>
                                <p class="ls-md-margin-bottom">
                                    Non minim est incididunt do quis incididunt amet voluptate magna ut sint magna enim.
                                    Non minim est incididunt do quis incididunt amet voluptate magna ut sint magna enim.
                                </p>
                            </div>
                            <div class="ls-box-body">
                                <a href="#" class="ls-btn ls-btn-primary ls-btn-block">Botão principal</a>
                                <a href="#" class="ls-btn ls-btn-default ls-btn-block">Botão secundário</a>
                                <a href="#" class="ls-btn ls-btn-default ls-btn-block">Botão secundário</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="ls-modal" id="modal">
            <div class="ls-modal-box">
                <div class="ls-modal-header">
                    <button data-dismiss="modal">&times; </button>
                    <h4 class="ls-modal-title">Desabilitar aplicativo</h4>
                </div>
                <div class="ls-modal-body" id="myModalBody">
                    <p>Deseja desabilitar o aplicativo?</p>
                </div>
                <div class="ls-modal-footer ls-txt-right">
                    <button class="ls-btn ls-float-left" data-dismiss="modal">Fechar</button>
                    <button type="submit" class="ls-btn ls-btn-danger ls-btn-primary-danger" id="btn-modal" data-toggle-class="ls-display-none" data-target="#btn-modal, #btn-modal-disabled">
                        Desabilitar
                    </button>
                    <div>
                        <button id="btn-modal-disabled" class="ls-btn-danger ls-disabled ls-display-none" data-toggle-class="ls-display-none" data-target="#btn-modal, #btn-modal-disabled">
                            Aguarde, desabilitando aplicativo...
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'apps'
    }
</script>
