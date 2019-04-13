<template>
    <div>
        <h1>Settings</h1>
        <BaseButton :loading="false" @click="logChange()" />
        <BaseButton :loading="true" @click="logChange()" />
        <BaseInput />
    </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

export default {
    components: {
        BaseButton,
        BaseInput,
    },
    mathods: {
        logChange() {
            console.log('logChange');
        }
    }
}
</script>
