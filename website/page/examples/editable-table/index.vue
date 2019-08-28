<template>
    <div class="control-generaotor-demo">
        <Form :model="editModel">
            <Table
                :columns="columns"
                :data="data"
            >
                <template
                    v-for="column in columns"
                    :slot="column.slot"
                    slot-scope="{ row, index }"
                >
                    <FieldGenerator
                        v-if="editModel.index === index"
                        :key="column.slot"
                        :field="column.formField"
                        :request-interceptor="requestInterceptor"
                        @on-field-change="handleFieldChange"
                        @on-submit="handleSave(index)"
                    />
                    <span
                        v-else-if="column.slot !== 'action'"
                        :key="column.slot"
                    >{{ row[column.slot] }}</span>
                    <Button
                        v-else
                        :key="column.slot"
                        @click="handleEdit(row, index)"
                    >编辑</Button>
                </template>
            </Table>
        </Form>
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

        .ivu-form-item {
            margin-top: 20px;
        }

        .ivu-table, .ivu-table-wrapper, .ivu-table-cell {
            overflow: visible;
        }
    }
</style>
