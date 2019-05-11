<template>
    <div>
        <Row class="container">
            <iCol
                span="5"
                :style="{padding: '10px'}"
            >
                <h3 :style="{textAlign: 'center', margin: '30px'}">
                    配置项
                </h3>
                <Form :model="form">
                    <FormItem>
                        <Input
                            :value="form.config"
                            type="textarea"
                            :rows="50"
                            placeholder="请输入表单配置项"
                            :style="{fontSize: '12px'}"
                            @on-change="handleConfigChange"
                        />
                    </FormItem>
                </Form>
            </iCol>
            <iCol
                span="4"
                :style="{padding: '10px'}"
            >
                <h3 :style="{textAlign: 'center', margin: '30px'}">
                    值
                </h3>
                <Input
                    :value="JSON.stringify(model, null, 8)"
                    type="textarea"
                    :rows="50"
                    placeholder="请输入表单配置项"
                    :style="{fontSize: '12px'}"
                    disabled
                />
            </iCol>
            <iCol span="15">
                <div class="container">
                    <h3 :style="{textAlign: 'center', margin: '30px'}">
                        表单
                    </h3>
                    <FormGenerator
                        ref="FormGenerator"
                        :fields="fields"
                        :model="model"
                        :options="options"
                    />
                    <Button
                        :style="{marginTop: '20px'}"
                        @click="submit"
                    >
                        提交
                    </Button>
                </div>
            </iCol>
        </Row>
    </div>
</template>

<script>
import {Col} from 'iview';
import {config, model, fields, options} from './config';
export default {
    components: {
        iCol: Col
    },
    data() {
        return {
            form: {
                config: JSON.stringify(config, null, 8)
            },
            model,
            fields,
            options,
        };
    },
    mounted: function() {

    },
    beforeDestroy: function() {

    },
    methods: {
        handleConfigChange(e) {
            let config;
            try {
                config = JSON.parse(e.target.value || '') || [];
            } catch (error) {
                this.$Message('配置信息不是一个合法的json数据');
            }

            let model = {};
            config.fields.forEach(item => {
                model[item.model] = item.defaultValue;
            });
            this.model = model;
            this.fields = config.fields;
            this.options = config.options;
        },
        submit() {
            this.$refs.FormGenerator
                .submit().then(data => {
                    // eslint-disable-next-line no-console
                    console.log('submit', data);
                });
        }
    }
};
</script>
<style lang="less" scoped>
    .container {
        padding: 10px
    }
</style>
