// 简单示例
let simple = {};

const simpleField = {
    type: 'Text',
    model: 'username'
};

const simpleModel = {
    username: 'Alex'
};

simple.data = {
    field: simpleField,
    model: simpleModel
};

simple.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(simpleField)},
            model: ${JSON.stringify(simpleModel)}
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

// option示例
let optionExample = {};

const optionExampleField = {
    type: 'Text',
    model: 'username',
    options: [
        {
            label: '张三',
            value: 'zhangsan'
        },
        {
            label: '王五',
            value: 'wangwu'
        }
    ]
};

const optionExampleModel = {
    username: 'zhangsan'
};

optionExample.data = {
    field: optionExampleField,
    model: optionExampleModel
};

optionExample.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(optionExampleField)},
            model: ${JSON.stringify(optionExampleModel)}
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

// null option示例
let nullExample = {};

const nullExampleField = {
    type: 'Text',
    model: 'username',
    options: [
        {
            label: '张三',
            value: 'zhangsan'
        },
        {
            label: '王五',
            value: 'wangwu'
        }
    ]
};

const nullExampleModel = {
    username: 'zhangsan1'
};

nullExample.data = {
    field: nullExampleField,
    model: nullExampleModel
};

nullExample.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(nullExampleField)},
            model: ${JSON.stringify(nullExampleModel)}
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

// null option示例
let myNullExample = {};

const myNullExampleField = {
    type: 'Text',
    model: 'username',
    nullValue: '空',
    options: [
        {
            label: '张三',
            value: 'zhangsan'
        },
        {
            label: '王五',
            value: 'wangwu'
        }
    ]
};

const myNullExampleModel = {
    username: 'zhangsan1'
};

myNullExample.data = {
    field: myNullExampleField,
    model: myNullExampleModel
};

myNullExample.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(myNullExampleField)},
            model: ${JSON.stringify(myNullExampleModel)}
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

// null option示例
let originalNullExample = {};

const originalNullExampleField = {
    type: 'Text',
    model: 'username',
    nullValue: null,
    options: [
        {
            label: '张三',
            value: 'zhangsan'
        },
        {
            label: '王五',
            value: 'wangwu'
        }
    ]
};

const originalNullExampleModel = {
    username: 'zhangsan1'
};

originalNullExample.data = {
    field: originalNullExampleField,
    model: originalNullExampleModel
};

originalNullExample.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(originalNullExampleField)},
            model: ${JSON.stringify(originalNullExampleModel)}
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

// 简单示例
let arrayExample = {};

const arrayExampleField = {
    type: 'Text',
    model: 'username',
    options: [
        {
            label: '张三',
            value: 'zhangsan'
        },
        {
            label: '王五',
            value: 'wangwu'
        }
    ]
};

const arrayExampleModel = {
    username: ['zhangsan', 'wangwu']
};

arrayExample.data = {
    field: arrayExampleField,
    model: arrayExampleModel
};

arrayExample.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(arrayExampleField)},
            model: ${JSON.stringify(arrayExampleModel)}
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

// remote样例
let remote = {};

const remoteField = {
    type: 'Text',
    model: 'username',
    options: '/textApi'
};

const remoteModel = {
    username: 'zhangsan'
};

remote.data = {
    field: remoteField,
    model: remoteModel
};

remote.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(remoteField)},
            model: ${JSON.stringify(remoteModel)}
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
    optionExample,
    arrayExample,
    remote,
    nullExample,
    myNullExample,
    originalNullExample
};
