let introduce = {};


introduce.install = {
    npm: 'npm install form-generator-iview --save',
    yarn: '$ yarn add form-generator-iview'
};

introduce.import = `
import "form-generator-iview/src/style/index.less";
import FormGenerator from "form-generator-iview";

Vue.use(FormGenerator);
`;

introduce.installIView = `
$ npm install view-design --save
# or
$ yarn add view-design
`;

introduce.importIView = `
import iView from "view-design";
import "view-design/dist/styles/iview.css";

Vue.use(iView);
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
    {
        type: 'Submit',
        subtype: 'primary',
        text: '提交',
        inline: true
    },
];

const options = {
    title: '用户信息',
    labelWidth: 60,
    labelPosition: 'right'
};

const model = {
    name: 'FormGenerator',
    gender: 'Screct',
    birthday: '2019-04-19',
};

introduce.demo = `
<template>
    <FormGenerator
        ref="FormGenerator"
        :fields="code.introduce.data.fields"
        :model="code.introduce.data.model"
        :options="code.introduce.data.options"
        @on-submit="handleSubmit()"
    />
</template>
<script>
export default {
    data() {
        return {
            fields: ${JSON.stringify(fields)},
            model: ${JSON.stringify(model)},
            options: ${JSON.stringify(options)}
        };
    }
};
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
