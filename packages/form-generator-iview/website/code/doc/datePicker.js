// 简单示例
let simple = {};

const field = {
    type: 'DatePicker',
    model: 'date'
};

const daterangeField = {
    type: 'DatePicker',
    subtype: 'daterange',
    model: 'daterange'
};

const model = {
    date: '2019-03-07',
    daterange: ['2019-03-07', '2019-12-14']
};

simple.data = {
    field,
    daterangeField,
    model
};

simple.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(field)},
            daterangefield: ${JSON.stringify(daterangeField)},
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
        :field="daterangeField"
        :form-model="model"
        @on-field-change="handleFieldChange"
    />
</template>
`;

export default {
    simple
};
