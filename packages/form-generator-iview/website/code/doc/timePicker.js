// 简单示例
let simple = {};

const field = {
    type: 'TimePicker',
    model: 'time'
};

const timeDisabledField = {
    type: 'TimePicker',
    model: 'time',
    disabled: true
};

const timeLargeField = {
    type: 'TimePicker',
    model: 'time',
    size: 'large'
};
const timeSmallField = {
    type: 'TimePicker',
    model: 'time',
    size: 'small'
};
const timeDefaultField = {
    type: 'TimePicker',
    model: 'time',
    size: 'default'
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
    timeDisabledField,
    timerangeField,
    timeLargeField,
    timeSmallField,
    timeDefaultField,
    model
};

simple.code = `
<script>
const field = ${JSON.stringify(field, null, 4)};
const timerangeField =  ${JSON.stringify(timerangeField, null, 4)};
const model = ${JSON.stringify(model, null, 4)};
export default {
    data() {
        return {
            field: field,
            timerangefield: timerangeField,
            model: model
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
simple.disabledCode = `
<script>
const timeDisabledField = ${JSON.stringify(timeDisabledField, null, 4)};
const timerangeField =  ${JSON.stringify(timerangeField, null, 4)};
const model = ${JSON.stringify(model, null, 4)};
export default {
    data() {
        return {
            field: timeDisabledField,
            timerangefield: timerangeField,
            model: model
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
