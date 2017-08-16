<template>
    <div>
        <h1 class="ls-title-intro ls-ico-users">Clientes</h1>

        <div class="ls-box-disclaimer">
            <h2 class="ls-title-1">Nenhum cliente cadastrado</h2>
            <p>Você ainda não possui nenhum cliente cadastrado. <br>Cadastre um cliente e começe a gerenciar sua revenda de Email Marketing.</p>
            <router-link :to="{ name: 'newcustomer'}" class="ls-btn-primary">Cadastrar Cliente</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nocustomers'
    }
</script>
