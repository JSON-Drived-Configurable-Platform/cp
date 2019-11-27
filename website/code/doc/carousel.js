// 简单示例
let simple = {};

const field = {
    type: 'Carousel',
    model: 'city',
    options: [
        {
            value: 'beijing',
            label: '北京',
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg'
        },
        {
            value: 'shanghai',
            label: '上海',
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg'
        },
        {
            value: 'guangzhou',
            label: '广州',
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481487900&di=5f506969bb6269da5b86952de5c4f8c2&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F748%2Fw991h557%2F20190113%2FTR0G-hrpcmqw3706235.jpg'
        },
        {
            value: 'shenzhen',
            label: '深圳',
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481527030&di=268a917e6a6ef408c0e5fee8816ca6cf&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161128%2F387d785273bb4b31b48451c51a2e5359_th.gif'
        }
    ]
};

const model = {
    city: 'shenzhen'
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


// 视频
let video = {};

const videoField = {
    type: 'Carousel',
    model: 'city',
    subtype: 'video',
    options: [
        {
            value: 'one',
            url: 'http://sc4.hao123img.com/materials/xz.upload/b6/b6aafe3af127fd2ef47a1afb54fcd4bd.mp4'
        },
        {
            value: 'two',
            url: 'http://sc2.hao123img.com/materials/xz.upload/08/08a237bc1a51794c8e3ff2d410045066.mp4'
        }
    ]
};

const videoModel = {
    city: 'two'
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

// valueAsOptions
let valueAsOptions = {};

const valueAsOptionsField = {
    type: 'Carousel',
    model: 'city',
    valueAsOptions: true,
};

const valueAsOptionsModel = {
    city: [
        {
            value: 'beijing',
            label: '北京',
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg'
        },
        {
            value: 'shanghai',
            label: '上海',
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg'
        },
        {
            value: 'guangzhou',
            label: '广州',
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481487900&di=5f506969bb6269da5b86952de5c4f8c2&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F748%2Fw991h557%2F20190113%2FTR0G-hrpcmqw3706235.jpg'
        },
        {
            value: 'shenzhen',
            label: '深圳',
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481527030&di=268a917e6a6ef408c0e5fee8816ca6cf&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161128%2F387d785273bb4b31b48451c51a2e5359_th.gif'
        }
    ]
};

valueAsOptions.data = {
    field: valueAsOptionsField,
    model: valueAsOptionsModel
};

valueAsOptions.code = `
<script>
const field = ${JSON.stringify(valueAsOptionsField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(valueAsOptionsModel)}
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
    video,
    valueAsOptions
};
