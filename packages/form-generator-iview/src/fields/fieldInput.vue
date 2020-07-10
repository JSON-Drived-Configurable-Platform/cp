<template>
    <i-input
        :value="value"
        :type="field.subtype"
        :placeholder="field.placeholder"
        :clearable="field.clearable"
        :disabled="field.disabled"
        :readonly="field.readonly"
        :maxlength="field.maxlength"
        :icon="field.icon"
        :prefix="field.prefix"
        :suffix="field.suffix"
        :autofocus="field.autofocus"
        :autocomplete="field.autocomplete"
        :autosize="field.autosize"
        :search="field.search"
        :spellcheck="field.spellcheck"
        :rows="field.rows"
        :number="field.number"
        :enter-button="field.enterButton"
        :size="size"
        @on-change="handleChange"
    >
        <span v-if="field.prepend" slot="prepend">{{ field.prepend }}</span>
        <span v-if="field.append" slot="append">{{ field.append }}</span>
    </i-input>
</template>
<script>
import {Input} from 'view-design';
import {getValue} from '../utils/processValue';

export default {
    inject: ['FormInstance'],
    components: {
        iInput: Input
    },
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
        }
    },
    data() {
        return {
            prependSelectModel: '',
            appendSelectModel: '',
            localModel: {}
        };
    },
    computed: {
        value() {
            return getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            }) || '';
        }
    },
    methods: {
        handleChange(e) {
            let value = e.target.value;
            this.$emit('on-change', this.field.model, value, e, this.field);
        }
    }
};
</script>
