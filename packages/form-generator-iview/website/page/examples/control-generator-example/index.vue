<template>
    <div class="control-generaotor-demo">
        <Table
            :columns="columns"
            :data="data"
        >
            <template
                v-for="column in columns"
                :slot="column.slot"
                slot-scope="{ row, index }"
            >
                <!-- 可编辑项 -->
                <template
                    v-if="column.slot !== 'action'"
                >
                    <ControlGenerator
                        v-if="editModel.index === index"
                        :key="column.slot"
                        :field="column.editControlConfig"
                        :form-model="editModel"
                        :request-interceptor="requestInterceptor"
                        @on-field-change="handleFieldChange"
                    />
                    <span
                        v-else
                        :key="column.slot"
                    >{{ row[column.slot] }}</span>
                </template>
                <!-- 操作项 -->
                <template v-else>
                    <div
                        v-if="editModel.index === index"
                        :key="column.slot"
                    >
                        <Button
                            @click="handleSave(index)"
                        >保存</Button>
                        <Button
                            @click="editModel.index = -1"
                        >取消</Button>
                    </div>
                    <div
                        v-else
                        :key="column.slot"
                    >
                        <Button
                            @click="handleEdit(row, index)"
                        >操作</Button>
                    </div>
                </template>
            </template>
        </Table>
    </div>
</template>

<script>
import axios from 'axios';
import {columns, data} from './config';
export default {
    data() {
        return {
            columns,
            data,
            editModel: {},
            requestInterceptor: function(url, params) {
                return new Promise((resolve, reject) => {
                    // eslint-disable-next-line no-undef
                    if (process.env.NODE_ENV === 'production') {
                        url = `website-data-api/${url}.json`;
                    }
                    axios.get(url, {
                        query: params
                    }).then(res => {
                        resolve(res.data);
                    }).catch(error => {
                        reject(error);
                    });
                });
            }
        };
    },
    methods: {
        handleEdit (item, index) {
            this.editModel = item;
            this.editModel.index = index;
        },
        handleSave (index) {
            this.data.splice(index, 1, this.editModel);
            this.editModel.index = -1;
        },
        handleFieldChange(model, value) {
            this.$set(this.editModel, model, value);
        }
    }
};
</script>
<style lang="less">
    .container {
        margin: 10px
    }
    .control-generaotor-demo {
        .ivu-table-wrapper {
            overflow: visible;
        }
    }
</style>
