<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'app',
        mounted() {
            this.checkPageExist();
        },
        watch : {
            '$route' () {
                this.checkPageExist();
            }
        },
        methods: {
            checkPageExist: function () {
                if(!this.$route.matched.length) {
                    return this.$router.push('/pages/404');
                }
            }
        }
}
</script>
