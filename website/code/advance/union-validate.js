// validateForm
let validateForm = {};

let validateFormFields = [
    {
        label: '查询方式',
        type: 'Radio',
        model: 'searchType',
        options: [
            {label: '立即', 'value': 'sync'},
            {label: '异步', 'value': 'async'}
        ],
        required: true
    },
    function field(paramsContainer) {
        const config = {
            label: '条数上限',
            type: 'InputNumber',
            model: 'limit',
            required: true
        };
        if (paramsContainer.searchType === 'sync') {
            config.rules = [
                {
                    type: 'number',
                    max: 1000,
                    message: '立即查询时，条数不可大于1千'
                }
            ];
        }
        return config;
    },
    {
        type: 'Submit',
        subtype: 'primary',
        text: '提交',
        inline: true
    },
    {
        type: 'Reset',
        text: '重置',
        labelWidth: 0,
        inline: true
    }
];

let validateFormModel = {
    searchType: 'async',
    limit: 2000,
};


validateForm.data = {
    fields: validateFormFields,
    model: validateFormModel
};

validateForm.code = `
<script>
const fields = [
    {
        label: '查询方式',
        type: 'Radio',
        model: 'searchType',
        options: [
            {label: '立即', 'value': 'sync'},
            {label: '异步', 'value': 'async'}
        ],
        required: true
    },
    function field(paramsContainer) {
        const config = {
            label: '条数上限',
            type: 'InputNumber',
            model: 'limit',
            required: true
        };
        if (paramsContainer.searchType === 'sync') {
            config.rules = [
                {
                    type: 'number',
                    max: 1000,
                    message: '立即查询时，条数不可大于1千'
                }
            ];
        }
        return config;
    },
    {
        type: 'Submit',
        subtype: 'primary',
        text: '提交',
        inline: true
    },
    {
        type: 'Reset',
        text: '重置',
        labelWidth: 0,
        inline: true
    }
];
const model = ${JSON.stringify(validateFormModel, null, 4)};
export default {
    data() {
        return {
            fields,
            model
        };
    }
};
</script>
<template>
    <FormGenerator
        :fields="fields"
        :model="model"
    />
</template>
`;


export default {
    validateForm,
};
