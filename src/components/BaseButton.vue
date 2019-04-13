<template>
    <button class="btn btn-primary mx-1" :disabled="loading">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
}
</script>