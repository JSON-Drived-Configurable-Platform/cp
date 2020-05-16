// 简单示例
let simple = {};

const fields = [
    {
        label: '年龄',
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

// rules为alidator
let validatorConfig = {};

const validatorModels = {
    name: '张三',
    age: 20,
    hasAuth: true,
    gender: 1
};

const validateCheck = (rule, value, callback) => {
    if (validatorModels.hasAuth) {
        if (validatorModels.gender === 1 && value > 18) {
            callback();
        } else {
            callback(new Error());
        }
    } else {
        callback(new Error());
    }
};

const validatorFileds = [
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
            age: {
                type: 'number',
                validator: validateCheck
            }
        }
    }
];


validatorConfig.data = {
    validatorFileds,
    validatorModels
};

validatorConfig.code = `
<script>
export default {
    data() {
        return {
            fields: [
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
                        age: {
                            type: 'number',
                            validator: validateCheck
                        }
                    }
                }
            ],
            model: ${JSON.stringify(validatorModels)},
            validateCheck: (rule, value, callback) => {
                if (model.hasAuth) {
                    if (model.gender === 1 && value > 18) {
                        callback();
                    } else {
                        callback(new Error());
                    }
                } else {
                    callback(new Error());
                }
            };
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
    params,
    validatorConfig
};
