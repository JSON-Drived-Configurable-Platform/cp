// 表单控件
let formControl = {};

const field = {
    type: 'Input',
    model: 'name'
};

const model = {
    name: 'json'
};

formControl.data = {
    field,
    model
};

formControl.code = `
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
        />
    </Form>
</template>
`;

// 表单
let form = {};

const formFields = [
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
    inline: true
};

const formModel = {
    username: '',
    password: ''
};

form.data = {
    fields: formFields,
    model: formModel,
    options
};

form.code = `
<script>
const fields = ${JSON.stringify(formFields, null, 4)};
const model = ${JSON.stringify(formModel, null, 4)};
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
<script>
<template>
    <FormGenerator
        :fields="fields"
        :options="options"
        :model="model"
        @on-submit="handleSubmit('form')"
    />
</template>
`;

// 增删改查的列表
const curd = {};
const curdColumns = [
    {
        title: '姓名',
        key: 'name',
        width: 100
    },
    {
        title: '年龄',
        key: 'age',
        width: 90
    },
    {
        title: '城市',
        slot: 'city',
        width: 'auto',
        formFields: [
            {
                type: 'Select',
                api: '/selectApi',
                model: 'city',
                inline: true,
                cache: true,
                width: 100
            },
            {
                type: 'Button',
                text: '保存',
                subtype: 'primary',
                size: 'small',
                action: {
                    type: 'ajax',
                    api: '/curdEdit'
                },
                apiParams: ['name', 'province', 'city'],
                inline: true
            },
        ]
    },
    {
        title: '地址',
        slot: 'address',
        width: 200,
        poptip: {
            title: '编辑地址',
            formFields: [
                {
                    type: 'Input',
                    model: 'address',
                    placeholder: '请输入地址',
                    rules: [
                        {
                            type: 'string',
                            required: true,
                        }
                    ],
                    width: 250,
                    inline: true
                },
                {
                    type: 'Button',
                    text: '保存',
                    subtype: 'primary',
                    size: 'small',
                    action: {
                        type: 'ajax',
                        api: '/curdEdit'
                    },
                    apiParams: ['name', 'address', 'test'],
                    inline: true
                },
            ]
        }
    },
    {
        title: '用户状态',
        width: 100,
        slot: 'status',
        formFields: [
            {
                type: 'Tag',
                model: 'status',
                options: [
                    {
                        name: '正常',
                        value: '1',
                        color: 'primary'
                    },
                    {
                        name: '黑用户',
                        value: '2',
                        color: 'error'
                    }
                ]
            },
        ]
    },
    {
        title: '操作',
        slot: 'action',
        width: 240,
        formFields: [
            {
                type: 'Button',
                text: '编辑',
                subtype: 'primary',
                size: 'small',
                action: {
                    type: 'event',
                    name: 'editDialog'
                },
                inline: true
            },
            {
                type: 'Button',
                text: '判黑',
                subtype: 'primary',
                size: 'small',
                confirmPoptip: {
                    title: '确认判黑?',
                    placement: 'left'
                },
                action: {
                    type: 'ajax',
                    api: '/curdToBlack'
                },
                apiParams: ['name', 'status'],
                inline: true,
                hiddenOn: {
                    status: [
                        {
                            type: 'enum',
                            enum: ['2']
                        }
                    ]
                }
            },
            {
                type: 'Button',
                text: '洗白',
                subtype: 'primary',
                size: 'small',
                confirmPoptip: {
                    title: '确定洗白?',
                    placement: 'left'
                },
                action: {
                    type: 'ajax',
                    api: '/curdToWhite'
                },
                apiParams: ['name', 'status'],
                inline: true,
                hiddenOn: {
                    status: [
                        {
                            type: 'enum',
                            enum: ['1']
                        }
                    ]
                }
            },
            {
                type: 'Button',
                text: '删除',
                subtype: 'error',
                size: 'small',
                confirmPoptip: {
                    title: '确定删除?',
                    placement: 'left'
                },
                action: {
                    type: 'ajax',
                    api: '/curdDelete'
                },
                apiParams: ['name'],
                inline: true
            }
        ]
    }
];

