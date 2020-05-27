// 简单示例
let simple = {
    data: {
        field: {
            type: 'TimeCycleSelect',
            model: 'time',
            tipsName: ['投放', '不投放'],
            yAxisName:['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
            xAxisName: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            xAxisNum: 24,
            yAxisNum: 7,
            width: '409'
        },
        model: {
            time: '000000000000000000000000000000000000000000000000000011111111111111111000000011111111111111111000000011111111111111111000000011111111111111111000000000000000000000000000'
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
