<template>
    <div>
        <VoteOptions :options="users" v-slot="{options}">
            <h1>{{ options }}</h1>
        </VoteOptions>
    </div>
</template>

<script>
import VoteOptions from '../../components/VoteOptions.vue';

export default {
    data() {
        return {
            users: [
                {
                    name: 'Jan',
                    surname: 'Kowalski'
                },
                {
                    name: 'Beata',
                    surname: 'Wiolczak',
                },
                {
                    name: 'Damian',
                    surname: 'Lalski',
                }
            ],
        };
    },
    components: {
        VoteOptions,
    },
}
</script>