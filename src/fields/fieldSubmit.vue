<template>
    <Button
        :type="field.subtype || 'default'"
        :size="field.size || 'default'"
        :loading="loading"
        @click="handleClick"
    >{{ field.text || '提交' }}</Button>
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
    data() {
        return {
            loading: false
        };
    },
    methods: {
        handleClick() {
<<<<<<< HEAD
            this.$emit('on-submit-click', this);
=======
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
>>>>>>> 1e38ec199c4d4dd3690426c76609dda1bf0ec1a2
        }
    }
};
</script>
