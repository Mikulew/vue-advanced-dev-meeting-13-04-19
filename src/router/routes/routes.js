import Home from '../../components/home/Home.vue';
import Vote from '../../components/vote/Vote.vue';
import Score from '../../components/score/Score.vue';
import Settings from '../../components/settings/Settings.vue';

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/vote',
        name: 'Vote',
        component: Vote,
    },
    {
        path: '/score',
        name: 'Score',
        component: Score,
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
    }
];