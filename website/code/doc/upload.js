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

// 图片上传
let image = {};

const imageField = {
    type: 'ImgUpload',
    subtype: 'drag',
    maxSize: 20000,
    action: 'https://jsonplaceholder.typicode.com/posts/',
    multiple: true,
    paste: true,
    disabled: false,
    data: {
        userName: 'bingblog'
    },
    withCredentials: true,
    showUploadList: true,
    apiParams: ['radio'],
    model: 'fileList',
    tip: '上传的提示信息或者帮助信息'
};

const imageModel = {
    fileList: [
        {
            id: '13414214123412421341234',
            name: 'img1img1img1img1img1.jpg',
            url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3276523708,1156514398&fm=173&app=49&f=JPEG?w=218&h=146&s=DAB210C768C5AA471C5DFBA403007081'
        },
    ]
};

image.data = {
    field: imageField,
    model: imageModel
};

image.code = `
<script>
const field = ${JSON.stringify(imageField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(imageModel)}
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

// 视频上传
let video = {};

const videoField = {
    type: 'VideoUpload',
    subtype: 'drag',
    maxSize: 200000,
    action: 'https://jsonplaceholder.typicode.com/posts/',
    multiple: true,
    paste: true,
    disabled: false,
    data: {
        userName: 'bingblog'
    },
    withCredentials: true,
    showUploadList: true,
    apiParams: ['radio'],
    model: 'fileList',
    tip: '上传的提示信息或者帮助信息'
};

const videoModel = {
    fileList: [
        {
            id: '134142141234124213421234',
            name: 'b6aafe3af127fd2ef47a1afb54fcd4bd.mp4',
            url: 'http://sc4.hao123img.com/materials/xz.upload/b6/b6aafe3af127fd2ef47a1afb54fcd4bd.mp4'
        }
    ]
};

video.data = {
    field: videoField,
    model: videoModel
};

video.code = `
<script>
const field = ${JSON.stringify(videoField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(videoModel)}
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
    image,
    video
};
