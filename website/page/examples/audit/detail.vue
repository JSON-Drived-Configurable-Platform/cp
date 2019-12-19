<template>
    <div class="audit-detail-example-demo">
        <div
            v-for="config in pageConfig"
            :key="config.title"
            class="audit-detail-example-demo-section"
        >
            <h3 class="audit-detail-example-demo-header">
                {{ config.title }}
            </h3>
            <Table
                class="audit-detail-example-demo-table"
                :columns="config.table.columns"
                :data="config.table.data"
                :show-header="false"
            >
                <template
                    v-for="column in config.table.columns"
                    :slot="column.slot"
                    :ref="column.slot"
                    slot-scope="{ row, index }"
                >
                    <Form
                        v-if="column.formFields"
                        :key="column.slot"
                        :ref="column.slot + row.key"
                        :model="row"
                    >
                        <!-- column.slot + row.key. eg: 'imgList' + 'action' or 'action' + 'name' -->
                        <FieldGenerator
                            v-for="(field, i) in column.formFields"
                            :key="i"
                            :field="field"
                            @on-field-change="handleFieldChange($event, row, column.slot + row.key)"
                            @on-button-event="handleButtonEvent($event, row, index)"
                            @on-list-item-click="handleListItemClick"
                        />
                    </Form>
                </template>
            </Table>
        </div>
        <div class="audit-detail-example-footer-actions">
            <Button type="primary" @click="handleSave">提交保存</Button>
        </div>
        <Modal v-model="modalOpen" :width="800">
            <img
                class="audit-detail-example-demo-modal-img"
                :src="modalImgUrl"
                alt=""
            >
        </Modal>
    </div>
</template>
<script>
/* eslint-disable no-console */
import {pageConfig} from './detail.config';
export default {
    data() {
        return {
            pageConfig,
            formModel: {},
            modalOpen: false,
            modalImgUrl: ''
        };
    },
    methods: {
        handleButtonEvent($event, row, index) {
            this[$event.name](row, index);
        },

        /**
         * When the field value changed, sync the value to this.formModel
         * Notice there may be more than form in the per line in the table.
         *
         * @param ($event, row, refKey)
         * @param {String} $event.model the changed field's model, eg: auditStatus
         * @param {String} $event.value the change field's value, eg: 1 (one value of auditStatus's options)
         * @param {String} row.key the changed field' identifier, eg: name
         * @param {String} refKey the ref of the changed field's form, eg: actionname.
         */
        handleFieldChange({model, value}, {key}, refKey) {
            // eslint-disable-next-line no-console
            this.$refs[refKey][0].validate();
            if (!this.formModel[key]) {
                this.$set(this.formModel, key, {});
            }
            this.$set(this.formModel[key], model, value);
        },

        handleSave() {
            let validCount = 0;
            const refKeys = Object.keys(this.$refs);
            refKeys.forEach(form => {
                console.log(form, this.$refs[form][0].model);
                this.$refs[form][0].validate().then(valid => {
                    if (valid) {
                        validCount++;
                    }
                    else {
                        console.log('Valid Failed');
                    }
                    // All validate success
                    if (validCount === refKeys.length) {
                        console.log('All Valid!');
                        console.log('formModel', this.formModel);
                    }
                    else {
                        console.log('Valid Failed');
                    }
                }).catch(err => {
                    console.log(err);
                });
            });
        },

        handleImgClick(imgUrl) {
            this.modalOpen = true;
            this.modalImgUrl = imgUrl;
        },

        handleListItemClick({ url }) {
            this.modalOpen = true;
            this.modalImgUrl = url;
        }
    }
};
</script>
<style lang="less">
    .audit-detail-example-demo {
        &-table {
            &-td-img {
                width: 100%;
            }
        }
        &-modal-img {
            width: 100%;
        }
        &-section {
            margin: 30px auto;
        }
        &-header {
            margin-bottom: 10px;
            font-size: 16px;
        }
        .ivu-form-item {
            margin-top: 20px
        }
        .ivu-table, .ivu-table-wrapper, .ivu-table-cell {
            overflow: visible;
        }
    }
</style>
