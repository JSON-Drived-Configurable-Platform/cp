<template>
    <Poptip
        v-if="field.confirmPoptip"
        confirm
        :title="field.confirmPoptip.title"
        :placement="field.confirmPoptip.placement"
        :class="classes"
        :ok-text="field.confirmPoptip.okText"
        :cancel-text="field.confirmPoptip.cancelText"
        @on-ok="handleClick"
    >
        <Button
            :type="field.subtype || 'default'"
            :size="field.size || 'default'"
            :disabled="field.disabled || false"
            :loading="loading"
        >{{ field.text }}</Button>
    </Poptip>
    <Button
        v-else
        :type="field.subtype || 'default'"
        :size="field.size || 'default'"
        :disabled="field.disabled || false"
        :class="classes"
        :loading="loading"
        @click="handleClick"
    >{{ field.text }}</Button>
</template>
<script>
import {classPrefix} from '../utils/const';
export default {
    props: {
        field: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            loading: false
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
    },
    methods: {
        handleClick() {
            this.$emit('on-submit-click', this);
        }
    }
};
</script>
