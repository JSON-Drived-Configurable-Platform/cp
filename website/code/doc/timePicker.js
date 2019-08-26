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
    time: '03:07:00',
    timerange: ['03:07:00', '12:14:00']
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
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
        <FieldGenerator
            :field="timerangeField"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;


export default {
    simple
};
