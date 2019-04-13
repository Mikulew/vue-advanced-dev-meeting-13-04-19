import Home from '@/layout/home/Home.vue';
import Vote from '@/layout/vote/Vote.vue';
import Score from '@/layout/score/Score.vue';
import Settings from '@/layout/settings/Settings.vue';

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