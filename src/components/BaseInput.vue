<template>
    <label :for="checkId">
        {{ label }}
        <b-form-input :id="checkId"
                      type="text"
                      v-model="name"
                      :state="$v.name.touch"
                      aria-describedby="input-live-help input-live-feedback"
                      placeholder="Enter your name"
                      trim>   
        </b-form-input>
        <b-form-invalid-feedback id="input-live-feedback" >
            Enter at least 3 letters
        </b-form-invalid-feedback>
    </label>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
    props: {
        label: {
            type: String,
            required: false,
            default: '',
        },
    },
    data() {
        return {
            id: null,
            name: '',
        };
    },
    validations: {
        name: {
            required,
            minLength: minLength(2)
        },
    },
    computed: {
        checkId() {
            if (this.label === undefined || !this.label) {
                return this.id = Math.random();
            }
            return this.id = this.label;
        }
    },
}
</script>