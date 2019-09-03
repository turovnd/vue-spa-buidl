export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue'),
    },

    {
        path: '/page-1',
        name: 'Component1',
        component: () => import('../components/Component1.vue'),
    },

    {
        path: '/page-2',
        name: 'Component2',
        component: () => import('../components/Component2.vue'),
    },

    {
        path: '*',
        redirect: '/'
    }
];
