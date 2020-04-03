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



// range示例
let range = {};

const field_range = {
    type: 'Slider',
    model: 'percent',
    range: true,
    // showInput: true,
    // left: true,
    step: 10,
    inputSize: 'default'
};

const model_range = {
    percent: [30, 80]
    // percent: 30
};

range.data = {
    field: field_range,
    model: model_range
};

range.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(field_range)},
            model: ${JSON.stringify(model_range)}
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
    simple,
    range
};
