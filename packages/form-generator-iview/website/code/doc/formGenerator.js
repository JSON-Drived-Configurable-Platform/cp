// 简单示例
let simple = {};

const fields = [
    {
        type: 'Input',
        model: 'username',
        placehold: 'Username',
        prefix: 'ios-person-outline',
        width: 120,
        // required: true,
        rules: [
            {
                required: true,
                message: 'Please fill in the user name',
                trigger: 'blur'
            }
        ]
    },
    {
        type: 'Input',
        subtype: 'password',
        model: 'password',
        placehold: 'Password',
        prefix: 'ios-lock-outline',
        width: 120,
        // required: true,
        rules: [
            {
                required: true,
                message: 'Please fill in the password.',
                trigger: 'blur'
            },
            {
                type: 'string',
                min: 6,
                message: 'The password length cannot be less than 6 bits',
                trigger: 'blur'
            }
        ]
    },
    {
        type: 'Submit',
        subtype: 'primary',
        text: '登录',
        width: 80,
    }
];

const options = {
    inline: true,
    title: '用户名、密码登录'
};

const model = {
    username: '',
    password: ''
};

simple.data = {
    fields,
    options,
    model
};

simple.code = `
<script>
const field = ${JSON.stringify(fields, null, 4)};
const model = ${JSON.stringify(model, null, 4)};
const options = ${JSON.stringify(options, null, 4)};
export default {
    data() {
        return {
            field,
            model,
            options
        };
    }
};
<script>
<template>
    <FormGenerator
        :field="field"
        :options="options"
        :model="model"
    />
</template>
`;

// formFields
let form = {};

let formFields = [
    {
        label: 'Input',
        type: 'Input',
        model: 'input',
        placehold: 'Entering something...'
    },
    {
        label: 'Select',
        type: 'Select',
        model: 'select',
        placehold: '请选择',
        options: [
            {label: '北京', 'value': 'Beijing'},
            {label: '上海', 'value': 'Shanghai'},
            {label: '广州', 'value': 'Guangzhou'},
            {label: '深圳', 'value': 'Shenzhen'}
        ]
    },
    {
        label: 'Date',
        type: 'DatePicker',
        model: 'date',
        width: '50%',
        inline: true
    },
    {
        label: '',
        type: 'TimePicker',
        model: 'time',
        width: '50%',
        inline: true,
        labelWidth: 20
    },
    {
        label: 'Radio',
        type: 'Radio',
        model: 'gender',
        options: [
            {label: '男', 'value': 'M'},
            {label: '女', 'value': 'F'},
            {label: '保密', 'value': 'unknown', disabled: true}
        ]
    },
    {
        label: 'Checkbox',
        type: 'Checkbox',
        model: 'fruit',
        options: [
            {label: '西瓜', 'value': '1'},
            {label: '苹果', 'value': '2'},
            {label: '梨', 'value': '3', disabled: true}
        ]
    },
    {
        label: 'Switch',
        type: 'Switch',
        model: 'open'
    },
    // {
    //     label: 'LogicSelect',
    //     type: 'LogicSelect',
    //     model: 'logicSelect',
    //     placehold: '请选择'
    // },
    {
        label: 'Textarea',
        type: 'Input',
        subtype: 'textarea',
        model: 'textarea',
        placehold: 'Entering something...'
    },
    {
        type: 'Submit',
        subtype: 'primary',
        text: '提交',
        width: '50%',
        inline: true
    },
    {
        type: 'Reset',
        subtype: 'primary',
        text: '重置',
        width: '50%',
        labelWidth: 0,
        inline: true
    }
];

let formModel = {
    input: '',
    select: '',
    date: '',
    gender: '',
    fruit: [],
    open: true,
    textarea: '',
    // logicSelect: ''
};


form.data = {
    fields: formFields,
    model: formModel
};

form.code = `
<script>
const field = ${JSON.stringify(formFields, null, 4)};
const model = ${JSON.stringify(formModel, null, 4)};
export default {
    data() {
        return {
            field,
            model
        };
    }
};
<script>
<template>
    <FormGenerator
        :field="field"
        :model="model"
    />
</template>
`;

// 表单校验

// 上传

// 扩展-图片上传

export default {
    simple,
    form
};
