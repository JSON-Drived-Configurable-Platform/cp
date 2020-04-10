// 简单示例
let simple = {};

const fields = [
    {
        type: 'Input',
        label: '姓名',
        model: 'name',
        hiddenOn: {
            hasAuth: {
                type: 'enum',
                enum: [0]
            },
            isCheck: {
                type: 'enum',
                enum: [1]
            }
        }
    },
    {
        type: 'Input',
        label: '年龄',
        model: 'age',
        // showOn: {
        //     hasAuth: {
        //         type: 'enum',
        //         enum: [false]
        //     }
        // }
    }
];

const model = {
    name: '张三',
    age: 18,
    hasAuth: 0,
    isCheck: 0
};

simple.data = {
    fields,
    model
};

simple.code = `
<script>
export default {
    data() {
        return {
            fields: ${JSON.stringify(fields)},
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
    <FormGenerator
            :fields="fields"
            :model="model"
        />
</template>
`;

let params = {};
const paramsFields = [
    {
        type: 'Input',
        label: '姓名',
        model: 'name',
        hiddenOn: {
            isShow: {
                type: 'enum',
                enum: [false]
            }
        }
    },
    {
        type: 'Input',
        label: '年龄',
        model: 'age',
        showOn: {
            isShow: {
                type: 'enum',
                enum: [false]
            }
        }
    }
];

const paramsModel = {
    name: '张三',
    age: 12
};
const paramsContainer = {
    isShow: false
};

params.data = {
    paramsContainer,
    paramsFields,
    paramsModel
};
params.code = `
<script>
export default {
    data() {
        return {
            fields: ${JSON.stringify(paramsFields)},
            model: ${JSON.stringify(paramsModel)},
            paramsContainer: ${JSON.stringify(paramsContainer)}
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
    <FormGenerator
            :fields="fields"
            :model="model"
        />
</template>
`;

// hiddenon和showon同时作用于同一个组件上
let bothConfig = {};
const bothFileds = [
    {
        type: 'Input',
        label: '姓名',
        model: 'name',
        hiddenOn: {
            hasAuth: {
                type: 'enum',
                enum: [false]
            }
        },
        showOn: {
            isCheck: {
                type: 'enum',
                enum: [false]
            }
        }
    }
];

const bothModels = {
    name: '张三',
    hasAuth: true,
    isCheck: false
};


bothConfig.data = {
    bothFileds,
    bothModels
};

bothConfig.code = `
<script>
export default {
    data() {
        return {
            fields: ${JSON.stringify(bothFileds)},
            model: ${JSON.stringify(bothModels)}
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
    <FormGenerator
            :fields="fields"
            :model="model"
        />
</template>
`;
// value
export default {
    simple,
    bothConfig,
    params
};
