// validateForm
let validateForm = {};

let validateFormFields = [
    {
        label: '姓名',
        type: 'Input',
        model: 'name',
        placehold: '请输入姓名',
        rules: [
            {
                type: 'string',
                required: true,
                pattern:  /^[\u4e00-\u9fa5]+$/,
                message: '请输入中文姓名'
            }
        ]
    },
    {
        label: '城市',
        type: 'Select',
        model: 'city',
        placehold: '请选择',
        options: [
            {label: '北京', 'value': 'Beijing'},
            {label: '上海', 'value': 'Shanghai'},
            {label: '广州', 'value': 'Guangzhou'},
            {label: '深圳', 'value': 'Shenzhen'}
        ],
        required: true
    },
    {
        label: '生日',
        type: 'DatePicker',
        model: 'birthday',
        required: true
    },
    {
        label: '性别',
        type: 'Radio',
        model: 'gender',
        options: [
            {label: '男', 'value': 'M'},
            {label: '女', 'value': 'F'}
        ],
        required: true
    },
    {
        label: '水果',
        type: 'Checkbox',
        model: 'fruit',
        options: [
            {label: '西瓜', 'value': '1'},
            {label: '苹果', 'value': '2'},
            {label: '梨子', 'value': '3'}
        ],
        required: true
    },
    {
        type: 'Submit',
        subtype: 'primary',
        text: '提交',
        inline: true
    },
    {
        type: 'Reset',
        text: '重置',
        labelWidth: 0,
        inline: true
    }
];

let validateFormModel = {
    name: '',
    city: '',
    birthday: '',
    gender: '',
    fruit: [],
};


validateForm.data = {
    fields: validateFormFields,
    model: validateFormModel
};

validateForm.code = `
<script>
const fields = ${JSON.stringify(validateFormFields, null, 4)};
const model = ${JSON.stringify(validateFormModel, null, 4)};
export default {
    data() {
        return {
            fields,
            model
        };
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


// required
let required = {};

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

required.data = {
    fields,
    model
};

required.code = `
<script>
const fields = ${JSON.stringify(fields, null, 4)};
const model = ${JSON.stringify(model, null, 4)};
export default {
    data() {
        return {
            fields,
            model
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
    <FormGenerator
        :fields="fields"
        :model="model"
    />
</template>
`;


// rules
let rules = {};
const rulesRules = [
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

const rulesModel = {
    name: '张三',
    age: 12
};
rules.data = {
    rulesRules,
    rulesModel
};
rules.code = `
<script>
const fields = ${JSON.stringify(rulesRules, null, 4)};
const model = ${JSON.stringify(rulesModel, null, 4)};
export default {
    data() {
        return {
            fields,
            model
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
    <FormGenerator
            :fields="fields"
            :model="model"
        />
</template>
`;


// enumConfig
let enumConfig = {};
const enumFileds = [
    {
        type: 'Radio',
        subtype: 'button',
        label: '是否确认',
        model: 'asure',
        options: [
            {label: '确认', value: '1'},
            {label: '放弃', value: '0'},
        ],
        rules: [
            {
                type: 'enum',
                enum: ['1'],
                required: true,
                message: '必须选择确认'
            }
        ]
    }
];

const enumModels = {
    asure: '1',
};


enumConfig.data = {
    enumFileds,
    enumModels
};

enumConfig.code = `
<script>
const fields = ${JSON.stringify(enumFileds, null, 4)};
const model = ${JSON.stringify(enumModels, null, 4)};
export default {
    data() {
        return {
            fields,
            model
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
        type: 'InputNumber',
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
                    type: 'InputNumber',
                    label: '年龄',
                    model: 'age',
                    rules: [{
                        type: 'number',
                        validator(rule, value) {
                            validator(rule, value) {
                                return value > 20;
                            },
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
</script>
<template>
    <FormGenerator
            :fields="fields"
            :model="model"
        />
</template>
`;

// rules 为 async validator
let asyncValidatorConfig = {};

const asyncValidatorModels = {
    name: '张三',
    age: 21
};


const asyncValidatorFileds = [
    {
        type: 'InputNumber',
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
            },
            message: '年龄大于20岁！'
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
                    type: 'InputNumber',
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
</script>
<template>
    <FormGenerator
            :fields="fields"
            :model="model"
        />
</template>
`;

// submit button
let submitConfig = {};

const submitModels = {
    name: '张三',
    age: 1
};


const submitFileds = [
    {
        type: 'InputNumber',
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
                    type: 'InputNumber',
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
</script>
<template>
    <FormGenerator
            :fields="fields"
            :model="model"
        />
</template>
`;

export default {
    validateForm,
    required,
    enumConfig,
    rules,
    validatorConfig,
    asyncValidatorConfig,
    submitConfig
};
