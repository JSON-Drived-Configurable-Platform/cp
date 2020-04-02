// 简单示例
let simple = {};

const field = {
    type: 'Slider',
    model: 'percent',
    // range: true,
    showInput: true,
    left: true,
    step: 20,
    inputSize: 'default'
};

const model = {
    // percent: [30, 79]
    percent: 30
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

// value
export default {
    simple
};
