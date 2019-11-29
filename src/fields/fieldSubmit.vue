<template>
    <Button
        :type="field.subtype || 'default'"
        @click="handleClick"
    >{{ field.text }}</Button>
</template>
<script>
import axios from '../utils/http';
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
    methods: {
        handleClick() {
            switch (this.field.action.type) {
                case 'ajax':
                    this.submitAjaxAction();
                    break;
                case 'event':
                    this.$emit('on-submit-click', {
                        name: this.field.action.name
                    });
            }
        },
        submitAjaxAction() {
            let apiBase = this.apiBase || '';
            let formModel = this.form.model;
            let url = apiBase + this.field.action.api;
            axios.request({
                url,
                method: 'get',
                params: formModel
            }).then(() => {
                this.$emit('on-submit-click', {
                    name: this.field.action.name
                });
            });
        }
    }
};
</script>
