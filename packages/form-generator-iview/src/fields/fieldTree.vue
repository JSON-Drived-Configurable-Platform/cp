<template>
    <div v-if="loading">
        <Icon
            type="ios-loading"
            size="18"
            class="spin-icon-load"
        />
    </div>
    <Tree
        v-else
        :class="classes"
        :data="computedOptions"
        :show-checkbox="field.showCheckbox"
        :check-directly="field.checkDirectly"
        :check-strictly="field.checkStrictly"
        :multiple="field.multiple"
        @on-select-change="handleSelectChange"
        @on-check-change="handleCheckChange"
    />
</template>
<script>
function updateNode(nodes = [], checkedList = [], multiple = false) {
    nodes.forEach((node, index) => {
        // node.expand = false;
        if (multiple) {
            node.checked = checkedList.includes(node.id);
        }
        else {
            node.selected = checkedList.includes(node.id);
        }
        if (node.children) {
            updateNode(node.children, checkedList, multiple);
            node.children.forEach(item => {
                if (checkedList.length !==0 && checkedList.includes(item.id)) {
                    nodes[index].expand = true;
                }
            });
        }
    });
}
import {classPrefix} from '../utils/const';
import getOptions from '../mixins/getOptions';
import {getValue} from '../utils/processValue';

export default {
    inject: ['FormInstance'],
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
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        computedOptions() {
            const values = getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            });
            const options = this.options.length > 0 ? this.options : this.field.options;
            const multiple = this.field.multiple;
            if (Array.isArray(options)) {
                updateNode(options, values, multiple);
                return JSON.parse(JSON.stringify(options));
            }
            else {
                return [];
            }

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
            this.$emit('on-change', this.field.model, value, null, this.field);
        },
        handleSelectChange(selection) {
            if (this.field.multiple) {
                return;
            }
            this.handleChange(selection.map(item => item.id));
        },
        handleCheckChange(checked) {
            this.handleChange(checked.map(item => item.id));
        }
    }
};
</script>
