<template>
    <div class="row">
        <h1>Settings</h1>
        <div class="col-12">
            <BaseButton :loading="false" @click="logChange()">
                <span>BaseButton first</span>
            </BaseButton>
            <BaseButton :loading="true" @click="logChange()">
                <span>BaseButton second</span>
            </BaseButton>
        </div>
        <div class="col-12 mt-3">
            <BaseInput label="test" @input="logInput()" />
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
        },
        logInput() {
            console.log('logInput');
        }
    }
}
</script>
