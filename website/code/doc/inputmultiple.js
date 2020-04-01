// 简单示例
let simple = {
    data: {
        field: {
            type: 'InputMultiple',
            model: 'name',
            succMessage: '已添加，请及时保存表单',
            delMessage: '已删除，请及时保存表单'
        },
        model: {
            name: ['成员1', '成员2']
        }
    }
};

simple.code = `
<script>
const field = ${JSON.stringify(simple.data.field, null, 4)};
const fimodeleld = ${JSON.stringify(simple.data.model, null, 4)};
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

// 设置了默认成员的示例
let defMemberData = {
    field: {
        type: 'InputMultiple',
        model: 'name',
        defaultList: ['默认包含的成员1', '默认包含的成员2']
    },
    model: {
        name: []
    }
};

let defMember = {
    data: defMemberData
};

defMember.code = `
<script>
const field = ${JSON.stringify(defMemberData.field, null, 4)};
const model = ${JSON.stringify(defMemberData.model, null, 4)};
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

// 成员不可删除的示例
let closableData = {
    field: {
        type: 'InputMultiple',
        model: 'name',
        closable: false
    },
    model: {
        name: ['不可删除成员1', '不可删除成员2']
    }
};

let closable = {
    data: closableData
}

closable.code = `
<script>
const field = ${JSON.stringify(closableData.field, null, 4)};
const model = ${JSON.stringify(closableData.model, null, 4)};
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
    defMember,
    closable
};
