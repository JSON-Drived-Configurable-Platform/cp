let introduce = {};


introduce.install = `
$ npm install form-generator-iview --save
# or
$ yarn add form-generator-iview
`;


const fields = [
    {
        label: '姓名',
        type: 'Input',
        model: 'name'
    },
    {
        label: '出生日期',
        type: 'DatePicker',
        subtype: 'date',
        model: 'birthday'
    },
    {
        label: '性别',
        type: 'Radio',
        model: 'gender',
        options: [
            {
                label: '男',
                value: 'M'
            },
            {
                label: '女',
                value: 'F'
            },
            {
                label: '保密',
                value: 'Screct'
            }
        ]
    },
];

const options = {
    title: '用户信息',
    labelWidth: 60,
    labelPosition: 'right'
};

const model = {
    name: '',
    gender: '',
    birthday: '',
};

introduce.demo = `
<template>
    <FormGenerator
        :fields="code.introduce.data.fields"
        :model="code.introduce.data.model"
        :options="code.introduce.data.options"
    />
</template>
<script>
data() {
    return {
        fields: ${JSON.stringify(fields)},
        model: ${JSON.stringify(model)},
        options: ${JSON.stringify(options)}
    };
}
<script>
`;

introduce.data = {
    fields,
    model,
    options
};


export default {
    introduce
};
