import Vue from 'vue';
import Router from 'vue-router';

// Containers
import Full from '../containers/Full.vue';

// Views
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import Customers from '../views/Customers.vue';
import NewCustomer from '../views/customers/NewCustomer.vue';
import NoCustomers from '../views/customers/NoCustomers.vue';
import Customer from '../views/customers/Customer.vue';
import Apps from '../views/Apps.vue';
import Items from '../views/Items.vue';
import AddItem from '../views/items/AddItem.vue';

// Views - Pages
import Page404 from '../views/pages/Page404.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: '/home',
        name: 'Home',
        component: Full,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home,
                meta: {
                    label: 'Início'
                }
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                component: Dashboard,
                meta: {
                    label: 'Dashboard',
                    breadcrumb: 'home'
                }
            },
            {
                path: 'customers',
                name: 'customers',
                component: Customers,
                meta: {
                    label: 'Clientes',
                    breadcrumb: 'home'
                }
            },
            {
                path: '/customers/newcustomer',
                name: 'newcustomer',
                component: NewCustomer,
                meta: {
                    breadcrumb: 'home.customers',
                    label: 'Novo Cliente'
                }
            },
            {
                path: '/customers/newcustomer/nocustomers',
                name: 'nocustomers',
                component: NoCustomers,
                meta: {
                    breadcrumb: 'home.customers.newcustomer',
                    label: 'Sem Clientes'
                }
            },
            {
                path: '/customer',
                name: 'customer',
                component: Customer,
                meta: {
                    breadcrumb: 'home.customers',
                    label: 'Cliente'
                }
            },
            {
                path: 'items',
                name: 'items',
                component: Items,
                meta: {
                    label: 'Itens',
                    breadcrumb: 'home'
                }
            },
            {
                path: 'items/add',
                name: 'additem',
                component: AddItem,
                meta: {
                    label: 'Incluir Item',
                    breadcrumb: 'home.items'
                }
            },
            {
                path: 'apps',
                name: 'apps',
                component: Apps,
                meta: {
                    label: 'Apps',
                    breadcrumb: 'home'
                }
            },
        ]
    },
    {
        path: '/pages',
        redirect: '/pages/p404',
        name: 'Pages',
        component: {
            render (c) { return c('router-view'); }
        },
        children: [
            {
                path: '404',
                name: 'Page404',
                component: Page404
            }
        ]
    },
    {
        path: '*',
        component: Page404
    }
];

export default new Router({
    mode: 'hash', // hash or hash = Demo is living in GitHub.io, so required!
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
});
