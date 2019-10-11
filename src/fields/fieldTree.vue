<template>
    <Tree
        :data="computedOptions"
        :show-checkbox="field.showCheckbox"
        :multiple="field.multiple"
        @on-select-change="handleSelectChange"
        @on-check-change="handleCheckChange"
    />
</template>
<script>
function updateNode(nodes = [], checkedList = [], multiple = false) {
    nodes.forEach(node => {
        node.expand = true;
        if (multiple) {
            node.checked = checkedList.includes(node.id);
        }
        else {
            node.selected = checkedList.includes(node.id);
        }
        if (node.children) {
            updateNode(node.children, checkedList, multiple);
        }
    });
}
import getOptions from '../mixins/getOptions';
export default {
    inject: ['form'],
    mixins: [getOptions],
    props: {
        field: {
            type: Object,
            required: true
        },
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
    },
    data() {
        return {
            loading: false,
            options: []
        };
    },
    computed: {
        computedOptions() {
            const values = this.form.model[this.field.model];
            const options = this.options.length > 0 ? this.options : this.field.options;
            const multiple = this.field.multiple;
            updateNode(options, values, multiple);
            return JSON.parse(JSON.stringify(options));
        },
        optionsApi() {
            return !Array.isArray(this.field.options) ? this.field.options : '';
        }
    },
    methods: {
        remoteMethod() {
            if (!this.field.api && !this.optionsApi) {
                return;
            }
            this.getRemoteOptions();
        },
        handleChange(value) {
            this.$set(this.form.model, this.field.model, value);
            this.$emit('on-change', this.field.model, value, null, this.field);
        },
        handleSelectChange(selection) {
            this.handleChange(selection.map(item => item.id));
        },
        handleCheckChange(checked) {
            this.handleChange(checked.map(item => item.id));
        }
    }
};
</script>
