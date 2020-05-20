<template>
    <i-article class="doc-powerful-f">
        <article>
            <h1>强大的fieldGenerator</h1>
            <p>在开发中，输入并不总是以一个完整的表单形式出现，在复杂场景下，输入控件会内嵌至表格中，形成更复杂的如表格行内编辑。</p>
            <div class="doc-powerful-f-templates">
                <Card
                    v-for="(template, index) in templates"
                    :key="index"
                    class="doc-powerful-f-templates-card"
                >
                    <router-link :to="template.path">
                        <div class="doc-powerful-f-templates-card-img">
                            <img :src="template.img" :alt="template.title">
                        </div>
                        <div class="doc-powerful-f-templates-card-content">
                            <h3>{{ template.title }}</h3>
                            <p>
                                {{ template.desc }}
                            </p>
                        </div>
                    </router-link>
                </Card>
            </div>
            <p>
                对于这样的场景，如何实现表单控件恰当地内置到表格中，在开发中通常是一个很头疼问题，但是这在我们的开发中却常常遇到。
                本文接下来讲向你展示，如何使用FormGenerator中内置的<strong>FieldGenerator</strong>组件，通过JSON配置及少量的模板代码，来实现上面的需求。
            </p>
            <p>本节的要点是：<strong>FieldGenerator的灵活性使得其可以和其他组件进行搭配来实现复杂场景下的表单输入。</strong></p>

            <inAnchor title="一、先创建一个表格【iView原生用法】" h2 />
            <Demo title="先创建一个表格" vertical>
                <div slot="demo">
                    <Table :columns="code.table.data.columns" :data="code.table.data.data">
                        <template slot="action" slot-scope="{ row, index }">
                            <Button type="primary" size="small" @click="handleDelete(index, row)">删除</Button>
                        </template>
                    </Table>
                </div>
                <div slot="desc">
                    <p>使用iView Table 组件，很容易实现一个带有删除等操作的表格。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.table.code }}</i-code>
            </Demo>
            <inAnchor title="二、然后表格中内置一个Input和一个Button【iView原生用法】" h2 />
            <Demo title="表格中内置一个Input和一个Button" vertical>
                <div slot="demo">
                    <Table :columns="code.input.data.columns" :data="code.input.data.data">
                        <template
                            slot="name"
                            slot-scope="{ row }"
                        >
                            <Form :model="row">
                                <FormItem>
                                    <Input v-model="row.name" placeholder="请输入姓名" />
                                </FormItem>
                            </Form>
                        </template>
                        <template slot="action" slot-scope="{ row, index }">
                            <Form :model="row">
                                <Button type="primary" size="small" @click="handleSave(index, row)">保存</Button>
                            </Form>
                        </template>
                    </Table>
                </div>
                <div slot="desc">
                    <p>在iView Table组件中，置入Input和Button，来实现编辑并保存的功能。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.input.code }}</i-code>
            </Demo>

            <inAnchor title="三、使用FieldGenerator来实现Input和Button【该Demo仅演示过程，不推荐项目中使用】" h2 />
            <Demo title="使用FieldGenerator来实现Input和Button" vertical>
                <div slot="demo">
                    <Table :columns="code.fieldGeneratorInputAndButton.data.columns" :data="code.fieldGeneratorInputAndButton.data.data">
                        <template slot="name" slot-scope="{ row }">
                            <Form :model="row">
                                <FieldGenerator
                                    :field="code.fieldGeneratorInputAndButton.data.inputField"
                                />
                            </Form>
                        </template>
                        <template slot="action" slot-scope="{ row, index }">
                            <Form :model="row">
                                <FieldGenerator
                                    :field="code.fieldGeneratorInputAndButton.data.buttonField"
                                    @on-button-event="handleButtonEvent($event, index, row)"
                                />
                            </Form>
                        </template>
                    </Table>
                </div>
                <div slot="desc">
                    <p>通过FieldGenerator组件来代替直接置入Input和Button，这个Demo仅用来展示代替的过程，下一个Demo将展示抽离Input和Button的配置。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.fieldGeneratorInputAndButton.code }}</i-code>
            </Demo>

            <inAnchor title="四、将Input和Button的配置进行抽离" h2 />
            <Demo title="将Input和Button的配置进行抽离" vertical>
                <div slot="demo">
                    <Table :columns="code.configInputAndButton.data.columns" :data="code.configInputAndButton.data.data">
                        <template
                            v-for="column in code.configInputAndButton.data.columns"
                            :slot="column.slot"
                            slot-scope="{ row, index }"
                        >
                            <Form
                                :key="column.slot"

                                :model="row"
                            >
                                <FieldGenerator
                                    :field="column.formField"
                                    @on-button-event="handleButtonEvent($event, index, row)"
                                />
                            </Form>
                        </template>
                    </Table>
                </div>
                <div slot="desc">
                    <p>将Input和Button的配置抽离到columns里面，通过循环slot来渲染。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.configInputAndButton.code }}</i-code>
            </Demo>

            <inAnchor title="五、配置更多的输入控件" h2 />
            <Demo title="配置更多的输入控件" vertical>
                <div slot="demo">
                    <Table :columns="code.configMore.data.columns" :data="code.configMore.data.data">
                        <template
                            v-for="column in code.configMore.data.columns"
                            :slot="column.slot"
                            slot-scope="{ row, index }"
                        >
                            <Form
                                :key="column.slot"

                                :model="row"
                            >
                                <FieldGenerator
                                    :field="column.formField"
                                    @on-button-event="handleButtonEvent($event, index, row)"
                                />
                            </Form>
                        </template>
                    </Table>
                </div>
                <div slot="desc">
                    <p>通过在表格中置入更多类型的输入控件。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.configMore.code }}</i-code>
            </Demo>

            <inAnchor title="六、表格中控件的展示和隐藏" h2 />
            <p>在需要时，我们可以为每个单元格配置多个控件。通过showOn和hiddenOn可以实现对单元格展示控件进行区别控制。</p>
            <Demo title="表格中控件的展示和隐藏" vertical>
                <div slot="demo">
                    <Table :columns="code.showOnHiddenOn.data.columns" :data="code.showOnHiddenOn.data.data">
                        <template
                            v-for="column in code.showOnHiddenOn.data.columns"
                            :slot="column.slot"
                            slot-scope="{ row, index }"
                        >
                            <Form
                                :key="column.slot"

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
                </div>
                <div slot="desc">
                    <p>性别为男时，地址可编辑；性别为女时，地址不可编辑；</p>
                </div>
                <i-code slot="code" lang="html">{{ code.showOnHiddenOn.code }}</i-code>
            </Demo>

            <inAnchor title="七、扩展场景-动态表单批量校验" h2 />
            <p>有时候，我们需要同时添加多项，然后批量校验和提交。</p>
            <Demo title="扩展场景-动态表单批量校验" vertical>
                <div slot="demo">
                    <div class="demo-header">
                        <Button type="primary" @click="handleDynamicFormAdd">添加</Button>
                    </div>
                    <Table :columns="code.dynamicForm.data.columns" :data="dynamicFormData">
                        <template
                            v-for="column in code.dynamicForm.data.columns"
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
                <div slot="desc">
                    <p type="primary">使用FieldGenerator处理动态添加子项，批量校验和提交也很简单。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.dynamicForm.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>

