<template>
    <div class="row">
        <h1>Settings</h1>
        <div class="col-12">
            <BaseButton :loading="false" @click="logChange()" />
            <BaseButton :loading="true" @click="logChange()" />
        </div>
        <div class="col-12 mt-3">
            <BaseInput label="test" />
        </div>
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
