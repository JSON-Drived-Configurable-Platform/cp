// 简单示例
let simple = {};

const field = {
    type: 'InputNumber',
    model: 'age',
    max: 10,
    min: 1
};
const stepField = {
    type: 'InputNumber',
    model: 'stepage',
    step: 1.2,
    max: 10,
    min: 1
};
const smallField = {
    type: 'InputNumber',
    model: 'stepage',
    step: 1.2,
    max: 10,
    min: 1,
    size: 'small'
};
const largeField = {
    type: 'InputNumber',
    model: 'stepage',
    step: 1.2,
    max: 10,
    min: 1,
    size: 'large'
};
const disabledField = {
    type: 'InputNumber',
    model: 'stepage',
    step: 1.2,
    max: 10,
    min: 1,
    size: 'large',
    disabled: true
};
const readonlyField = {
    type: 'InputNumber',
    model: 'stepage',
    step: 1.2,
    max: 10,
    min: 1,
    size: 'large',
    readonly: true
};
const model = {
    age: 1
};

simple.data = {
    field,
    stepField,
    smallField,
    largeField,
    disabledField,
    readonlyField,
    model
};

simple.code = `
<script>
const field = ${JSON.stringify(field, null, 4)};
const model = ${JSON.stringify(model, null, 4)};
export default {
    data() {
        return {
            field: field,
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
    </Form>
</template>
`;
simple.stepCode = `
<script>
const stepField = ${JSON.stringify(stepField, null, 4)};
const model = ${JSON.stringify(model, null, 4)};
export default {
    data() {
        return {
            field: stepField,
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
    </Form>
</template>
`;
simple.smallCode = `
<script>
const smallField = ${JSON.stringify(smallField, null, 4)};
const model = ${JSON.stringify(model, null, 4)};
export default {
    data() {
        return {
            field: smallField,
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
    </Form>
</template>
`;
simple.disabledCode = `
<script>
const disabledField = ${JSON.stringify(disabledField, null, 4)};
const model = ${JSON.stringify(model)};
export default {
    data() {
        return {
            field: disabledField,
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
    </Form>
</template>
`;
simple.readonlyCode = `
<script>
const readonlyField = ${JSON.stringify(readonlyField, null, 4)};
const model = ${JSON.stringify(model)};
export default {
    data() {
        return {
            field: readonlyField,
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
    </Form>
</template>
`;

export default {
    simple,
};
