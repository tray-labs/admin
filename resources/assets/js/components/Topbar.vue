<template>
    <div class="ls-topbar ">
        <!-- Barra de Notificações -->
        <div class="ls-notification-topbar">
            <!-- Links de apoio -->
            <div class="ls-alerts-list">
                <a href="#" class="ls-ico-bell-o" data-counter="8" data-ls-module="topbarCurtain" data-target="#ls-notification-curtain">
                    <span>Notificações</span>
                </a>
                <a href="#" class="ls-ico-bullhorn" data-ls-module="topbarCurtain" data-target="#ls-help-curtain">
                    <span>Ajuda</span>
                </a>
                <a href="#" class="ls-ico-question" data-ls-module="topbarCurtain" data-target="#ls-feedback-curtain">
                    <span>Sugestões</span>
                </a>
            </div>
            <!-- Dropdown com detalhes da conta de usuário -->
            <div data-ls-module="dropdown" class="ls-dropdown ls-user-account">
                <a href="#" class="ls-ico-user">
                    <img src="images/avatars/1.jpg" alt="" />
                    <span class="ls-name">Mary Jane</span> (maryjane)
                </a>
                <nav class="ls-dropdown-nav ls-user-menu">
                    <ul>
                        <li>
                            <a href="#">Meus dados</a>
                        </li>
                        <li>
                            <a href="#">Faturas</a>
                        </li>
                        <li>
                            <a href="#">Planos</a>
                        </li>
                        <li>
                            <a href="#">Sair</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <span class="ls-show-sidebar ls-ico-menu"></span>
        <a href="#" class="ls-go-next">
            <span class="ls-text">Voltar</span>
        </a>
        <!-- Nome do produto/marca com sidebar -->
        <h1 class="ls-brand-name">
            <a href="home" class="ls-ico-earth">
                <small>TrayLabs</small>Admin
            </a>
        </h1>
        <!-- Nome do produto/marca sem sidebar quando for o pre-painel  -->
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
