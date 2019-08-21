// 简单示例
let simple = {};

const field = {
    type: 'Select',
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
export default {
    data() {
        return {
            field: ${JSON.stringify(field)},
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

// 使用api
let api = {};
const apiField = {
    type: 'Select',
    model: 'city',
    options: '/selectApi'
};

const apiModel = {
    city: 'Beijing'
};

api.data = {
    field: apiField,
    model: apiModel
};

api.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(apiField)},
            model: ${JSON.stringify(apiModel)}
        };
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
</template>
`;

// 多选
let multiple = {};
const multipleField = {
    type: 'Select',
    model: 'city',
    multiple: true,
    options: '/selectApi',
    // options: [
    //     {label: '北京', 'value': 'Beijing'},
    //     {label: '上海', 'value': 'Shanghai'},
    //     {label: '广州', 'value': 'Guangzhou'},
    //     {label: '深圳', 'value': 'Shenzhen'}
    // ]
};

const multipleModel = {
    city: ['Beijing', 'Shanghai']
};

multiple.data = {
    field: multipleField,
    model: multipleModel
};

multiple.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(multipleField)},
            model: ${JSON.stringify(multipleModel)}
        };
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
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
    options: '/selectApi'
};

const filterableModel = {
    city: 'Beijing',
    cities: ['Beijing', 'Shanghai']
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
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
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
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
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
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
</template>
`;

export default {
    simple,
    api,
    multiple,
    filterable,
    remote,
    group
};
