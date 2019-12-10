<template>
    <div class="two-related-form-demo">
        <FormGenerator
            ref="businessForm"
            :fields="businessFormFields"
            :model="businessFormModel"
            :options="businessFormOptions"
            @on-field-change="hanldeFieldChange"
        />
    </div>
</template>
<script>
import config from './config';
let {businessFormFields, businessFormModel} = config;
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
    }
};
</script>
<style lang="less">
.two-related-form-demo {
    width: 50%;
    margin: 20px;
}
</style>
