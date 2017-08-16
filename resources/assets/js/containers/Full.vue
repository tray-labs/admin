<template>
  <div class="app">
    <Topbar/>
    <div class="app-body">
      <AppAside/>
      <main class="ls-main">
        <div class="container-fluid">
          <breadcrumb/>
          <router-view></router-view>
        </div>
        <AppNotification/>
      </main>
    </div>
  </div>
</template>

<script>
    import Topbar from '../components/Topbar'
    import AppAside from '../components/Aside'
    import AppFooter from '../components/Footer'
    import AppNotification from '../components/Notification'
    import Breadcrumb from '../components/Breadcrumb'

    export default {
        name: 'full',
        components: {
            Topbar,
            AppAside,
            AppFooter,
            AppNotification,
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
