<template>
    <div class="ls-title-intro ls-no-margin-bottom ls-no-border">
        <ol v-if="hasMetaLabel" class="ls-breadcrumb ls-no-border">
            <li class="ls-no-padding-left" v-for="(item, index) in breadcrumbs">
                <router-link :to="{name: item.name}">{{ item.label }}</router-link>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                breadcrumbs: [],
                hasMetaLabel: true
            }
        },
        watch: {
            '$route' () {
                locastyle.init();
                this.createBreadCrumb();
            }
        },
        methods: {
            createBreadCrumb: function () {
                this.breadcrumbs = [];
                let routeMetaData = this.$route.meta;
                if(this.$route.meta.label == undefined) {
                    return this.hasMetaLabel = false;
                } else if(routeMetaData.breadcrumb) {
                    let pieces = routeMetaData.breadcrumb.split('.');
                    for(let count = 0; count < pieces.length; count++) {
                        console.log(pieces[count]);
                        let previousRoute = this.$router.resolve({name: pieces[count]}).route;
                        this.addPreviousUrl(previousRoute.meta.label, previousRoute.name);
                    }
                }
                this.addCurrentUrl(routeMetaData.label);
            },
            addPreviousUrl: function (label, routeName) {
                this.breadcrumbs.push({
                    label: label,
                    name: routeName
                });
            },
            addCurrentUrl: function (label) {
                this.breadcrumbs.push({
                    label: label
                });
            }
        },
        mounted() {
            this.createBreadCrumb();
        }
    }
</script>
