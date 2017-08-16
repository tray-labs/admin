<template>
    <div class="ls-topbar ">
        <!-- Barra de Notificações -->
        <div class="ls-notification-topbar">
            <!-- Dropdown com detalhes da conta de usuário -->
            <div data-ls-module="dropdown" class="ls-dropdown ls-user-account">
                <a href="#" class="ls-ico-user">
                    <img src="images/avatars/1.jpg" alt="" />
                    <span class="ls-name">Tray E-commerce</span> (trayuser)
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
        name: 'topbar'
    }
</script>
