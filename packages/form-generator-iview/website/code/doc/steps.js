// 简单示例
let simple = {};

const field = {
    type: 'Steps',
    model: 'step',
    options: [
        {title: '已完成', 'content': '这里是该步骤的描述信息'},
        {title: '进行中', 'content': '这里是该步骤的描述信息'},
        {title: '待进行', 'content': '这里是该步骤的描述信息'}
    ]
};

const model = {
    step: 0
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


export default {
    simple,
    api
};
