// 简单示例
const simple = {};
const model = {
    id: 'test-id000001'
};
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
    field
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

// ajax示例
let ajax = {};

const ajaxField = {
    type: 'Button',
    text: '删除',
    subtype: 'error',
    action: {
        type: 'ajax',
        api: '/curdDelete'
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

// confirm
const confirm = {};
const confirmField = {
    confirmPoptip: {
        title: '确定删除?',
        placement: 'right'
    },
    type: 'Button',
    text: '删除',
    subtype: 'error',
    action: {
        type: 'ajax',
        api: '/curdDelete'
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
    ajax,
    confirm
};
