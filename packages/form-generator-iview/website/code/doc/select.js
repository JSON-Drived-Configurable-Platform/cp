// 简单示例
let simple = {};

const field = {
    type: 'Select',
    model: 'city',
    options: [
        {label: '北京', 'value': 'Beijing'},
        {label: '上海', 'value': 'Shanghai'},
        {label: '广州', 'value': 'Guangzhou'},
        {label: '深圳', 'value': 'Shenzhen'}
    ]
};

const model = {
    city: 'Beijing'
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
    type: 'Select',
    model: 'city',
    options: '/selectApi'
};

const apiModel = {
    city: 'Beijing'
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
