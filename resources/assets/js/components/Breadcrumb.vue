<template>
    <ol class="ls-breadcrumb">
        <li v-for="(item, index) in currentUrl">
            <span class="active" v-if="isLast(index)">{{ item.name }}</span>
            <router-link :to="'/home'" v-else-if="isFirst(index)">{{ item.name }}</router-link>
            <router-link :to="{name: item.route}" v-else>{{ item.name }}</router-link>
        </li>
    </ol>
</template>

<script>
    export default {
        props: {
            list: {
                type: Array,
                required: true,
                default: () => []
            },
            separator: String
        },
        data() {
            return {
                currentUrl: []
            }
        },
        watch: {
            '$route' () {
                this.breadCrumb();
            }
        },
        methods: {
            isLast (index) {
                return index === this.currentUrl.length - 1
            },
            isFirst (index) {
                return index === 0
            },
            upperFirstLetter (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
            breadCrumb () {
                let vm = this;
                this.currentUrl = [];
                this.$route.path.split("/").forEach(function(val) {
                    vm.currentUrl.push({ name: vm.upperFirstLetter(val), route: val});
                });
                this.currentUrl[0].name = 'Home';
                this.currentUrl[0].route = 'home';
            }
        },
        mounted() {
            this.breadCrumb();
        }
    }
</script>
