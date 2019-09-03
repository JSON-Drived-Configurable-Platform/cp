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
                    <FieldGenerator
                        v-for="(field, i) in column.formFields"
                        :key="i"
                        :field="field"
                        @on-button-event="handleButtonEvent($event, row, index)"
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
import {columns, data, editFormFields} from './config';
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
    methods: {
        handleCreateButtonClick() {
            this.editModel = {
                type: 'add',
                // 初始化用户状态，通常这个值是后端初始化
                status: '1'
            };
            this.editDialogOpeon = true;
        },

        handleButtonEvent($event, row, index) {
            this[$event.name](row, index);
        },

        edit(row, index) {
            // eslint-disable-next-line no-console
            this.editModel = row;
            this.editModel.index = index;
            this.editDialogOpeon = true;
        },

        delete(row, index) {
            // eslint-disable-next-line no-console
            this.data.splice(index, 1);
        },

        handleSave() {
            this.$refs.FormGenerator
                .submit().then(() => {
                    if (this.editModel.type === 'add') {
                        this.editModel.type = '';
                        this.data.unshift(this.editModel);
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

        black(row, index) {
            // eslint-disable-next-line no-console
            console.log(row, index);
        },

        white(row, index) {
            // eslint-disable-next-line no-console
            console.log(row, index);
        }
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
