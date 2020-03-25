// 简单示例
let simple = {};

const field = {
    'type': 'TableSelect',
    'label': '角色选择',
    'multiple': true,
    'model': 'roles',
    'columns': [
        {
            'title': '名称',
            'key': 'name'
        },
        {
            'title': '描述',
            'key': 'description'
        }
    ],
    'options': [
        {
            'id': '1',
            'name': 'admin',
            'description': '超级管理员，拥有所有权限',
            'create_time': '2019-9-10',
            'update_time': '2019-10-10'
        },
        {
            'id': '2',
            'name': 'user',
            'description': '普通用户，只有浏览的权限',
            'create_time': '2019-9-10',
            'update_time': '2019-10-10'
        },
        {
            'id': '3',
            'name': 'editor',
            'description': '编辑，可以编辑、发布文章等',
            'create_time': '2019-9-10',
            'update_time': '2019-10-10'
        },
        {
            'id': '4',
            'name': 'auditor',
            'description': '审核人员，可以查看、审核文案',
            'create_time': '2019-9-10',
            'update_time': '2019-10-10'
        }
    ]
};

const model = {
    roles: ['1', '2']
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
    <Form :model='model'>
        <FieldGenerator
            :field='field'
            @on-field-change='handleFieldChange'
        />
    </Form>
</template>
`;


// 远程示例
let remote = {};

const remoteField = {
    'type': 'TableSelect',
    'label': '角色选择',
    'multiple': true,
    'model': 'roles',
    'columns': [
        {
            'title': '名称',
            'key': 'name'
        },
        {
            'title': '描述',
            'key': 'description'
        }
    ],
    'options': '/tableSelectOptionsApi'
};

const remoteModel = {
    roles: ['1', '2']
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

// 单选示例
let single = {};

const singleField = {
    'type': 'TableSelect',
    'label': '角色选择',
    'multiple': false,
    'model': 'roles',
    'columns': [
        {
            'title': '名称',
            'key': 'name'
        },
        {
            'title': '描述',
            'key': 'description'
        }
    ],
    'options': [
        {
            'id': '1',
            'name': 'admin',
            'description': '超级管理员，拥有所有权限',
            'create_time': '2019-9-10',
            'update_time': '2019-10-10'
        },
        {
            'id': '2',
            'name': 'user',
            'description': '普通用户，只有浏览的权限',
            'create_time': '2019-9-10',
            'update_time': '2019-10-10'
        },
        {
            'id': '3',
            'name': 'editor',
            'description': '编辑，可以编辑、发布文章等',
            'create_time': '2019-9-10',
            'update_time': '2019-10-10'
        },
        {
            'id': '4',
            'name': 'auditor',
            'description': '审核人员，可以查看、审核文案',
            'create_time': '2019-9-10',
            'update_time': '2019-10-10'
        }
    ]
};

const singleModel = {
    roles: '1'
};

single.data = {
    field: singleField,
    model: singleModel
};

single.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(singleField)},
            model: ${JSON.stringify(singleModel)}
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
    remote,
    single
};
