// 简单示例
let simple = {};

const field = {
    type: 'LogicSelect',
    label: '逻辑选择',
    model: 'version',
    required: true,
    enables: ['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple'],
    options: [
        {
            label: '1.0',
            value: '1.0'
        },
        {
            label: '1.1',
            value: '1.1'
        },
        {
            label: '1.3',
            value: '1.3'
        },
        {
            label: '1.4',
            value: '1.4'
        },
        {
            label: '2.0',
            value: '2.0'
        },
        {
            label: '2.1',
            value: '2.1'
        },
        {
            label: '2.3',
            value: '2.3'
        },
        {
            label: '2.4',
            value: '2.4'
        }
    ]
};

const model = {
    version: {
        logic: 'betweenWith',
        value: ['1.3', '2.1']
    }
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
            field: ${JSON.stringify(field, null, 4)},
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

export default {
    simple,
};
