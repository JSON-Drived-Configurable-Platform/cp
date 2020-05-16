// 一

let table = {};

const columns = [
    {
        title: '姓名',
        key: 'name'
    },
    {
        title: '年龄',
        key: 'age'
    },
    {
        title: '性别',
        key: 'gender'
    },
    {
        title: '出生日期',
        key: 'birthday'
    },
    {
        title: '地址',
        key: 'address'
    },
    {
        title: '操作',
        slot: 'action'
    }
];


export const data = [
    {
        name: '王小明',
        age: 18,
        gender: '男',
        birthday: '1999-2-21',
        address: '北京市朝阳区芍药居'
    },
    {
        name: '张小刚',
        age: 25,
        gender: '男',
        birthday: '1992-1-23',
        address: '北京市海淀区西二旗'
    },
    {
        name: '李小红',
        age: 30,
        gender: '女',
        birthday: '1987-11-10',
        address: '上海市浦东新区世纪大道'
    },
    {
        name: '周小伟',
        age: 26,
        gender: '男',
        birthday: '1991-10-10',
        address: '深圳市南山区深南大道'
    }
];


table.code = `
<template>
    <Table :columns="columns" :data="data">
        <template slot="action" slot-scope="{ row, index }">
            <Button type="primary" size="small" @click="handleDelete(index, row)">删除</Button>
        </template>
    </Table>
</template>
<script>
export default {
    data() {
        return {
            columns: ${JSON.stringify(columns)},
            data: ${JSON.stringify(data)}
        };
    },
    methods: {
        handleDelete(index) {
            this.$Message.info(JSON.stringify({
                index
            }));
        }
    }
};
<script>
`;

table.data = {
    columns,
    data
};


// 二
let input = {};

const inputColumns = [
    {
        title: '姓名',
        slot: 'name'
    },
    {
        title: '年龄',
        key: 'age'
    },
    {
        title: '性别',
        key: 'gender'
    },
    {
        title: '出生日期',
        key: 'birthday'
    },
    {
        title: '地址',
        key: 'address'
    },
    {
        title: '操作',
        slot: 'action'
    }
];

input.code = `
<template>
    <Table :columns="columns" :data="data">
        <template
            slot="name"
            slot-scope="{ row }"
        >
            <Input v-model="row.name" />
        </template>
        <template slot="action" slot-scope="{ row, index }">
            <Button type="primary" size="small" @click="handleSave(index, row)">保存</Button>
        </template>
    </Table>
</template>
<script>
export default {
    data() {
        return {
            columns: ${JSON.stringify(inputColumns)},
            data: ${JSON.stringify(data)}
        };
    },
    methods: {
        handleSave(index, data) {
            this.$Message.info(JSON.stringify({
                index,
                data
            })});
        }
    }
};
<script>
`;


input.data = {
    columns: inputColumns,
    data
};



// 三
let fieldGeneratorInputAndButton = {};

const fieldGeneratorInputAndButtonColumns = [
    {
        title: '姓名',
        slot: 'name'
    },
    {
        title: '年龄',
        key: 'age'
    },
    {
        title: '性别',
        key: 'gender'
    },
    {
        title: '出生日期',
        key: 'birthday'
    },
    {
        title: '地址',
        key: 'address'
    },
    {
        title: '操作',
        slot: 'action'
    }
];

const inputField = {
    type: 'Input',
    model: 'name',
    placeholder: '请输入用户名',
    rules: [
        {
            type: 'string',
            required: true,
            pattern:  /^[\u4e00-\u9fa5]+$/,
            message: '请输入中文姓名'
        }
    ]
};

const buttonField = {
    type: 'Button',
    subtype: 'primary',
    text: '保存',
    action: {
        type: 'event',
        name: 'save'
    }
};

fieldGeneratorInputAndButton.code = `
<template>
    <Table :columns="columns" :data="data">
        <template slot="name">
            <FieldGenerator
                :field="inputField"
            />
        </template>
        <template slot="action" slot-scope="{ row, index }">
            <FieldGenerator
                :field="buttonField"
                @on-button-event="handleButtonEvent($event, index, row)"
            />
        </template>
    </Table>
</template>
<script>
export default {
    data() {
        return {
            columns: ${JSON.stringify(fieldGeneratorInputAndButtonColumns)},
            data: ${JSON.stringify(data)},
            inputField: ${JSON.stringify(inputField)},
            buttonField: ${JSON.stringify(buttonField)}
        };
    },
    methods: {
        handleButtonEvent({name}, index, data) {
            // eslint-disable-next-line no-console
            switch (name) {
                case 'save':
                    this.$Message.info(JSON.stringify({
                        index,
                        data
                    }));
                    break;
                case 'delete':
                    this.handleDynamicFormDel(index);
                    break;
            }

        },
    }
};
<script>
`;


