import HelloWorld from '../../components/HelloWorld.vue';
import Register from '../../components/Register.vue';

export default [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    }
];