<template>
    <i-article>
        <article>
            <h1>JSON驱动</h1>
            <p>本文主要演示了<code><strong>CP</strong></code>如果通过JSON配置来生成组件、模块和页面。</p>
            <inAnchor
                title="组件的JSON生成"
                h2
            />
            <Demo title="输入框" vertical>
                <div slot="demo">
                    <Form :model="code.formControl.data.model">
                        <FieldGenerator
                            :field="code.formControl.data.field"
                            :form-model="code.formControl.data.model"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>
                        使用表单工具
                        <a href="https://github.com/JSON-Drived-Configurable-Platform/form-generator-iview">FormGenerator</a>
                        可以来生成一个组件。
                    </p>
                </div>
                <i-code slot="code" lang="html">{{ code.formControl.code }}</i-code>
            </Demo>

            <inAnchor
                title="模块的JSON生成"
                h2
            />
            <Demo title="完整的表单" vertical>
                <div slot="demo">
                    <FormGenerator
                        ref="form"
                        :fields="code.form.data.fields"
                        :model="code.form.data.model"
                        :options="code.form.data.options"
                        @on-submit="handleSubmit('form')"
                    />
                </div>
                <div slot="desc">
                    <p>
                        同样也可以生成一个完整的表单，还能支持表单验证的配置。
                    </p>
                </div>
                <i-code slot="code" lang="html">{{ code.form.code }}</i-code>
            </Demo>


            <inAnchor
                title="页面的JSON生成"
                h2
            />
            <Demo title="增删该查列表" vertical>
                <div slot="demo">
                    <div class="curd-example-demo">
                        <h3 class="curd-example-demo-header">
                            <Button type="primary" @click="handleCreateButtonClick">创建用户</Button>
                        </h3>
                        <Table class="curd-example-demo-table" :columns="code.curd.data.columns" :data="code.curd.data.data">
                            <template
                                v-for="column in code.curd.data.columns"
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
                                :fields="code.curd.data.editFormFields"
                                :model="editModel"
                                @on-button-event="handleButtonEvent($event)"
                            />
                        </Modal>
                    </div>
                </div>
                <div slot="desc">
                    <p>我们将表单工具结合表格组件，可以通过JSON来生成一个复杂的页面。剩下的模板变成非常简洁，因为变化的数据和表单的控件都通过JSON配置得到了分离。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.curd.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
import Demo from '../../components/Demo';
import iCode from '../../components/code';
import Code from '../../code/json-drived';
export default {
    components: {
        iArticle,
        inAnchor,
        Demo,
        iCode
    },
    data() {
        return {
            code: Code,
            editModel: {},
            editDialogOpen: false
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
.img-list {
    margin: 20px auto;
    ul {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        li {
            margin: 0 50px;
            text-align: center;
            img {
                margin: 0 auto;
                display: block;
                width: 100%;
            }
            span {
                display: inline-block;
                line-height: 30px;
                font-size: 12px;
            }
        }
    }
}

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

    .ivu-table-wrapper,
    .ivu-table,
    .ivu-table-cell {
        overflow: visible;
    }
}
</style>>
