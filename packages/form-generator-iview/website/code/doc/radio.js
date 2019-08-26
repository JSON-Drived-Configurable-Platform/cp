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
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
    </Form>
</template>
`;

// 按钮形态
let button = {};
const buttonField = {
    type: 'Radio',
    model: 'fruit',
    options: '/radioApi',
    subtype: 'button'
    // api: '/radioApi'
};

const buttonModel = {
    fruit: 'F'
};

button.data = {
    field: buttonField,
    model: buttonModel
};

button.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(buttonField)},
            model: ${JSON.stringify(buttonModel)}
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
    button
};
