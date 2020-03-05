<template>
    <div class="curd-example-demo">
        <h3 class="curd-example-demo-header">
            <Button type="primary" @click="handleCreateButtonClick">创建用户</Button>
        </h3>
        <Table class="curd-example-demo-table" :columns="columns" :data="data">
            <template
                v-for="column in columns"
                :slot="column.slot"
                slot-scope="{ row, index}"
            >
                <Form
                    :key="column.slot"
                    :model="JSON.parse(JSON.stringify(row))"
                >
                    <Poptip
                        v-if="column.poptip"
                        :key="column.slot"
                        placement="left-start"
                    >
                        <template v-if="column.poptip.displayField">
                            <FieldGenerator
                                :params-container="paramsContainer"
                                :field="column.poptip.displayField"
                            />
                        </template>
                        <template v-else>
                            <span>{{ row[column.slot] }}</span>
                        </template>
                        <Icon type="ios-create-outline" size="20" />
                        <div slot="content">
                            <FieldGenerator
                                v-for="(field, i) in column.poptip.formFields"
                                :key="i"
                                :params-container="paramsContainer"
                                :field="field"
                            />
                        </div>
                    </Poptip>
                    <div v-if="column.formFields">
                        <FieldGenerator
                            v-for="(field, i) in column.formFields"
                            :key="i"
                            :field="field"
                            @on-button-event="handleButtonEvent($event, row, index)"
                        />
                    </div>
                </Form>
            </template>
        </Table>
        <Modal
            v-model="editDialogOpen"
            title="编辑"
            footer-hide
            width="900"
        >
            <FormGenerator
                ref="FormGenerator"
                :fields="editFormFields"
                :model="editModel"
                :params-container="paramsContainer"
                @on-button-event="handleButtonEvent($event)"
            />
        </Modal>
    </div>
</template>
<script>
import {columns, data, editFormFields} from './inlineEdit.config';
export default {
    data() {
        return {
            columns,
            data,
            editModel: {},
            editFormFields,
            editDialogOpen: false,
            paramsContainer: {
                test: 'xxx'
            }
        };
    },
    methods: {
        handleCreateButtonClick() {
            this.editModel = {
                type: 'add',
                // 初始化用户状态，通常这个值是后端初始化
                status: '1'
            };
            this.editDialogOpen = true;
        },

        handleButtonEvent($event, row, index) {
            this[$event.name](row, index, $event.type);
        },

        editDialog(row, index) {
            // eslint-disable-next-line no-console
            this.editModel = row;
            this.editModel.index = index;
            this.editDialogOpen = true;
        },

        ajaxSuccess() {
            this.editDialogOpen = false;
        }
    }
};
</script>
<style lang="less">
    .curd-example-demo {
        .ivu-poptip-rel {
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
        .ivu-poptip-body-content {
            overflow: visible;
        }
        &-header {
            margin-bottom: 10px;
            text-align: right;
        }
        &-table {
            .ivu-form-item {
                margin-bottom: 0
            }
        }
        .ivu-table, .ivu-table-wrapper, .ivu-table-cell {
            overflow: visible;
        }
    }
</style>
