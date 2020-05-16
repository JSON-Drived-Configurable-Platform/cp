// 简单示例
let simple = {};

const fields = [
    {
        type: 'Input',
        label: '姓名',
        model: 'name',
        required: true
    }
];

const model = {
    name: '张三',
    age: 18,
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
const paramsRules = [
    {
        type: 'Input',
        label: '姓名',
        model: 'name',
        rules: [
            {
                type: 'string',
                required: true,
                message: '请填入正确姓名'
            }
        ]
    }
];

const paramsModel = {
    name: '张三',
    age: 12
};
params.data = {
    paramsRules,
    paramsModel
};
params.code = `
<script>
export default {
    data() {
        return {
            fields: ${JSON.stringify(paramsRules)},
            model: ${JSON.stringify(paramsModel)}
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

// 包含某个值
let enumConfig = {};
const enumFileds = [
    {
        type: 'Input',
        label: '姓名',
        model: 'name',
        rules: [
            {
                type: 'enum',
                enum: ['张三'],
                message: '姓名必须包含张三'
            }
        ]
    }
];

const enumModels = {
    name: '张三',
};


enumConfig.data = {
    enumFileds,
    enumModels
};

enumConfig.code = `
<script>
export default {
    data() {
        return {
            fields: ${JSON.stringify(enumFileds)},
            model: ${JSON.stringify(enumModels)}
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
    age: 21
};


const validatorFileds = [
    {
        type: 'Input',
        label: '年龄',
        model: 'age',
        rules: [{
            type: 'number',
            validator(rule, value) {
                return value > 20;
            },
            message: '年龄大于20岁'
        }]
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
                    label: '年龄',
                    model: 'age',
                    rules: [{
                        type: 'number',
                        validator(rule, value) {
                            return value > 20;
                        },
                        message: '年龄大于20岁'
                    }]
                }
            ],
            model: ${JSON.stringify(validatorModels)}
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
let asyncValidatorConfig = {};

const asyncValidatorModels = {
    name: '张三',
    age: 21
};


const asyncValidatorFileds = [
    {
        type: 'Input',
        label: '年龄',
        model: 'age',
        rules: [{
            type: 'number',
            asyncValidator(rule, value) {
                return new Promise((resolve, reject) => {
                    if (value > 20) {
                        resolve();
                    } else {
                        reject('年龄大于20岁~');
                    }
                });
            }
            // message: '年龄大于20岁！'
        }]
    }
];


asyncValidatorConfig.data = {
    asyncValidatorFileds,
    asyncValidatorModels
};

asyncValidatorConfig.code = `
<script>
export default {
    data() {
        return {
            fields: [
                {
                    type: 'Input',
                    label: '年龄',
                    model: 'age',
                    rules: [{
                        type: 'number',
                        asyncValidator(rule, value) {
                            return new Promise((resolve, reject) => {
                                if (value > 20) {
                                    resolve();
                                } else {
                                    reject('年龄大于20岁~');
                                }
                            });
                        }
                    }]
                }
            ],
            model: ${JSON.stringify(asyncValidatorModels)}
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
let submitConfig = {};

const submitModels = {
    name: '张三',
    age: 1
};


const submitFileds = [
    {
        type: 'Input',
        label: '年龄',
        model: 'age',
        rules: [{
            type: 'number',
            asyncValidator(rule, value) {
                return new Promise((resolve, reject) => {
                    if (value > 20) {
                        resolve();
                    } else {
                        reject('年龄大于20岁~');
                    }
                });
            }
        }]
    },
    {
        type: 'Submit',
        subtype: 'primary',
        text: '提交',
        width: '50%',
        inline: true
    }
];


submitConfig.data = {
    submitFileds,
    submitModels
};

submitConfig.code = `
<script>
export default {
    data() {
        return {
            fields: [
                {
                    type: 'Input',
                    label: '年龄',
                    model: 'age',
                    rules: [{
                        type: 'number',
                        submit(rule, value) {
                            return new Promise((resolve, reject) => {
                                if (value > 20) {
                                    resolve();
                                } else {
                                    reject('年龄大于20岁~');
                                }
                            });
                        }
                    }]
                },
                {
                    type: 'Submit',
                    subtype: 'primary',
                    text: '提交',
                    width: '50%',
                    inline: true
                }
            ],
            model: ${JSON.stringify(submitModels)}
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
    enumConfig,
    params,
    validatorConfig,
    asyncValidatorConfig,
    submitConfig
};
