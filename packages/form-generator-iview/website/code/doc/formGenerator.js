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
const fields = ${JSON.stringify(fields, null, 4)};
const model = ${JSON.stringify(model, null, 4)};
const options = ${JSON.stringify(options, null, 4)};
export default {
    data() {
        return {
            fields,
            model,
            options
        };
    },
    methods: {
        handleSubmit(formName) {
            console.log(this.$refs[formName].model);
        }
    }
};
</script>
<template>
    <FormGenerator
        :fields="fields"
        :options="options"
        :model="model"
        @on-submit="handleSubmit('simple')"
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
        width: '40%',
        inline: true
    },
    {
        label: '',
        type: 'TimePicker',
        model: 'time',
        width: '40%',
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
        inline: true
    },
    {
        type: 'Reset',
        subtype: 'primary',
        text: '重置',
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
const fields = ${JSON.stringify(formFields, null, 4)};
const model = ${JSON.stringify(formModel, null, 4)};
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

// 表单校验
let validate = {};

let validateFields = [
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
        subtype: 'daterange',
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

let validateModel = {
    name: '',
    city: '',
    birthday: '',
    gender: '',
    fruit: [],
};


validate.data = {
    fields: validateFields,
    model: validateModel
};

validate.code = `
<script>
const fields = ${JSON.stringify(validateFields, null, 4)};
const model = ${JSON.stringify(validateModel, null, 4)};
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

// 分割线
let divider = {};

const dividerFields = [
    {
        type: 'Divider',
        label: 'Personal',
        orientation: 'left',
        dashed: true
    },
    {
        type: 'Input',
        label: 'Name',
        model: 'name'
    },
    {
        type: 'DatePicker',
        label: 'Birth',
        model: 'birth'
    },
    {
        type: 'Radio',
        subtype: 'button',
        size: 'small',
        label: 'Favorite Animal',
        options: [
            {
                label: 'Tiger',
                value: 'tiger'
            },
            {
                label: 'Lion',
                value: 'lion'
            },
            {
                label: 'Bear',
                value: 'bear'
            },
            {
                label: 'Bull',
                value: 'bull'
            },
            {
                label: 'Serval',
                value: 'Serval'
            }
        ],
        model: 'animal'
    },
    {
        type: 'Divider',
        label: 'Account',
        orientation: 'left',
        dashed: true
    },
    {
        type: 'Input',
        subtype: 'email',
        label: 'Email',
        placehold: 'example@email.com',
        model: 'email'
    },
    {
        type: 'Input',
        subtype: 'password',
        label: 'Password',
        model: 'password'
    },
    {
        type: 'Input',
        subtype: 'password',
        label: 'Verify Password',
        model: 'varifyPassword'
    },
    {
        type: 'Divider',
        label: 'Contact',
        orientation: 'left',
        dashed: true
    },
    {
        type: 'Input',
        label: 'Address',
        model: 'address'
    },
    {
        type: 'Select',
        label: 'State',
        options: [
            {
                label: 'China',
                value: 'China'
            },
            {
                label: 'America',
                value: 'America'
            },
            {
                label: 'British',
                value: 'British'
            },
            {
                label: 'Japan',
                value: 'Japan'
            }
        ],
        model: 'state'
    },
    {
        type: 'Input',
        label: 'Phone',
        model: 'phone'
    },
    {
        type: 'Divider',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        type: 'Submit',
        subtype: 'primary',
        text: 'Submit',
        inline: true
    },
    {
        type: 'Reset',
        text: 'Reset',
        labelWidth: 30,
        inline: true
    }
];
const dividerModel = {
    name: '',
    birth: '',
    animal: '',
    email: '',
    password: '',
    varifyPassword: '',
    address: '',
    state: '',
    phone: ''
};

const dividerOptions = {
    // labelWidth: 100,
    labelPosition: 'top'
};

divider.data = {
    fields: dividerFields,
    model: dividerModel,
    options: dividerOptions
};

divider.code = `
<script>
const fields = ${JSON.stringify(dividerFields, null, 4)};
const model = ${JSON.stringify(dividerModel, null, 4)};
const options = ${JSON.stringify(dividerOptions, null, 4)};
export default {
    data() {
        return {
            fields,
            model,
            options
        };
    }
};
</script>
<template>
    <FormGenerator
        :fields="fields"
        :options="options"
        :model="model"
    />
</template>
`;


// 联动-隐藏

let hiddenOn = {};

const hiddenOnFields = [
    {
        label: '登录方式',
        type: 'Radio',
        model: 'loginType',
        options: [
            {label: '用户名密码登录', 'value': '1'},
            {label: '手机号登录', 'value': '2'}
        ],
        required: true
    },
    {
        label: '用户名',
        type: 'Input',
        model: 'username',
        placehold: 'Username',
        prefix: 'ios-person-outline',
        rules: [
            {
                required: true,
                message: 'Please fill in the user name',
                trigger: 'blur'
            }
        ],
        showOn: {
            loginType: [{
                type: 'enum',
                enum: ['1']
            }]
        }
    },
    {
        label: '密码',
        type: 'Input',
        subtype: 'password',
        model: 'password',
        placehold: 'Password',
        prefix: 'ios-lock-outline',
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
        ],
        showOn: {
            loginType: [{
                type: 'enum',
                enum: ['1']
            }]
        }
    },
    {
        label: '手机号',
        type: 'Input',
        model: 'phoneNumber',
        placehold: 'PhoneNumber',
        prefix: 'ios-phone-portrait',
        required: true,
        showOn: {
            loginType: [{
                type: 'enum',
                required: true,
                enum: ['2']
            }]
        }
    },
    {
        // label: '发送验证码',
        type: 'Button',
        text: '发送验证码',
        action: {
            type: 'ajax',
            api: '/sendValidCode'
        },
        showOn: {
            loginType: [{
                type: 'enum',
                required: true,
                enum: ['2']
            }],
            phoneNumber: [{
                type: 'string',
                required: true
            }]
        }
    },
    {
        label: '验证码',
        type: 'Input',
        model: 'valideCode',
        placehold: 'Please input valide code you riceived',
        prefix: 'ios-lock-outline',
        required: true,
        showOn: {
            loginType: [{
                type: 'enum',
                required: true,
                enum: ['2']
            }]
        }
    },
    {
        type: 'Submit',
        subtype: 'primary',
        text: '登录',
        width: 80,
    }
];

const hiddenOnModel = {
    loginType: '1',
    username: '',
    password: ''
};

hiddenOn.data = {
    fields: hiddenOnFields,
    model: hiddenOnModel
};

hiddenOn.code = `
<script>
const fields = ${JSON.stringify(hiddenOnFields, null, 4)};
const model = ${JSON.stringify(hiddenOnModel, null, 4)};
export default {
    data() {
        return {
            fields,
            model,
            options
        };
    }
};
</script>
<template>
    <FormGenerator
        :fields="fields"
        :options="options"
        :model="model"
    />
</template>
`;

// labelTip
let labelTip = {};

const labelTipFields = [
    {
        type: 'Divider',
        label: 'label添加tip信息',
        orientation: 'left',
        dashed: true
    },
    {
        type: 'Input',
        label: '活动名称',
        model: 'input',
        placeholder: '请输入用户名',
        required: true,
        labelTip: {
            content: '<p>可参考下图进行配置<br/><img style="width:100px;margin:0 auto;" src="https://efe-h2.cdn.bcebos.com/ceug/resource/res/2019-06/1561358481371/iishnxu1f1fv.png"/></p>'
        }
    },
    {
        type: 'Input',
        label: '你的姓名',
        model: 'name',
        placeholder: '请输入姓名',
        required: true,
        labelTip: {
            placement: 'right-start',
            content: '<p>Display multiple lines of information</p><p><i>Can customize the style</i><a href="www.baidu.com">百度一下</a></p>'
        }
    }
];

const labelModel = {
    input: '',
    name: '',
    link: ''
};

const labelFormOptions= {
    labelWidth: 120,
    labelPosition: 'left'
};

labelTip.data = {
    fields: labelTipFields,
    model: labelModel,
    options: labelFormOptions
};

labelTip.code = `
<script>
const fields = ${JSON.stringify(labelTipFields, null, 4)};
const model = ${JSON.stringify(labelModel, null, 4)};
const options = ${JSON.stringify(labelFormOptions, null, 4)};
export default {
    data() {
        return {
            fields,
            model,
            options
        };
    }
};
</script>
<template>
    <FormGenerator
        :fields="fields"
        :model="model"
        :options="options",
    />
</template>
`;

// 标签位置

// 联动-选项

// 上传

// 扩展-图片上传

export default {
    simple,
    form,
    validate,
    divider,
    hiddenOn,
    labelTip
};
