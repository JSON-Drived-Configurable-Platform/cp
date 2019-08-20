// 简单示例
let simple = {};

const field = {
    type: 'Radio',
    model: 'gender',
    options: [
        {label: '男', 'value': 'M'},
        {label: '女', 'value': 'F'},
        {label: '保密', 'value': 'unknown', disabled: true}
    ]
};

const model = {
    gender: 'F'
};

simple.data = {
    field,
    model
};

simple.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(field)},
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
</template>
`;

// 使用api
let api = {};
const apiField = {
    type: 'Radio',
    model: 'gender',
    options: '/radioApi'
    // api: '/radioApi'
};

const apiModel = {
    gender: 'F'
};

api.data = {
    field: apiField,
    model: apiModel
};

api.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(apiField)},
            model: ${JSON.stringify(apiModel)}
        };
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
</template>
`;

export default {
    simple,
    api
};