fieldGeneratorInputAndButton.data = {
    columns: fieldGeneratorInputAndButtonColumns,
    data,
    inputField,
    buttonField
};


// 四

let configInputAndButton = {};

const configInputAndButtonColumns = [
    {
        title: '姓名',
        slot: 'name',
        formField: {
            type: 'Input',
            model: 'name',
            placeholder: '请输入用户名',
            rules: [
                {
                    type: 'string',
                    required: true,
                    pattern:  /^[\u4e00-\u9fa5]+$/,
                    message: '请输入中文姓名'
                }
            ]
        }
    },
    {
        title: '年龄',
        key: 'age'
    },
    {
        title: '性别',
        key: 'gender'
    },
    {
        title: '出生日期',
        key: 'birthday'
    },
    {
        title: '地址',
        key: 'address'
    },
    {
        title: '操作',
        slot: 'action',
        formField: {
            type: 'Button',
            subtype: 'primary',
            text: '保存',
            action: {
                type: 'event',
                name: 'save'
            }
        }
    }
];


configInputAndButton.code = `
<template>
    <Table :columns="columns" :data="data">
        <template
            v-for="column in columns"
            :slot="column.slot"
            slot-scope="{ row, index }"
        >
            <Form
                :key="column.slot"

                :model="row"
            >
                <FieldGenerator
                    :field="column.formField"
                    @on-button-event="handleButtonEvent($event, index, row)"
                />
            </Form>
        </template>
    </Table>
</template>
<script>
export default {
    data() {
        return {
            columns: ${JSON.stringify(configInputAndButtonColumns)},
            data: ${JSON.stringify(data)}
        };
    },
    methods: {
        handleSave(index, data) {
            this.$Message.info(JSON.stringify({
                index,
                data
            })});
        }
    }
};
<script>
`;

configInputAndButton.data = {
    columns: configInputAndButtonColumns,
    data
};


// 五

let configMore = {};

const configMoreColumns = [
    {
        title: '姓名',
        slot: 'name',
        formField: {
            type: 'Input',
            model: 'name',
            placeholder: '请输入用户名',
            rules: [
                {
                    type: 'string',
                    required: true,
                    pattern:  /^[\u4e00-\u9fa5]+$/,
                    message: '请输入中文姓名'
                }
            ]
        }
    },
    {
        title: '年龄',
        slot: 'age',
        formField: {
            type: 'InputNumber',
            model: 'age',
            placeholder: '请输入年龄',
            required: true,
            max: 150,
            min: 0
        }
    },
    {
        title: '性别',
        slot: 'gender',
        formField: {
            type: 'Select',
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
        }
    },
    {
        title: '出生日期',
        slot: 'birthday',
        formField: {
            type: 'DatePicker',
            subtype: 'date',
            model: 'birthday',
            placeholder: '请输入出生日期',
            required: true
        }
    },
    {
        title: '地址',
        slot: 'address',
        formField: {
            type: 'Input',
            model: 'address',
            placeholder: '请输入地址',
            required: true
        }
    },
    {
        title: '操作',
        slot: 'action',
        formField: {
            type: 'Button',
            subtype: 'primary',
            text: '保存',
            action: {
                type: 'event',
                name: 'save'
            }
        }
    }
];


configMore.code = `
<template>
    <Table :columns="columns" :data="data">
        <template
            v-for="column in columns"
            :slot="column.slot"
            slot-scope="{ row, index }"
        >
            <Form
                :key="column.slot"

                :model="row"
            >
                <FieldGenerator
                    :field="column.formField"
                    @on-button-event="handleButtonEvent($event, index, row)"
                />
            </Form>
        </template>
    </Table>
</template>
<script>
export default {
    data() {
        return {
            columns: ${JSON.stringify(configInputAndButtonColumns)},
            data: ${JSON.stringify(data)}
        };
    },
    methods: {
        handleSave(index, data) {
            this.$Message.info(JSON.stringify({
                index,
                data
            })});
        }
    }
};
<script>
`;

configMore.data = {
    columns: configMoreColumns,
    data
};


// 六

let showOnHiddenOn = {};

