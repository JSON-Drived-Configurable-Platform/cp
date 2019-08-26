// 简单示例
let simple = {};

const field = {
    type: 'Upload',
    subtype: 'drag',
    // accept: 'image/gif, image/jpeg, image/png',
    // format: ['jpg','jpeg','png'],
    maxSize: 20000,
    action: '/uploadApi',
    multiple: true,
    paste: true,
    disabled: false,
    data: {
        userName: 'bingblog'
    },
    withCredentials: true,
    showUploadList: true,
    apiParams: ['radio'],
    label: '文件上传',
    model: 'fileList',
    tip: '上传的提示信息或者帮助信息'
};

const model = {
    fileList: [
        {
            name: '测试文件1️一',
            url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2615193282,909154413&fm=173&app=49&f=JPEG?w=218&h=146&s=A33256841E0D3F5B54284D15030090E0',
        }
    ]
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

export default {
    simple,
};
