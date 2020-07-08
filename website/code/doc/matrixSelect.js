// 简单示例
let simple = {};

const columns = Array.apply(null, new Array(24)).map((_, index) => {
    return {
        label: `${index}:00`
    };
});

const rows = Array.apply(null, new Array(7)).map((_, index) => {
    return {
        label: `星期${index}`
    };
});

const options = rows.map((row, rowIndex) => {
    return columns.map((column, columnIndex) => {
        return {
            value: `${rowIndex}-${columnIndex}`
        };
    });
});

const field = {
    type: 'MatrixSelect',
    model: [],
    columns,
    rows,
    options,
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
            field: ${JSON.stringify(field, null, 4, 4)},
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
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

export default {
    simple
};
