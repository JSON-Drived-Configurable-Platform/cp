// 简单示例
let simple = {};

const field = {
    type: 'LogicSelect',
    label: '逻辑选择',
    model: 'version',
    required: true,
    enables: ['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple'],
    options: [
        {
            label: '1.0',
            value: '1.0'
        },
        {
            label: '1.1',
            value: '1.1'
        },
        {
            label: '1.3',
            value: '1.3'
        },
        {
            label: '1.4',
            value: '1.4'
        },
        {
            label: '2.0',
            value: '2.0'
        },
        {
            label: '2.1',
            value: '2.1'
        },
        {
            label: '2.3',
            value: '2.3'
        },
        {
            label: '2.4',
            value: '2.4'
        }
    ]
};

const model = {
    version: {
        logic: 'betweenWith',
        value: ['1.3', '2.1']
    }
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
            field: ${JSON.stringify(field, null, 4)},
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

let logicInput = {};

const logicInputField = {
    type: 'LogicInput',
    label: '逻辑输入',
    model: 'version',
    required: true,
    enables: ['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple'],
    //defaultHide: true
};
const logicInputModel = {
    version: {
        logic: 'betweenWith',
        value: ['1.3', '2.1']
    }
};
logicInput.data = {
    field: logicInputField,
    model: logicInputModel
};

logicInput.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(logicInputField, null, 4)},
            model: ${JSON.stringify(logicInputModel)}
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

let LogicSelectApi = {};

const LogicSelectApiField = {
    type: 'LogicSelect',
    label: '逻辑选择',
    model: 'version',
    required: true,
    enables: ['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple'],
    // options: '/selectApi',
    api: '/selectApi'
    //defaultHide: true
};
const LogicSelectApiModel = {
    version: {
        logic: 'betweenWith',
        value: ['']
    }
};
LogicSelectApi.data = {
    field: LogicSelectApiField,
    model: LogicSelectApiModel
};

LogicSelectApi.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(LogicSelectApiField)},
            model: ${JSON.stringify(LogicSelectApiModel)}
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
    logicInput,
    LogicSelectApi
};
