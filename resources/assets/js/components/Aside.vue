<template>
    <aside class="ls-sidebar">
        <div class="ls-sidebar-inner">
            <a href="/locawebstyle/documentacao/exemplos//pre-painel" class="ls-go-prev">
                <span class="ls-text">Voltar à lista de serviços</span>
            </a>
            <nav class="ls-menu">
                <ul>
                    <li>
                        <router-link :to="'/dashboard'" class="ls-ico-dashboard" title="Dashboard">Dashboard</router-link>
                    </li>
                    <li>
                        <router-link :to="'/customers'" class="ls-ico-users" title="Clientes">Clientes</router-link>
                    </li>
                    <li>
                        <a href="/locawebstyle/documentacao/exemplos/painel1/stats" class="ls-ico-stats" title="Relatórios da revenda">Relatórios da revenda</a>
                    </li>
                    <li>
                        <a href="#" class="ls-ico-cog" title="Configurações">Configurações</a>
                        <ul>
                            <li>
                                <a href="/locawebstyle/documentacao/exemplos/painel1/config-domain">Domínios da Revenda</a>
                            </li>
                            <li>
                                <a href="/locawebstyle/documentacao/exemplos/painel1/config-email">E-mail de Remetente</a>
                            </li>
                            <li>
                                <a href="/locawebstyle/documentacao/exemplos/painel1/config-aspect">Aparência</a>
                            </li>
                            <li>
                                <a href="/locawebstyle/documentacao/exemplos/painel1/config-answer">Atendimento</a>
                            </li>
                            <li>
                                <a href="/locawebstyle/documentacao/exemplos/painel1/config-api">Chave de acesso para API</a>
                            </li>
                        </ul>
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
