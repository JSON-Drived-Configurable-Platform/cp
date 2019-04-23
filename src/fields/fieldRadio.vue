<template>
    <RadioGroup
        :value="model"
        @on-change="handleChange"
    >
        <Radio
            v-for="item in field.options"
            :label="item.value"
            :disabled="item.disabled"
            :key="item.value"
        >{{item.label}}</Radio>
    </RadioGroup>
</template>
<script>
import {RadioGroup, Radio} from 'iview';
export default {
    components: {
        RadioGroup,
        Radio
    },
    props: {
        model: {
            type: [String, Number],
            required: true
        },
        field: {
            type: Object,
            required: true
        },
        onChange: {
            type: Function,
            required: true
        }
    },
    computed: {
        remote() {
            return !!this.field.api
        },
        filterable() {
            return !!this.field.api || this.field.filterable
        }
    },
    methods: {
        remoteMethod(field) {
            if (!this.field.api) {
                return;
            }
            this.loading = true;
        },
        handleChange(value) {
            this.onChange(this.field.model, value, null, this.field);
        }
    },
    data() {
        return {
            loading: false
        };
    }
}
</script>
