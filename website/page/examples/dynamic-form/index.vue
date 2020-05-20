<template>
    <div class="dynamic-form-example">
        <div class="demo-header">
            <Button type="primary" @click="handleDynamicFormAdd">添加</Button>
        </div>
        <Table :columns="columns" :data="dynamicFormData">
            <template
                v-for="column in columns"
                :slot="column.slot"
                slot-scope="{ row, index }"
            >
                <Form
                    :key="column.slot"
                    ref="dynamicForm"
                    :model="row"
                >
                    <FieldGenerator
                        v-for="field in column.formFields"
                        :key="field.name"
                        :field="field"
                        @on-button-event="handleButtonEvent($event, index, row)"
                    />
                </Form>
            </template>
        </Table>
        <div class="demo-actions">
            <Button type="primary" @click="handleDynamicFormSubmit">提交</Button>
        </div>
    </div>
</template>
<script>
import {columns, data} from './config';
export default {
    data() {
        return {
            dynamicFormData: data,
            columns
        };
    },
    methods: {
        handleDelete(index) {
            this.$Message.info(JSON.stringify({
                index
            }));
        },

        handleSave(index, data) {
            this.$Message.info(JSON.stringify({
                index,
                data
            }));
        },

        handleButtonEvent({name}, index, data) {
            // eslint-disable-next-line no-console
            switch (name) {
                case 'save':
                    this.$Message.info(JSON.stringify({
                        index,
                        data
                    }));
                    break;
                case 'delete':
                    this.handleDynamicFormDel(index);
                    break;
            }

        },

        handleDynamicFormAdd() {
            const data = this.getDynamicFormData();
            data.push({});
            this.dynamicFormData = data;
        },

        handleDynamicFormDel(index) {
            this.dynamicFormData.splice(index, 1);
        },

        handleDynamicFormSubmit() {

            this.$Message.info(JSON.stringify({
                data: this.getDynamicFormData()
            }));
        },

        getDynamicFormData() {
            const data = [];
            this.$refs.dynamicForm.forEach(form => {
                data[form.model._index] = form.model;
            });
            return data;
        }
    }
};
</script>

<style lang="less">
.dynamic-form-example {
    .ivu-form-item {
        margin-top: 20px;
    }
    .ivu-table, .ivu-table-wrapper, .ivu-table-cell {
        overflow: visible;
    }
    .demo-header{
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .demo-actions{
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

</style>