const showOnHiddenOnColumns = [
    {
        title: '姓名',
        slot: 'name',
        formFields: [{
            type: 'Input',
            model: 'name',
            placeholder: '请输入用户名',
            rules: [
                {
                    type: 'string',
                    required: true,
                    pattern:  /^[\u4e00-\u9fa5]+$/,
                    message: '请输入中文姓名'
                }
            ]
        }]
    },
    {
        title: '年龄',
        slot: 'age',
        formFields: [{
            type: 'InputNumber',
            model: 'age',
            placeholder: '请输入年龄',
            required: true,
            max: 150,
            min: 0
        }]
    },
    {
        title: '性别',
        slot: 'gender',
        formFields: [{
            type: 'Select',
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
        }]
    },
    {
        title: '出生日期',
        slot: 'birthday',
        formFields: [{
            type: 'DatePicker',
            subtype: 'date',
            model: 'birthday',
            placeholder: '请输入出生日期',
            required: true
        }]
    },
    {
        title: '地址',
        slot: 'address',
        formFields: [{
            type: 'Input',
            model: 'address',
            placeholder: '请输入地址',
            required: true,
            showOn: {
                gender: [
                    {
                        required: true,
                        type: 'enum',
                        enum: ['男']
                    }
                ]
            }
        },{
            type: 'Text',
            model: 'address',
            showOn: {
                gender: [
                    {
                        required: true,
                        type: 'enum',
                        enum: ['女']
                    }
                ]
            }
        }]
    },
    {
        title: '操作',
        slot: 'action',
        formFields: [{
            type: 'Button',
            subtype: 'primary',
            text: '保存',
            action: {
                type: 'event',
                name: 'save'
            }
        }]
    }
];


showOnHiddenOn.code = `
<template>
    <Table :columns="columns" :data="data">
        <template
            v-for="column in columns"
            :slot="column.slot"
            slot-scope="{ row, index }"
        >
            <Form
                :key="column.slot"

                :model="row"
            >
                <FieldGenerator
                    v-for="field in column.formFields"
                    :key="field.name"
                    :field="field"
                    @on-button-event="handleButtonEvent($event, index, row)"
                />
            </Form>
        </template>
    </Table>
</template>
<script>
export default {
    data() {
        return {
            columns: ${JSON.stringify(showOnHiddenOnColumns)},
            data: ${JSON.stringify(data)}
        };
    },
    methods: {
        handleSave(index, data) {
            this.$Message.info(JSON.stringify({
                index,
                data
            })});
        }
    }
};
<script>
`;

showOnHiddenOn.data = {
    columns: showOnHiddenOnColumns,
    data
};



// 七

let dynamicForm = {};

const dynamicFormColumns = [
    {
        title: '姓名',
        slot: 'name',
        formFields: [{
            type: 'Input',
            model: 'name',
            placeholder: '请输入用户名',
            rules: [
                {
                    type: 'string',
                    required: true,
                    pattern:  /^[\u4e00-\u9fa5]+$/,
                    message: '请输入中文姓名'
                }
            ]
        }]
    },
    {
        title: '年龄',
        slot: 'age',
        formFields: [{
            type: 'InputNumber',
            model: 'age',
            placeholder: '请输入年龄',
            required: true,
            max: 150,
            min: 0
        }]
    },
    {
        title: '性别',
        slot: 'gender',
        formFields: [{
            type: 'Select',
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
        }]
    },
    {
        title: '出生日期',
        slot: 'birthday',
        formFields: [{
            type: 'DatePicker',
            subtype: 'date',
            model: 'birthday',
            placeholder: '请输入出生日期',
            required: true
        }]
    },
    {
        title: '地址',
        slot: 'address',
        formFields: [{
            type: 'Text',
            model: 'gender',
            placeholder: '请输入地址',
            required: true
        }]
    },
    {
        title: '操作',
        slot: 'action',
        formFields: [{
            type: 'Button',
            subtype: 'primary',
            text: '删除',
            action: {
                type: 'event',
                name: 'delete'
            }
        }]
    }
];


dynamicForm.code = `
<template>
    <div class="demo-header">
        <Button type="primary" @click="handleDynamicFormAdd">添加</Button>
    </div>
    <Table :columns="columns" :data="data">
        <template
            v-for="column in code.dynamicForm.data.columns"
            :slot="column.slot"
            slot-scope="{ row, index }"
        >
            <Form
                :key="column.slot"
                ref="dynamicForm"
                :model="row"
            >
                <FieldGenerator
                    v-for="field in column.formFields"
                    :key="field.name"
                    :field="field"
                    @on-button-event="handleButtonEvent($event, index, row)"
                />
            </Form>
        </template>
    </Table>
    <div class="demo-actions">
        <Button type="primary" @click="handleDynamicFormSubmit">提交</Button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            columns: ${JSON.stringify(dynamicFormColumns)},
            data: ${JSON.stringify(data)}
        };
    },
    methods: {
        handleSave(index, data) {
            this.$Message.info(JSON.stringify({
                index,
                data
            })});
        }
    }
};
<script>
`;

dynamicForm.data = {
    columns: dynamicFormColumns,
    data
};

export default {
    table,
    input,
    fieldGeneratorInputAndButton,
    configInputAndButton,
    configMore,
    showOnHiddenOn,
    dynamicForm
};
