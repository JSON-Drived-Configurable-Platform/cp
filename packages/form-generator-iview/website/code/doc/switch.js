// 简单示例
let simple = {};

const field = {
    type: 'Switch',
    model: 'open',
    true: {
        value: 1
    },
    false: {
        value: 0
    }
};

const model = {
    open: false
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
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

// 文字
let text = {};
const textField = {
    type: 'Switch',
    model: 'open',
    true: {
        label: '开'
    },
    false: {
        label: '关'
    }
};

const textModel = {
    open: false
};

text.data = {
    field: textField,
    model: textModel
};

text.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(textField)},
            model: ${JSON.stringify(textModel)}
        };
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
    </Form>
</template>
`;

// 图标
let icon = {};
const iconField = {
    type: 'Switch',
    model: 'open',
    true: {
        icon: 'md-checkmark'
    },
    false: {
        icon: 'md-close'
    }
};

const iconModel = {
    open: false
};

icon.data = {
    field: iconField,
    model: iconModel
};

icon.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(iconField)},
            model: ${JSON.stringify(iconModel)}
        };
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
    </Form>
</template>
`;

// value
export default {
    simple,
    text,
    icon
};
