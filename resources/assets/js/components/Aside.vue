<template>
    <aside class="ls-sidebar">
        <div class="ls-sidebar-inner">
            <a href="/locawebstyle/documentacao/exemplos//pre-painel" class="ls-go-prev">
                <span class="ls-text">Voltar à lista de serviços</span>
            </a>
            <nav class="ls-menu">
                <ul>
                    <li>
                        <router-link :to="'/home'" class="ls-ico-home" title="Dashboard">Início</router-link>
                    </li>
                    <li>
                        <router-link :to="'/dashboard'" class="ls-ico-dashboard" title="Dashboard">Dashboard</router-link>
                    </li>
                    <li>
                        <router-link :to="'/customers'" class="ls-ico-user" title="Clientes">Clientes</router-link>
                    </li>
                    <li>
                        <router-link :to="'/items'" class="ls-ico-users" title="Lista de Itens">Lista de Itens</router-link>
                    </li>
                    <li>
                        <router-link :to="'/items'" class="ls-ico-table-alt" title="Pagina de aplicativo">Pagina de aplicativo</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'aside'
}
</script>
