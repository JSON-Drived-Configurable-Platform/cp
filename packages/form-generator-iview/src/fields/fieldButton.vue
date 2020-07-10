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
        @on-cancel="handelCancel"
    >
        <Button
            :type="field.subtype || 'default'"
            :size="field.size || 'default'"
            :disabled="field.disabled || false"
            :loading="loading"
        >{{ text }}</Button>
    </Poptip>
    <Button
        v-else
        :type="field.subtype || 'default'"
        :size="field.size || 'default'"
        :disabled="field.disabled || false"
        :class="classes"
        :loading="loading"
        @click="handleClick"
    >{{ text }}</Button>
</template>
<script>
import {classPrefix} from '../utils/const';

export default {
    inject: ['FormInstance'],
    props: {
        field: {
            type: Object,
            required: true
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
        if (this.field.textModel) {
            this.text = this.FormInstance.model[this.field.textModel];
        }
    },
    methods: {
        handleClick() {
            const action = this.field.action;
            const model = this.field.model;
            const value = this.FormInstance.model[model];
            switch (action.type) {
                case 'ajax':
                    this.$emit('on-http-request', this);
                    break;
                case 'event':
                    this.$emit('on-button-event', {
                        name: action.name,
                        field: this.field
                    });
                    break;
                // vue route
                case 'route':
                    // If use model, get route from the form.model
                    this.$router && this.$router.push(value || action.route);
                    break;
                // url
                case 'url':
                    // If use model, get url from the form.model
                    window.open(value || action.url);
                    break;
            }
        },
        handelCancel() {
            this.$emit('on-button-cancel', this);
        }
    },
};
</script>
