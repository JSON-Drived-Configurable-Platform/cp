// 所有示例都用到的input输入框
const fieldInput = {
    type: 'Input',
    model: 'name',
    required: true
};

const model = {
    name: 'formGenerator'
};

// 简单示例
let simple = {};

const field = {
    type: 'Submit',
    subtype: 'primary',
    size: 'large',
    text: '提交',
    action: {
        api: '/submit',
        method: 'get'
    }
};


simple.data = {
    field
};

simple.code = `
<script>
export default {
    data() {
        return {
            fieldInput: ${JSON.stringify(fieldInput)},
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
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="fieldInput"
            @on-field-change="handleFieldChange"
        />
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

export default {
    fieldInput,
    model,
    simple
};
