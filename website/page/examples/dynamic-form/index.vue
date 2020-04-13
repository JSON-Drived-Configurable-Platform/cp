<template>
    <div class="dynamic-form-demo">
        <Row>
            <i-col :span="12">
                <FormGenerator
                    :fields="basicFormsConfig"
                    :model="basicFormModel"
                    :options="basicFormOptions"
                    @on-field-change="hanldeFieldChange"
                />
                <h1>动态元素</h1>
                <FormGenerator
                    :fields="dynamicFormConfig"
                    :model="dynamicFormModel"
                    :options="basicFormOptions"
                    @on-field-change="hanldeFieldChange"
                />
            </i-col>
            <i-col :span="12">
                <div class="dynamic-form-demo-preview">
                    预览
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
import config from './config';
let {basicFormsConfig, dynamicFormConfig} = config;
export default {
    data() {
        return {
            basicFormsConfig,
            basicFormOptions: {
                labelWidth: 120
            },
            dynamicFormConfig,
            basicFormModel: {
                // imgWmOpts: {
                //     g: '',
                //     x: '',
                //     y: ''
                // },
                // qrOpts: {
                //     width: '',
                //     margin: '',
                //     y: '',
                //     color: {
                //         dark: '',
                //         light: ''
                //     }
                // }
            },
            dynamicFormModel: {
                // imgWmOpts: {
                //     g: ''
                // }
            }
        };
    },
    methods: {
        hanldeFieldChange(model, value) {
            console.log(model, value);
            console.log(this.basicFormModel);
        }
    }
};
</script>
<style lang="less">
.dynamic-form-demo {
    margin: 20px;

    &-preview {
        margin: 30px;
        width: 300px;
        height: auto;
        min-height: 500px;
        background: #e4e4e4;
    }
}
</style>
