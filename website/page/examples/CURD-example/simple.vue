<template>
    <div class="curd-example-demo">
        <h3 class="curd-example-demo-header">
            <Button type="primary" @click="handleCreateButtonClick">创建用户</Button>
        </h3>
        <Table class="curd-example-demo-table" :columns="columns" :data="data">
            <template
                v-for="column in columns"
                :slot="column.slot"
                slot-scope="{ row, index }"
            >
                <Form
                    :key="column.slot"
                    :model="row"
                >
                    <Poptip v-if="!!column.poptip" placement="right-start">
                        <span>{{ row[column.slot] }}</span>
                        <Icon type="md-create" />
                        <div slot="title"><i>{{ column.poptip.title }}</i></div>
                        <div slot="content">
                            <FieldGenerator
                                v-for="(field, i) in column.poptip.formFields"
                                :key="i"
                                :api-base="apiBase"
                                :field="field"
                                @on-button-event="handleButtonEvent($event, row, index)"
                                @on-submit="handleSubmit"
                            />
                        </div>
                    </Poptip>
                    <FieldGenerator
                        v-for="(field, i) in column.formFields"
                        v-else
                        :key="i"
                        :field="field"
                        @on-button-event="handleButtonEvent($event, row, index)"
                        @on-submit="handleSubmit"
                    />
                </Form>
            </template>
        </Table>
        <Modal
            v-model="editDialogOpeon"
            title="编辑"
            footer-hide
        >
            <FormGenerator
                ref="FormGenerator"
                :fields="editFormFields"
                :model="editModel"
                @on-submit="handleSave"
            />
        </Modal>
    </div>
</template>
<script>
import {columns, data, editFormFields} from './simple.config';
export default {
    data() {
        return {
            columns,
            data,
            editModel: {},
            editFormFields,
            editDialogOpeon: false
        };
    },
    computed: {
        apiBase() {
            return `http://${window.location.hostname}:${window.location.port}`;
        }
    },
    methods: {
        handleCreateButtonClick() {
            this.editModel = {
                type: 'add',
                // 初始化用户状态，通常这个值是后端初始化
                status: '1'
            };
            this.editDialogOpeon = true;
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

        handleButtonEvent($event, row, index) {
            this[$event.name](row, index);
        },

        // button-event: edit
        edit(row, index) {
            // eslint-disable-next-line no-console
            this.editModel = row;
            this.editModel.index = index;
            this.editDialogOpeon = true;
        },

        // button-event: delete
        delete(row, index) {
            this.$Message.success(`删除${index}:${JSON.stringify(row)}!`);
            this.data.splice(index, 1);
        },

        // button-event: black
        black(row, index) {
            this.$Message.success(`拉黑${index}:${JSON.stringify(row)}!`);
        },

        // button-event: white
        white(row, index) {
            this.$Message.success(`洗白${index}:${JSON.stringify(row)}!`);
        },
    }
};
</script>
<style lang="less">
    .curd-example-demo {
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
