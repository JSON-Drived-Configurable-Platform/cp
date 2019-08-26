// 简单示例
let simple = {};

const field = {
    type: 'Checkbox',
    model: 'fruit',
    options: [
        {label: '西瓜', 'value': '1'},
        {label: '苹果', 'value': '2'},
        {label: '梨', 'value': '3', disabled: true}
    ]
};

const model = {
    fruit: ['1', '2']
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
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

// 使用api
let api = {};
const apiField = {
    type: 'Checkbox',
    model: 'fruit',
    options: '/checkboxApi'
    // api: '/radioApi'
};

const apiModel = {
    fruit: ['1', '2']
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
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
    </Form>
</template>
`;

// 全选
let checkAll = {};
const checkAllField = {
    type: 'Checkbox',
    model: 'fruit',
    checkAll: true,
    options: [
        {label: '西瓜', 'value': '1'},
        {label: '苹果', 'value': '2'},
        {label: '梨', 'value': '3'}
    ]
};

const checkAllModel = {
    fruit: ['1', '2']
};

checkAll.data = {
    field: checkAllField,
    model: checkAllModel
};

checkAll.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(checkAllField)},
            model: ${JSON.stringify(checkAllModel)}
        };
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
    </Form>
</template>
`;

export default {
    simple,
    api,
    checkAll
};
