<template>
    <label :for="checkId">
        {{ label }}
        <input :id="checkId" type="text" />
    </label>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: false,
            default: '',
        }
    },
    data() {
        return {
            id: null,
        };
    },
    computed: {
        checkId() {
            if (this.label === undefined || !this.label) {
                console.log(this.id);
                return this.id = Math.random();
            }
            return this.id = this.label;
        }
    },
}
</script>