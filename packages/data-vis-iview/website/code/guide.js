let introduce = {};


introduce.install = `
$ npm install data-vis-iview --save
# or
$ yarn add data-vis-iview
`;

introduce.import = `
import "data-vis-iview/src/style/index.less";
import DataVis from "data-vis-iview";

Vue.use(DataVis);
`;

introduce.installIView = `
$ npm install view-design --save
# or
$ npm add view-design
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
        subtype: 'datetimerange',
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
