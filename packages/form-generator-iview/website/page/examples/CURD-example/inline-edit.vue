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
                <Form :key="column.slot" :model="row">
                    <Poptip
                        v-if="column.poptip"
                        :key="column.slot"
                        placement="left-start"
                    >
                        <span>{{ row[column.slot] }}</span>
                        <Icon type="ios-create-outline" size="20" />
                        <div slot="content">
                            <FieldGenerator
                                v-for="(field, i) in column.poptip.formFields"
                                :key="i"
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
            v-model="editDialogOpeon"
            title="编辑"
            footer-hide
        >
            <FormGenerator
                ref="FormGenerator"
                :fields="editFormFields"
                :model="editModel"
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
            this[$event.name](row, index, $event.type);
        },

        editDialog(row, index) {
            // eslint-disable-next-line no-console
            this.editModel = row;
            this.editModel.index = index;
            this.editDialogOpeon = true;
        },

        ajaxSuccess() {
            this.editDialogOpeon = false;
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
