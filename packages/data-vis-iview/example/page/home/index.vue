<template>
    <div>
        <Row class="container">
            <div class="container">
                <Select v-model="paramsContainer.test1">
                    <Option value="1">
                        选项1
                    </Option>
                    <Option value="2">
                        选项2
                    </Option>
                </Select>
                <DataVis
                    v-for="(item, index) in config"
                    :key="index"
                    ref="DataVis"
                    :style="{marginTop: '40px'}"
                    :config="item"
                    :params-container="paramsContainer"
                    :api-base="apiBase"
                />
            </div>
        </Row>
        <Row class="container">
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
            <!-- <iCol
                span="3"
                :style="{padding: '10px'}"
            >
                <h3 :style="{textAlign: 'center', margin: '30px'}">
                    选项
                </h3>
                <Input
                    type="textarea"
                    :rows="50"
                    placeholder="请输入表单配置项"
                    :style="{fontSize: '12px'}"
                    disabled
                />
            </iCol> -->
        </Row>
    </div>
</template>

<script>
import {config} from './config';
export default {
    data() {
        return {
            form: {
                config: JSON.stringify(config, null, 8)
            },
            config,
            paramsContainer: {
                test1: '1',
                test2: '2'
            },
            apiBase: ''
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
            this.config = config;
        }
    }
};
</script>
<style lang="less" scoped>
    .container {
        padding: 10px;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
</style>