const curdData = [
    {
        name: '王小明',
        age: 18,
        city: 'Beijing',
        address: '北京市朝阳区芍药居',
        status: '1'
    },
    {
        name: '张小刚',
        age: 25,
        city: 'Beijing',
        address: '北京市海淀区西二旗',
        status: '1'
    }
];

const editFormFields = [
    {
        type: 'Input',
        label: '姓名',
        model: 'name',
        placeholder: '请输入姓名',
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
        type: 'InputNumber',
        label: '年龄',
        model: 'age',
        placeholder: '请输入年龄',
        required: true,
        max: 150,
        min: 0
    },
    {
        type: 'Select',
        label: '性别',
        model: 'gender',
        placeholder: '请输入性别',
        required: true,
        options: [
            {
                label: '男',
                value: '男'
            },
            {
                label: '女',
                value: '女'
            },
            {
                label: '保密',
                value: '保密'
            }
        ]
    },
    {
        type: 'DatePicker',
        label: '日期',
        subtype: 'date',
        model: 'birthday',
        placeholder: '请输入出生日期',
        required: true
    },
    {
        type: 'Input',
        label: '地址',
        model: 'address',
        placeholder: '请输入地址',
        required: true
    },
    {
        type: 'CheckboxCard',
        model: 'card',
        checkAll: true,
        pageLation: true, // 是否分页
        pageSize: 3, // 分页数目
        'headerEditable': true,
        'footerEditable': true,
        'cardWidth': '220px',
        'cardHeight': '245px',
        'optionsType': 'image',
        'options': '/checkboxCardApi',
        required: true
    },
    {
        type: 'Submit',
        text: '保存',
        subtype: 'primary',
        size: 'small',
        action: {
            type: 'ajax',
            api: '/curdEdit'
        },
        inline: true,
        apiParams: 'all'
    },
];

curd.data = {
    columns: curdColumns,
    data: curdData,
    editFormFields
};

curd.code = `
<script>
const columns = ${JSON.stringify(curdColumns, null, 4)};
const data = ${JSON.stringify(curdData, null, 4)};
export default {
    data() {
        return {
            fields,
            model,
            editModel: {},
            editFormFields,
            editDialogOpeon: false
        };
    },
    methods: {
        handleSubmit(formName) {
            console.log(this.$refs[formName].model);
        }
    }
};
<script>
<template>
    <div class="curd-example-demo">
        <h3 class="curd-example-demo-header">
            <Button type="primary" @click="handleCreateButtonClick">创建用户</Button>
        </h3>
        <Table class="curd-example-demo-table" :columns="code.curd.data.columns" :data="code.curd.data.data">
            <template
                v-for="column in code.curd.data.columns"
                :slot="column.slot"
                slot-scope="{ row, index }"
            >
                <Form
                    :key="column.slot"
                    :model="row"
                >
                    <Poptip v-if="!!column.poptip" placement="left-start">
                        <span>{{ row[column.slot] }}</span>
                        <Icon type="md-create" />
                        <div slot="title"><i>{{ column.poptip.title }}</i></div>
                        <div slot="content">
                            <FieldGenerator
                                v-for="(field, i) in column.poptip.formFields"
                                :key="i"
                                :field="field"
                                @on-submit="handleSubmit(index)"
                            />
                        </div>
                    </Poptip>
                    <FieldGenerator
                        v-for="(field, i) in column.formFields"
                        v-else
                        :key="i"
                        :field="field"
                        @on-button-event="handleButtonEvent($event, row, index)"
                    />
                </Form>
            </template>
        </Table>
        <Modal
            v-model="editDialogOpeon"
            title="编辑"
            footer-hide
        >
            <FormGenerator
                ref="FormGenerator"
                :fields="editFormFields"
                :model="editModel"
                @on-submit="handleSave"
            />
        </Modal>
    </div>
</template>
`;

export default {
    formControl,
    form,
    curd
};
