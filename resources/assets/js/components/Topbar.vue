<template>
    <div class="ls-topbar ">
        <!-- Barra de Notificações -->
        <div class="ls-notification-topbar">
            <!-- Links de apoio -->
            <div class="ls-alerts-list">
                <a href="#" class="ls-ico-bell-o" data-counter="5" data-ls-module="topbarCurtain" data-target="#ls-notification-curtain">
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
        <router-link class="ls-go-next" :to="lastUrl">
            <span class="ls-text">Voltar</span>
        </router-link>
        <!-- Nome do produto/marca com sidebar -->
        <h1 class="ls-brand-name">
            <router-link :to="'/home'" class="ls-ico-earth">
                <small>TrayLabs</small>Admin
            </router-link>
        </h1>
        <!-- Nome do produto/marca sem sidebar quando for o pre-painel  -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                lastUrl: ''
            }
        },
        watch: {
            '$route' (to, from) {
                this.lastUrl = from.path;
            }
        }
    }
</script>
