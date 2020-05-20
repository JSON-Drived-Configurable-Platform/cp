
// 使用api
let api = {};
const apiField = [{
    type: 'Select',
    model: 'city',
    label: '城市',
    options: '/selectApi',
}];

const apiModel = {
    city: ''
};

api.data = {
    fields: apiField,
    model: apiModel
};

api.code = `
<script>
const field = ${JSON.stringify(apiField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(apiModel)}
        };
    }
};
<script>
<template>
    <FormGenerator
            :fields="fields"
            :model="model"
        />
</template>
`;

// apiParams
let apiAllParams = {};
const apiAllParamsField = [{
    type: 'Select',
    model: 'city',
    label: '城市',
    options: '/selectProvinceApi',
    apiParams: 'all'
}];

const apiAllParamsModel = {
    city: '',
    province: '河北'
};

apiAllParams.data = {
    fields: apiAllParamsField,
    model: apiAllParamsModel
};

apiAllParams.code = `
<script>
const field = ${JSON.stringify(apiAllParamsField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(apiAllParamsModel)}
        };
    }
};
<script>
<template>
    <FormGenerator
            :fields="fields"
            :model="model"
        />
</template>
`;

// apiSomeParams
let apiSomeParams = {};
const apiSomeParamsField = [{
    type: 'Select',
    model: 'province',
    label: '省份',
    options: [
        {label: '河北', 'value': 'Hebei'},
        {label: '山西', 'value': 'Shanxi'},
        {label: '浙江', 'value': 'Zhejiang'},
        {label: '江苏', 'value': 'Jiangsu'}
    ]
}, {
    type: 'Select',
    model: 'city',
    label: '城市',
    options: '/selectProvinceApi',
    apiParams: ['province']
}];

const apiSomeParamsModel = {
    city: '',
    province: ''
};

apiSomeParams.data = {
    fields: apiSomeParamsField,
    model: apiSomeParamsModel
};

apiSomeParams.code = `
<script>
const field = ${JSON.stringify(apiSomeParamsField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(apiSomeParamsModel)}
        };
    }
};
<script>
<template>
    <FormGenerator
            :fields="fields"
            :model="model"
        />
</template>
`;

// apiSomeParams
let apiParamsContainer = {};
const apiParamsContainerField = [{
    type: 'Select',
    model: 'city',
    label: '城市',
    options: '/selectProvinceApi',
    apiParams: ['zipCode']
}];

const apiParamsContainerModel = {
    city: ''
};
const apiParamsContainerExample = {
    zipCode: '100000'
};

apiParamsContainer.data = {
    fields: apiParamsContainerField,
    model: apiParamsContainerModel,
    paramsContainer: apiParamsContainerExample
};

apiParamsContainer.code = `
<script>
const field = ${JSON.stringify(apiParamsContainerField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(apiParamsContainerModel)},
            paramsContainer: ${JSON.stringify(apiParamsContainerExample)}
        };
    }
};
<script>
<template>
    <FormGenerator
            :fields="fields"
            :model="model"
            :params-container="paramsContainer"
        />
</template>
`;



export default {
    api,
    apiAllParams,
    apiSomeParams,
    apiParamsContainer
};
