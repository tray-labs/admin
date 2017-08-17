import Vue from 'vue';
import Router from 'vue-router';

// Containers
import Full from '../containers/Full.vue';

// Views
import Dashboard from '../views/Dashboard.vue';
import Home from '../views/Home.vue';
import Customers from '../views/Customers.vue';
import NewCustomer from '../views/customers/NewCustomer.vue';
import NoCustomers from '../views/customers/NoCustomers.vue';
import Apps from '../views/Apps.vue';
import Customer from '../views/customers/Customer.vue';
import Items from '../views/Items.vue';
import AddItem from '../views/items/AddItem.vue';
import Charts from '../views/Charts.vue';
import Widgets from '../views/Widgets.vue';

// Views - Components
import Buttons from '../views/components/Buttons.vue';
import SocialButtons from '../views/components/SocialButtons.vue';
import Cards from '../views/components/Cards.vue';
import Forms from '../views/components/Forms.vue';
import Modals from '../views/components/Modals.vue';
import Switches from '../views/components/Switches.vue';
import Tables from '../views/components/Tables.vue';

// Views - Icons
import FontAwesome from '../views/icons/FontAwesome.vue';
import SimpleLineIcons from '../views/icons/SimpleLineIcons.vue';

// Views - Pages
import Page404 from '../views/pages/Page404.vue';
import Page500 from '../views/pages/Page500.vue';
import Login from '../views/pages/Login.vue';
import Register from '../views/pages/Register.vue';

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
            {
                path: 'charts',
                name: 'Charts',
                component: Charts
            },
            {
                path: 'widgets',
                name: 'Widgets',
                component: Widgets
            },
            {
                path: 'components',
                redirect: '/components/buttons',
                name: 'Components',
                component: {
                    render (c) { return c('router-view'); }
                },
                children: [
                    {
                        path: 'buttons',
                        name: 'Buttons',
                        component: Buttons
                    },
                    {
                        path: 'social-buttons',
                        name: 'Social Buttons',
                        component: SocialButtons
                    },
                    {
                        path: 'cards',
                        name: 'Cards',
                        component: Cards
                    },
                    {
                        path: 'forms',
                        name: 'Forms',
                        component: Forms
                    },
                    {
                        path: 'modals',
                        name: 'Modals',
                        component: Modals
                    },
                    {
                        path: 'switches',
                        name: 'Switches',
                        component: Switches
                    },
                    {
                        path: 'tables',
                        name: 'Tables',
                        component: Tables
                    }
                ]
            },
            {
                path: 'icons',
                redirect: '/icons/font-awesome',
                name: 'Icons',
                component: {
                    render (c) { return c('router-view'); }
                },
                children: [
                    {
                        path: 'font-awesome',
                        name: 'Font Awesome',
                        component: FontAwesome
                    },
                    {
                        path: 'simple-line-icons',
                        name: 'Simple Line Icons',
                        component: SimpleLineIcons
                    }
                ]
            }
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
            },
            {
                path: '500',
                name: 'Page500',
                component: Page500
            },
            {
                path: 'login',
                name: 'Login',
                component: Login
            },
            {
                path: 'register',
                name: 'Register',
                component: Register
            }
        ]
    }
];

export default new Router({
    mode: 'hash', // hash or hash = Demo is living in GitHub.io, so required!
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
});
