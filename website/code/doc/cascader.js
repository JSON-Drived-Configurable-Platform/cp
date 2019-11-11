// 简单示例
let simple = {};

const field = {
    type: 'Cascader',
    model: 'attraction',
    data: [{
        value: 'beijing',
        label: '北京',
        children: [
            {
                value: 'gugong',
                label: '故宫'
            },
            {
                value: 'tiantan',
                label: '天坛'
            },
            {
                value: 'wangfujing',
                label: '王府井'
            }
        ]
    }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
            {
                value: 'nanjing',
                label: '南京',
                children: [
                    {
                        value: 'fuzimiao',
                        label: '夫子庙',
                    }
                ]
            },
            {
                value: 'suzhou',
                label: '苏州',
                children: [
                    {
                        value: 'zhuozhengyuan',
                        label: '拙政园',
                    },
                    {
                        value: 'shizilin',
                        label: '狮子林',
                    }
                ]
            }
        ],
    }]
};

const fieldDisabled = {
    type: 'Cascader',
    model: 'attraction',
    disabled: true,
    data: [{
        value: 'beijing',
        label: '北京',
        children: [
            {
                value: 'gugong',
                label: '故宫'
            },
            {
                value: 'tiantan',
                label: '天坛'
            },
            {
                value: 'wangfujing',
                label: '王府井'
            }
        ]
    }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
            {
                value: 'nanjing',
                label: '南京',
                children: [
                    {
                        value: 'fuzimiao',
                        label: '夫子庙',
                    }
                ]
            },
            {
                value: 'suzhou',
                label: '苏州',
                children: [
                    {
                        value: 'zhuozhengyuan',
                        label: '拙政园',
                    },
                    {
                        value: 'shizilin',
                        label: '狮子林',
                    }
                ]
            }
        ],
    }]
};

const fieldOptionsDisabled = {
    type: 'Cascader',
    model: 'attraction',
    data: [{
        value: 'beijing',
        label: '北京',
        disabled: true,
        children: [
            {
                value: 'gugong',
                label: '故宫'
            },
            {
                value: 'tiantan',
                label: '天坛'
            },
            {
                value: 'wangfujing',
                label: '王府井'
            }
        ]
    }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
            {
                value: 'nanjing',
                label: '南京',
                children: [
                    {
                        value: 'fuzimiao',
                        label: '夫子庙',
                    }
                ]
            },
            {
                value: 'suzhou',
                label: '苏州',
                children: [
                    {
                        value: 'zhuozhengyuan',
                        label: '拙政园',
                    },
                    {
                        value: 'shizilin',
                        label: '狮子林',
                    }
                ]
            }
        ],
    }]
};
const model = {
    attraction: ['jiangsu', 'suzhou', 'shizilin']
};
const fieldSmall = {
    size: 'small',
    type: 'Cascader',
    model: 'attraction',
    data: [{
        value: 'beijing',
        label: '北京',
        disabled: true,
        children: [
            {
                value: 'gugong',
                label: '故宫'
            },
            {
                value: 'tiantan',
                label: '天坛'
            },
            {
                value: 'wangfujing',
                label: '王府井'
            }
        ]
    }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
            {
                value: 'nanjing',
                label: '南京',
                children: [
                    {
                        value: 'fuzimiao',
                        label: '夫子庙',
                    }
                ]
            },
            {
                value: 'suzhou',
                label: '苏州',
                children: [
                    {
                        value: 'zhuozhengyuan',
                        label: '拙政园',
                    },
                    {
                        value: 'shizilin',
                        label: '狮子林',
                    }
                ]
            }
        ],
    }]
};
const fieldLarge = {
    size: 'large',
    type: 'Cascader',
    model: 'attraction',
    data: [{
        value: 'beijing',
        label: '北京',
        disabled: true,
        children: [
            {
                value: 'gugong',
                label: '故宫'
            },
            {
                value: 'tiantan',
                label: '天坛'
            },
            {
                value: 'wangfujing',
                label: '王府井'
            }
        ]
    }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
            {
                value: 'nanjing',
                label: '南京',
                children: [
                    {
                        value: 'fuzimiao',
                        label: '夫子庙',
                    }
                ]
            },
            {
                value: 'suzhou',
                label: '苏州',
                children: [
                    {
                        value: 'zhuozhengyuan',
                        label: '拙政园',
                    },
                    {
                        value: 'shizilin',
                        label: '狮子林',
                    }
                ]
            }
        ],
    }]
};
simple.data = {
    field,
    fieldDisabled,
    fieldOptionsDisabled,
    fieldSmall,
    fieldLarge,
    model
};

simple.code = `
<script>
const field = ${JSON.stringify(field, null, 4)};
const model = ${JSON.stringify(model, null, 4)};
export default {
    data() {
        return {
            field,
            model
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
simple.disabledCode = `
<script>
const field = ${JSON.stringify(fieldDisabled, null, 4)};
const model = ${JSON.stringify(model, null, 4)};
export default {
    data() {
        return {
            field,
            model,
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
simple.largeCode = `
<script>
const field = ${JSON.stringify(fieldLarge, null, 4)};
const model = ${JSON.stringify(model, null, 4)};
export default {
    data() {
        return {
            field,
            model
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
