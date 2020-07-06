// 简单示例
let simple = {};

const fields = [
    {
        label: '展示年龄',
        type: 'Radio',
        model: 'isShow',
        subtype: 'button',
        options: [
            {label: '显示', value: 1},
            {label: '隐藏', value: 0},
        ]
    },
    {
        type: 'Input',
        label: '姓名',
        model: 'name'
    },
    {
        type: 'Input',
        label: '年龄',
        model: 'age',
        showOn: {
            isShow: {
                type: 'enum',
                enum: [1]
            }
        }
    }
];

const model = {
    name: '张三',
    age: 18,
    isShow: 0
};

simple.data = {
    fields,
    model
};

simple.code = `
<script>
const fields = ${JSON.stringify(fields, null, 4)};
const model = ${JSON.stringify(model, null, 4)};
export default {
    data() {
        return {
            fields,
            model
        };
    },
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
</script>
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
        model: 'name'
    },
    {
        type: 'Input',
        label: '年龄',
        model: 'age',
        showOn: {
            isShow: {
                type: 'enum',
                enum: [1]
            }
        }
    }
];

// 外部变量控制
const paramsModel = {
    name: '张三',
    age: 12
};
const paramsContainer = {
    isShow: 0
};

params.data = {
    paramsContainer,
    paramsFields,
    paramsModel
};
params.code = `
<script>
const fields = ${JSON.stringify(paramsFields, null, 4)};
const model = ${JSON.stringify(paramsModel, null, 4)};
const paramsContainer = ${JSON.stringify(paramsContainer, null, 4)};
export default {
    data() {
        return {
            fields,
            model,
            paramsContainer
        };
    },
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
</script>
<template>
    <div>
        <RadioGroup v-model="code.params.data.paramsContainer.isShow" size="small">
            <Radio :label="0"> 隐藏 </Radio>
            <Radio :label="1"> 展示 </Radio>
        </RadioGroup>
        <FormGenerator
            :fields="code.params.data.paramsFields"
            :model="code.params.data.paramsModel"
            :params-container="code.params.data.paramsContainer"
        />
        <div slot="desc">
            <p>在某些场景下，控制元素显示（隐藏）的字段可能不在表单中返回，这时，我们就可以使用paramContainer来实现元素的显示（隐藏）这一功能，只需要把变量放到paramContainer中就可以了。</p>
        </div>
        <i-code slot="code" lang="html">{{ code.params.code }}</i-code>
    </div>
</template>
`;

// hiddenon和showon同时作用于同一个组件上
let bothConfig = {};
const bothFileds = [
    {
        label: '展示',
        type: 'Radio',
        model: 'isShow',
        subtype: 'button',
        options: [
            {label: '显示', value: 1},
            {label: '隐藏', value: 0},
        ]
    },
    {
        label: '隐藏',
        type: 'Radio',
        model: 'isHide',
        subtype: 'button',
        options: [
            {label: '显示', value: 0},
            {label: '隐藏', value: 1},
        ]
    },
    {
        type: 'Input',
        label: '姓名',
        model: 'name',
        hiddenOn: {
            isHide: {
                type: 'enum',
                enum: [1]
            }
        },
        showOn: {
            isShow: {
                type: 'enum',
                enum: [1]
            }
        },
    }
];

const bothModels = {
    name: '张三',
    isShow: 1
};


bothConfig.data = {
    bothFileds,
    bothModels
};

bothConfig.code = `
<script>
const fields = ${JSON.stringify(bothFileds, null, 4)};
const model = ${JSON.stringify(bothModels, null, 4)};
export default {
    data() {
        return {
            fields,
            model
        };
    },
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
</script>
<template>
    <FormGenerator
        :fields="fields"
        :model="model"
    />
</template>
`;

// rules为alidator
let validatorConfig = {};

const validatorModels = {
    name: '小红',
    age: 10,
    gender: 0
};

const validateCheck = (rule, value) => {
    return value < 14;
};

const validatorFileds = [
    {
        label: '性别',
        type: 'Radio',
        model: 'gender',
        subtype: 'button',
        options: [
            {label: '男', value: 1},
            {label: '女', value: 0},
        ]
    },
    {
        type: 'InputNumber',
        label: '年龄',
        model: 'age'
    },
    {
        type: 'Input',
        label: '姓名',
        model: 'name',
        showOn: {
            age: {
                type: 'number',
                validator: validateCheck
            },
            gender: {
                type: 'enum',
                enum: [0]
            }
        }
    },
];


validatorConfig.data = {
    validatorFileds,
    validatorModels
};

validatorConfig.code = `
<script>
const validateCheck = (rule, value) => {
    return value < 14;
};
export default {
    data() {
        return {
            fields: [
                {
                    label: '性别',
                    type: 'Radio',
                    model: 'gender',
                    subtype: 'button',
                    options: [
                        {label: '男', value: 1},
                        {label: '女', value: 0},
                    ]
                },
                {
                    type: 'InputNumber',
                    label: '年龄',
                    model: 'age'
                },
                {
                    type: 'Input',
                    label: '姓名',
                    model: 'name',
                    showOn: {
                        age: {
                            type: 'number',
                            validator: validateCheck
                        },
                        gender: {
                            type: 'enum',
                            enum: [0]
                        }
                    }
                },
            ],
            model: ${JSON.stringify(validatorModels)},
        };
    },
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
</script>
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
    params,
    validatorConfig
};
