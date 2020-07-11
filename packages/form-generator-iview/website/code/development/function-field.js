// simple
let simple = {};
const simpleFields = [
    {
        type: 'Radio',
        model: 'os',
        label: '系统',
        options:[
            {label: 'IOS', 'value': 'IOS'},
            {label: 'Android', 'value': 'Android'},
        ]
    },
    function field(paramsContainer) {
        const {os} = paramsContainer;
        const map = {
            'IOS': [
                {label: '苹果', 'value': 'apple'},
            ],
            'Android': [
                {label: '三星', 'value': 'samsung'},
                {label: '华为', 'value': 'huawei'},
            ]
        };
        return {
            model: 'brand',
            type: 'Radio',
            label: (os || 'IOS') + '-品牌',
            options: map[os || 'IOS']
        };
    }
];

const simpleModel = {
    os: '',
    brand: ''
};

simple.data = {
    field: simpleFields,
    model: simpleModel
};

simple.code = `
<script>
const fields = [
    {
        type: 'Radio',
        model: 'os',
        label: '系统',
        options:[
            {label: 'IOS', 'value': 'IOS'},
            {label: 'Android', 'value': 'Android'},
        ]
    },
    function field(paramsContainer) {
        const {os} = paramsContainer;
        const map = {
            'IOS': [
                {label: '苹果', 'value': 'apple'},
            ],
            'Android': [
                {label: '三星', 'value': 'samsung'},
                {label: '华为', 'value': 'huawei'},
            ]
        };
        return {
            model: 'brand',
            type: 'Radio',
            label: (os || 'IOS') + '-品牌',
            options: map[os || 'IOS']
        };
    }
];
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(simpleModel)}
        };
    },
};
</script>
<template>
    <FormGenerator
        :fields="fields"
        requestInterceptor="requestInterceptor"
    />
</template>
`;

export default {
    simple
};
