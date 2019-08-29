<template>
    <div class="two-related-form-demo">
        <FormGenerator
            ref="businessForm"
            :fields="businessFormFields"
            :model="businessFormModel"
            :options="businessFormOptions"
            @on-field-change="hanldeFieldChange"
        />
        <FormGenerator
            :fields="conditions"
            :model="conditionsModel"
            :options="businessFormOptions"
        />
    </div>
</template>
<script>
import config from './config';
let {businessFormFields, businessFormModel, conditions_1, conditions_2} = config;
let conditions_1Model = {};
conditions_1.forEach(item => {
    conditions_1Model[item.model] = item.defaultValue;
});
let conditions_2Model = {};
conditions_2.forEach(item => {
    conditions_2Model[item.model] = item.defaultValue;
});

export default {
    data() {
        return {
            businessFormFields,
            businessFormModel,
            businessFormOptions: {
                labelWidth: 120
            },
            conditions: [],
            conditionsModel: {},
        };
    },
    methods: {
        hanldeFieldChange(model, value) {
            if (value === '1') {
                this.conditions = conditions_1;
                this.conditionsModel = conditions_1Model;
            }
            else {
                this.conditions = conditions_2;
                this.conditionsModel = conditions_2Model;
            }
        }
    }
};
</script>
<style lang="less">
.two-related-form-demo {
    width: 50%;
    margin: 20px;
}
</style>
