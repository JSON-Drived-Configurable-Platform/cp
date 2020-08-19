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

export default {
    remote
};
