// 简单示例
let simple = {};

const field = {
    type: 'TimePicker',
    model: 'time'
};

const timerangeField = {
    type: 'TimePicker',
    subtype: 'timerange',
    model: 'timerange'
};

const model = {
    time: '03:07',
    timerange: ['03:07', '12:14']
};

simple.data = {
    field,
    timerangeField,
    model
};

simple.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(field)},
            timerangefield: ${JSON.stringify(timerangeField)},
            model: ${JSON.stringify(model)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
        @on-field-change="handleFieldChange"
    />
    <FieldGenerator
        :field="timerangeField"
        :form-model="model"
        @on-field-change="handleFieldChange"
    />
</template>
`;


export default {
    simple
};
