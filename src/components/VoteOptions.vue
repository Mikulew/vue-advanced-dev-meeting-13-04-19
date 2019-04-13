<template>
    <div>
        <slot v-for="option in options" :options="option">{{ option }}</slot>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Object,
            required: false,
            default: () => ([
                {
                    name: 'AAA',
                    surname: 'BBB',
                },
                {
                    name: 'CCC',
                    surname: 'DDD',
                }
            ]),
        },
    }
}
</script>