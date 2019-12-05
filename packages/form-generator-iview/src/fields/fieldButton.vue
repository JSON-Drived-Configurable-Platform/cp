<template>
    <Poptip
        v-if="field.confirmPoptip"
        confirm
        :title="field.confirmPoptip.title"
        :placement="field.confirmPoptip.placement"
        :class="classes"
        @on-ok="handleClick"
    >
        <Button
            :type="field.subtype || 'default'"
            :size="field.size || 'default'"
            :loading="loading"
        >{{ field.text }}</Button>
    </Poptip>
    <Button
        v-else
        :type="field.subtype || 'default'"
        :size="field.size || 'default'"
        :class="classes"
        :loading="loading"
        @click="handleClick"
    >{{ text }}</Button>
</template>
<script>
import {classPrefix} from '../utils/const';
export default {
    inject: ['form'],
    props: {
        field: {
            type: Object,
            required: true
        },
        apiBase: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            text: '',
            loading: false
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
    },
    mounted() {
        this.text = this.field.text;
    },
    methods: {
        handleClick() {
            switch (this.field.action.type) {
                case 'ajax':
                    this.$emit('on-http-request', this);
                    break;
                case 'event':
                    this.$emit('on-button-event', {
                        name: this.field.action.name,
                        field: this.field
                    });
                    break;
            }
        },
    },
};
</script>
