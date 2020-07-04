// 简单示例
let simple = {};

const field = {
    type: 'Select',
    transfer: true,
    model: 'city',
    options: [
        {label: '北京', 'value': 'Beijing'},
        {label: '上海', 'value': 'Shanghai'},
        {label: '广州', 'value': 'Guangzhou'},
        {label: '深圳', 'value': 'Shenzhen'}
    ]
};

const model = {
    city: 'Beijing'
};

simple.data = {
    field,
    model
};

simple.code = `
<script>
const field = ${JSON.stringify(field, null, 4)};
export default {
    data() {
        return {
            field,
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
    type: 'Select',
    model: 'city',
    options: '/selectApi',
    defaultValueIndex: 0
};

const apiModel = {
    city: ''
};

api.data = {
    field: apiField,
    model: apiModel
};

api.code = `
<script>
const field = ${JSON.stringify(apiField, null, 4)};
export default {
    data() {
        return {
            field,
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

// 多选
let multiple = {};
const multipleField = {
    type: 'Select',
    model: 'city',
    multiple: true,
    options: '/selectApi',
    defaultValueIndexes: [0, 1],
    maxTagCount: 2,
    maxTagPlaceholder(number) {
        return `+${number}...`;
    }
    // options: [
    //     {label: '北京', 'value': 'Beijing'},
    //     {label: '上海', 'value': 'Shanghai'},
    //     {label: '广州', 'value': 'Guangzhou'},
    //     {label: '深圳', 'value': 'Shenzhen'}
    // ]
};

const multipleModel = {
    city: []
};

multiple.data = {
    field: multipleField,
    model: multipleModel
};

multiple.code = `
<script>
const field = ${JSON.stringify(multipleField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(multipleModel)}
        };
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            :form-model="model"
        />
    </Form>
</template>
`;

// 可搜索
let filterable = {};
const filterableField = {
    type: 'Select',
    model: 'city',
    filterable: true,
    options: '/selectApi'
};

const filterableAndMultipleField = {
    type: 'Select',
    model: 'cities',
    filterable: true,
    multiple: true,
    options: '/selectApi',
    extraOptions: '/selectExtraOptionsApi',
    maxTagCount: 2,
    maxTagPlaceholder(number) {
        return `+${number}...`;
    }
    // extraOptions: [
    //     {
    //         label: '张三',
    //         value: 'zhangsan'
    //     },
    //     {
    //         label: '李四',
    //         value: 'lisi'
    //     }
    // ]
};

const filterableModel = {
    city: 'Beijing',
    cities: ['zhangsan', 'lisi']
};

filterable.data = {
    field: filterableField,
    multipleField: filterableAndMultipleField,
    model: filterableModel
};

filterable.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(filterableField)},
            multipleField: ${JSON.stringify(filterableAndMultipleField)},
            model: ${JSON.stringify(filterableModel)}
        };
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
        <FieldGenerator
            :field="multipleField"
        />
    </Form>
</template>
`;

// 远程搜索
let remote = {};
const remoteField = {
    type: 'Select',
    model: 'city',
    remote: true,
    options: '/selectApi'
};

const remoteAndMultipleField = {
    type: 'Select',
    model: 'cities',
    remote: true,
    multiple: true,
    options: '/selectApi'
};

const remoteModel = {
    city: 'Beijing',
    cities: ['Beijing', 'Shanghai']
};

remote.data = {
    field: remoteField,
    multipleField: remoteAndMultipleField,
    model: remoteModel
};

remote.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(remoteField)},
            multipleField: ${JSON.stringify(remoteAndMultipleField)},
            model: ${JSON.stringify(remoteModel)}
        };
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
        <FieldGenerator
            :field="multipleField"
        />
    </Form>
</template>
`;

// 分组
let group = {};
const groupField = {
    type: 'Select',
    model: 'province',
    group: true,
    options: '/selectGroupApi'
};

const groupAndMultipleField = {
    type: 'Select',
    model: 'provinces',
    group: true,
    multiple: true,
    options: '/selectGroupApi'
};

const groupModel = {
    province: '110000000000',
    provinces: ['110000000000', '310000000000']
};

group.data = {
    field: groupField,
    multipleField: groupAndMultipleField,
    model: groupModel
};

group.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(groupField)},
            multipleField: ${JSON.stringify(groupAndMultipleField)},
            model: ${JSON.stringify(groupModel)}
        };
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
        <FieldGenerator
            :field="multipleField"
        />
    </Form>
</template>
`;


// 可清空
let clearable = {};
const clearableField = {
    type: 'Select',
    model: 'province',
    clearable: true,
    filterable: true,
    options: '/selectApi'
};

const clearableModel = {
    province: 'Beijing',
};

clearable.data = {
    field: clearableField,
    model: clearableModel
};

clearable.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(clearableField)},
            model: ${JSON.stringify(clearableModel)}
        };
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
    />
</template>
`;

// 前缀图标
let prefix = {};
const prefixField = {
    type: 'Select',
    model: 'province',
    prefix: 'ios-home',
    filterable: true,
    options: '/selectApi'
};

const prefixModel = {
    province: 'Beijing',
};

prefix.data = {
    field: prefixField,
    model: prefixModel
};

prefix.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(prefixField)},
            model: ${JSON.stringify(prefixModel)}
        };
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            :form-model="model"
        />
    </Form>
</template>
`;

export const columns = [
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
        title: '性别',
        key: 'gender',
        width: 90
    },
    {
        title: '出生日期',
        key: 'birthday',
        width: 150
    },
    {
        title: '省',
        slot: 'province',
        width: 230,
        poptip: {
            title: '编辑地址',
            displayField: {
                type: 'Select',
                api: '/selectApi',
                model: 'province',
                inline: true,
                cache: true,
                disabled: true,
                width: 100,
                size: 'small'
            },
            formFields: [
                {
                    type: 'Select',
                    api: '/selectApi',
                    model: 'province',
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
                    apiParams: ['name', 'province'],
                    inline: true
                },
            ]
        }
    },
    {
        title: '城市',
        slot: 'city',
        width: 230,
        formFields: [
            {
                type: 'Select',
                api: '/selectApi',
                transfer: true,
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
        width: 300,
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
            },
            {
                type: 'Button',
                model: 'detailRoute',
                text: '详情',
                subtype: 'primary',
                size: 'small',
                action: {
                    type: 'route'
                },
                apiParams: ['name'],
                inline: true
            },
        ]
    }
];

export const data = [
    {
        name: '王小明',
        age: 18,
        gender: '男',
        birthday: '1999-2-21',
        province: 'Beijing',
        city: 'Beijing',
        address: '北京市朝阳区芍药居',
        status: '1',
        detailRoute: {
            path: '/home',
            query: {
                name: '王小明',
            }
        }
    }
];

export default {
    columns,
    data,
    simple,
    api,
    multiple,
    filterable,
    remote,
    group,
    clearable,
    prefix
};
