const model = {
    id: 'test-id000001',
    name: '张三的明细',
    detailUrl: 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6',
    detailRoute: {
        path: '/home',
        query: {
            test: 'aaa'
        }
    }
};

const routeModel = {
    name: '张三的明细',
    detailRoute: {
        path: '/home',
        query: {
            test: 'aaa'
        }
    }
};

const urlModel = {
    name: '张三的明细',
    detailUrl: 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6',
};

// 简单示例
const simple = {};

const field = {
    type: 'Button',
    text: '删除',
    subtype: 'error',
    action: {
        type: 'event',
        name: 'delete'
    },
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

// route
const route = {};

const routeField = {
    type: 'Button',
    model: 'detailRoute',
    subtype: 'primary',
    text: '详情',
    action: {
        type: 'route'
    },
};

route.data = {
    field: routeField,
    model: routeModel
};

route.code = `
<script>
const field = ${JSON.stringify(routeField, null, 4)};
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


// url
const url = {};

const urlField = {
    type: 'Button',
    model: 'detailUrl',
    subtype: 'primary',
    text: '详情',
    action: {
        type: 'url',
    },
};

url.data = {
    field: urlField,
    model: urlModel
};

url.code = `
<script>
const field = ${JSON.stringify(urlField, null, 4)};
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

// ajax示例
let ajax = {};

const ajaxField = {
    type: 'Button',
    text: '删除',
    subtype: 'error',
    action: {
        type: 'ajax',
        api: '/curdDelete',
        method: 'get',
        name: 'curdDelete'
    },
};


ajax.data = {
    field: ajaxField,
    model
};

ajax.code = `
<script>
const field = ${JSON.stringify(ajaxField, null, 4)};
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


// textModel
const textModel = {};

const textModelField = {
    type: 'Button',
    model: 'detailUrl',
    textModel: 'name',
    subtype: 'text',
    action: {
        type: 'url',
    },
};

textModel.data = {
    field: textModelField,
    model
};


textModel.code = `
<script>
const field = ${JSON.stringify(textModelField, null, 4)};
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

// confirm
const confirm = {};
const confirmField = {
    confirmPoptip: {
        title: '确定删除?',
        placement: 'right',
        cancelText: '你好',
        okText: '不好'
    },
    type: 'Button',
    text: '删除',
    subtype: 'error',
    action: {
        type: 'ajax',
        api: '/curdDelete',
        name: 'curdDelete'
    }
};

confirm.data = {
    field: confirmField,
    model
};

confirm.code = `
<script>
const field = ${JSON.stringify(confirmField, null, 4)};
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
        },
        handleButtonCancel(val) {
            console.log(val);
        }
    }
};
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange",
            @on-button-cancel="handleButtonCancel"
        />
    </Form>
</template>
`;

export default {
    simple,
    route,
    url,
    ajax,
    textModel,
    confirm
};
