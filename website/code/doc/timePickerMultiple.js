// 简单示例
let simple = {
    data: {
        field: {
            type: 'TimePickerMultiple',
            model: 'time',
            tips: '多时间段：5:00~6:00',
            format: 'hh:mm',
            timeSplit: ' - '
        },
        model: {
            time: ['08:10 - 12:00']
        }
    }
};

simple.code = `
<script>
const field = ${JSON.stringify(simple.data.field, null, 4)};
const model = ${JSON.stringify(simple.data.model, null, 4)};
export default {
    data() {
        return {
            field,
            model
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
    simple
};
