// 简单示例
let simple = {};

const field = {
    type: 'Tag',
    model: 'status',
    options: [
        {
            name: '正常',
            value: '1',
            color: 'primary'
        },
        {
            name: '黑用户',
            value: '2',
            color: 'error'
        }
    ]
};

const model = {
    status: '1'
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

// 多个示例
let multiple = {};

const multipleField = {
    type: 'Tag',
    model: 'status',
    options: [
        {
            name: '正常',
            value: '1',
            color: 'primary'
        },
        {
            name: '黑用户',
            value: '2',
            color: 'error'
        }
    ]
};

const multipleModel = {
    status: ['1', '2']
};

multiple.data = {
    field: multipleField,
    model: multipleModel
};

multiple.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(multipleField)},
            model: ${JSON.stringify(multipleModel)}
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

export default {
    simple,
    multiple
};
