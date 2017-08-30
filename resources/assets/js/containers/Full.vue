<template>
    <div class="app">
        <Topbar/>
        <div class="app-body">
            <AppAside/>
            <main class="ls-main">
                <div class="container-fluid ls-lg-margin-bottom">
                    <breadcrumb/>
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import Topbar from '../components/Topbar'
    import AppAside from '../components/Aside'
    import Breadcrumb from '../components/Breadcrumb'

    export default {
        name: 'full',
        components: {
            Topbar,
            AppAside,
            Breadcrumb
        },
        computed: {
            name () {
                return this.$route.name
            },

            list () {
                return this.$route.matched
            }
        }
    }
</script>
