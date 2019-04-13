<template>
    <b-nav fill tabs>
        <router-link to="/" tag="li" class="nav-item">
            <b-nav-item :active="$route.name === '/'">Home</b-nav-item>
        </router-link>
        <router-link to="/vote" tag="li" class="nav-item">
            <b-nav-item :active="$route.name === 'vote'">Vote</b-nav-item>
        </router-link>
        <router-link to="/score" tag="li" class="nav-item">
                <b-nav-item :active="$route.name === 'score'">Score</b-nav-item>
        </router-link>
        <router-link to="/settings" tag="li" class="nav-item"> 
            <b-nav-item :active="$route.name === 'settings'">Settings</b-nav-item>
        </router-link>
    </b-nav>
</template>