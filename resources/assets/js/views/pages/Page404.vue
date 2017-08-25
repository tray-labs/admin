<template>
    <div class="app">
        <div class="app-body">
            <div class="ls-txt-center-all">
                <div class="ls-box ls-no-bg ls-box-error">
                    <h1 class="ls-title-intro ls-ico-close">Página não encontrada</h1>
                    <p>O conteúdo pode ter sido removido ou não estar mais disponível.</p>

                    <p><strong>Você pode:</strong></p>
                    <ol>
                        <li>Verificar se digitou corretamente o endereço desejado.</li>
                        <li>Retornar à <router-link :to="'/'" class="ls-color-theme">página inicial.</router-link></li>
                    </ol>
                    <p>Se o problema persistir, entre em contato através de um dos <router-link :to="'/'">canais de atendimento</router-link>.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Page404'
    }
</script>
