<template>
  <div class="app">
    <Topbar/>
    <div class="app-body">
      <main class="ls-main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
        <AppFooter/>
      </main>
      <AppAside/>
    </div>
  </div>
</template>

<script>
import Topbar from '../components/Topbar'
import AppAside from '../components/Aside'
import AppFooter from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

export default {
  name: 'full',
  components: {
    Topbar,
    AppAside,
    AppFooter,
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