import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import Demo from '../../../components/demo';
import iCode from '../../../components/code';
import Code from '../../../code/development/powerful-fieldGenerator';
const templates = [
    {
        path: '/form-editable-table',
        img: require('./images/editable-table.jpeg'),
        title: '可编辑表格',
        desc: '表格展示使得数据清晰、明了，直接在表格中进行编辑，能够大大提高编辑效率。'
    }
];
export default {
    components: {
        iArticle,
        inAnchor,
        Demo,
        iCode
    },
    data() {
        return {
            templates,
            code: Code,
            dynamicFormData: JSON.parse(JSON.stringify(Code.dynamicForm.data.data))
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
.doc-powerful-f {
    &-templates {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 32px 0;

        &-card {
            margin-bottom: 32px;
            width: 766px;
            overflow: hidden;

            .ivu-card-body {
                padding: 0;
            }

            &-img {
                display: block;
                width: 764px;
                height: 160px;
                border-bottom: solid 1px #e4e4e4;
                border-radius: 10px;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }

            &-content {
                padding: 20px;

                h3 {
                font-size: 16px;
                color: rgba(0,0,0,0.85);
                line-height: 24px;
                }
                p {
                height: 44px;
                margin: 4px 0 0 0;
                font-size: 14px;
                color: rgba(0,0,0,0.45);
                line-height: 22px;
                overflow: hidden;
                }
            }
        }
    }

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
