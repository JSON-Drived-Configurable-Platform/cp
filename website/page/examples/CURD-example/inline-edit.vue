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
                    <!-- 气泡框 -->
                    <Poptip
                        v-if="column.poptip"
                        :key="column.slot"
                        placement="left-start"
                    >
                        <!-- 单元格内展示的控件 -->
                        <template v-if="column.poptip.displayField">
                            <FieldGenerator
                                :params-container="paramsContainer"
                                :field="column.poptip.displayField"
                                @on-button-event="handleButtonEvent($event, row, index)"
                                @on-submit="handleSubmit"
                            />
                        </template>
                        <!-- 单元格内展示的值 -->
                        <template v-else>
                            <span>{{ row[column.slot] }}</span>
                        </template>

                        <!-- 编辑图标 -->
                        <Icon type="ios-create-outline" size="20" />
                        <!-- poptip 内容 -->
                        <div slot="content">
                            <FieldGenerator
                                v-for="(field, i) in column.poptip.formFields"
                                :key="i"
                                :params-container="paramsContainer"
                                :field="field"
                                @on-button-event="handleButtonEvent($event, row, index)"
                                @on-submit="handleSubmit"
                            />
                        </div>
                    </Poptip>

                    <div v-if="column.formFields">
                        <FieldGenerator
                            v-for="(field, i) in column.formFields"
                            :key="i"
                            :field="field"
                            @on-submit="handleSubmit"
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

        handleSubmit({valid, model, field, res}) {
            if (valid && +res.status === 0) {
                this.$Message.success(`${field.action.desc}成功<br/>${JSON.stringify(model)}`);
                return;
            }
            this.$Message.success(`${field.action.desc}失败!`);
        },

        handleSave() {
            this.$refs.FormGenerator
                .submit().then(() => {
                    if (this.editModel.type === 'add') {
                        this.editModel.type = '';
                        this.data.unshift(this.editModel);
                        this.editDialogOpeon = false;
                        return;
                    }
                    this.data.splice(this.editModel.index, 1, this.editModel);
                    this.editModel.index = -1;
                    this.editDialogOpeon = false;
                }).catch(err => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                });
        },

        editDialog(row, index) {
            // eslint-disable-next-line no-console
            this.editModel = row;
            this.editModel.index = index;
            this.editDialogOpen = true;
        },
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
