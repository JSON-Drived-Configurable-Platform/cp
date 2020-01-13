// 简单示例
let simple = {};

const field = {
    'type': 'Tree',
    'label': '树形多选',
    'model': 'permissions',
    'multiple': true,
    'checkDirectly': true,
    'showCheckbox': true,
    'options': [
        {
            'id': '1',
            'title': '用户管理',
            'children': [
                {
                    'id': '2',
                    'title': '查看用户'
                },
                {
                    'id': '3',
                    'title': '新增用户'
                },
                {
                    'id': '4',
                    'title': '编辑用户'
                },
                {
                    'id': '5',
                    'title': '删除用户'
                },
                {
                    'id': '11',
                    'title': '编辑用户角色'
                }
            ]
        },
        {
            'id': '6',
            'title': '角色管理',
            'children': [
                {
                    'id': '7',
                    'title': '查看角色'
                },
                {
                    'id': '8',
                    'title': '新增角色'
                },
                {
                    'id': '9',
                    'title': '编辑角色'
                },
                {
                    'id': '10',
                    'title': '删除角色'
                }
            ]
        }
    ]
};

const model = {
    status: '1'
};

simple.data = {
    field,
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
    <Form :model='model'>
        <FieldGenerator
            :field='field'
            @on-field-change='handleFieldChange'
        />
    </Form>
</template>
`;

// 简单示例
let remote = {};

const remoteField = {
    'type': 'Tree',
    'label': '树形多选',
    'model': 'permissions',
    'multiple': true,
    'showCheckbox': true,
    'checkDirectly': true,
    'options': '/treeOptionApi'
};

const remoteModel = {
    status: '1'
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
    <Form :model='model'>
        <FieldGenerator
            :field='field'
            @on-field-change='handleFieldChange'
        />
    </Form>
</template>
`;

export default {
    simple,
    remote
};
