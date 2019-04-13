import VueRouter from 'vue-router';
import routes from './routes/routes.js';

export default new VueRouter({ 
    routes,
    mode: 'history',
    base: process.env.BASE_URL,
});