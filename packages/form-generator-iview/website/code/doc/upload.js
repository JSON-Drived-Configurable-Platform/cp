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
    fileList: []
};

simple.data = {
    field,
    model
};

simple.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(field, null, 4)},
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
    <FieldGenerator
        :field="field"
        :form-model="model"
        @on-field-change="handleFieldChange"
    />
</template>
`;

export default {
    simple,
};
