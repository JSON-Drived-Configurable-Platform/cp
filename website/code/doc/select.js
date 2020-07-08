// 简单示例
let simple = {};

const field = {
    type: 'Select',
    transfer: true,
    model: 'city',
    options: [
        {label: '北京', 'value': 'Beijing'},
        {label: '上海', 'value': 'Shanghai'},
        {label: '广州', 'value': 'Guangzhou'},
        {label: '深圳', 'value': 'Shenzhen'}
    ]
};

const model = {
    city: 'Beijing'
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
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

// 使用api
let api = {};
const apiField = {
    type: 'Select',
    model: 'city',
    options: '/selectApi',
    defaultValueIndex: 0
};

const apiModel = {
    city: ''
};

api.data = {
    field: apiField,
    model: apiModel
};

api.code = `
<script>
const field = ${JSON.stringify(apiField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(apiModel)}
        };
    }
};
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
    </Form>
</template>
`;

// 多选
let multiple = {};
const multipleField = {
    type: 'Select',
    model: 'city',
    multiple: true,
    options: '/selectApi',
    defaultValueIndexes: [0, 1],
    maxTagCount: 2,
    maxTagPlaceholder(number) {
        return `+${number}...`;
    }
    // options: [
    //     {label: '北京', 'value': 'Beijing'},
    //     {label: '上海', 'value': 'Shanghai'},
    //     {label: '广州', 'value': 'Guangzhou'},
    //     {label: '深圳', 'value': 'Shenzhen'}
    // ]
};

const multipleModel = {
    city: []
};

multiple.data = {
    field: multipleField,
    model: multipleModel
};

multiple.code = `
<script>
const field = ${JSON.stringify(multipleField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(multipleModel)}
        };
    }
};
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            :form-model="model"
        />
    </Form>
</template>
`;

// 可搜索
let filterable = {};
const filterableField = {
    type: 'Select',
    model: 'city',
    filterable: true,
    options: '/selectApi'
};

const filterableAndMultipleField = {
    type: 'Select',
    model: 'cities',
    filterable: true,
    multiple: true,
    options: '/selectApi',
    extraOptions: '/selectExtraOptionsApi',
    maxTagCount: 2,
    maxTagPlaceholder(number) {
        return `+${number}...`;
    }
    // extraOptions: [
    //     {
    //         label: '张三',
    //         value: 'zhangsan'
    //     },
    //     {
    //         label: '李四',
    //         value: 'lisi'
    //     }
    // ]
};

const filterableModel = {
    city: 'Beijing',
    cities: ['zhangsan', 'lisi']
};

filterable.data = {
    field: filterableField,
    multipleField: filterableAndMultipleField,
    model: filterableModel
};

filterable.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(filterableField)},
            multipleField: ${JSON.stringify(filterableAndMultipleField)},
            model: ${JSON.stringify(filterableModel)}
        };
    }
};
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
        <FieldGenerator
            :field="multipleField"
        />
    </Form>
</template>
`;

// 远程搜索
let remote = {};
const remoteField = {
    type: 'Select',
    model: 'city',
    remote: true,
    options: '/selectApi'
};

const remoteAndMultipleField = {
    type: 'Select',
    model: 'cities',
    remote: true,
    multiple: true,
    options: '/selectApi'
};

const remoteModel = {
    city: 'Beijing',
    cities: ['Beijing', 'Shanghai']
};

remote.data = {
    field: remoteField,
    multipleField: remoteAndMultipleField,
    model: remoteModel
};

remote.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(remoteField)},
            multipleField: ${JSON.stringify(remoteAndMultipleField)},
            model: ${JSON.stringify(remoteModel)}
        };
    }
};
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
        <FieldGenerator
            :field="multipleField"
        />
    </Form>
</template>
`;

// 分组
let group = {};
const groupField = {
    type: 'Select',
    model: 'province',
    group: true,
    options: '/selectGroupApi'
};

const groupAndMultipleField = {
    type: 'Select',
    model: 'provinces',
    group: true,
    multiple: true,
    options: '/selectGroupApi'
};

const groupModel = {
    province: '110000000000',
    provinces: ['110000000000', '310000000000']
};

group.data = {
    field: groupField,
    multipleField: groupAndMultipleField,
    model: groupModel
};

group.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(groupField)},
            multipleField: ${JSON.stringify(groupAndMultipleField)},
            model: ${JSON.stringify(groupModel)}
        };
    }
};
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
        <FieldGenerator
            :field="multipleField"
        />
    </Form>
</template>
`;


// 可清空
let clearable = {};
const clearableField = {
    type: 'Select',
    model: 'province',
    clearable: true,
    filterable: true,
    options: '/selectApi'
};

const clearableModel = {
    province: 'Beijing',
};

clearable.data = {
    field: clearableField,
    model: clearableModel
};

clearable.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(clearableField)},
            model: ${JSON.stringify(clearableModel)}
        };
    }
};
</script>
<template>
    <FieldGenerator
        :field="field"
    />
</template>
`;

// 前缀图标
let prefix = {};
const prefixField = {
    type: 'Select',
    model: 'province',
    prefix: 'ios-home',
    filterable: true,
    options: '/selectApi'
};

const prefixModel = {
    province: 'Beijing',
};

prefix.data = {
    field: prefixField,
    model: prefixModel
};

prefix.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(prefixField)},
            model: ${JSON.stringify(prefixModel)}
        };
    }
};
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            :form-model="model"
        />
    </Form>
</template>
`;


export default {
    simple,
    api,
    multiple,
    filterable,
    remote,
    group,
    clearable,
    prefix
};
