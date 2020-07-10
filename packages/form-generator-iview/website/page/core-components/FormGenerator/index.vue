<template>
    <i-article>
        <article>
            <h1>FormGenerator</h1>
            <p>用来生成一个完整的表单，关于支持的组件类型可以参考<router-link to="/intro#SJGL">简介中的设计概览</router-link>。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
                <inAnchor title="核心配置" h3 />
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>model</td>
                            <td>表单数据对象</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>fields</td>
                            <td>表单项配置列表</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>表单配置项，用于控制表单的样式、布局等，详见后续<strong>option配置详解</strong></td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>requestInterceptor</td>
                            <td>表单请求的拦截器，下拉选择的列表等需要动态获取数据的组件中传入该属性后，将使用该属性声明的方法进行数据请求。</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>paramsContainer</td>
                            <td>表单控件中的请求（如Select的option动态获取，Button的Ajax请求等）的额外参数的传入，通常配合表单控件的 field.apiParams 一起使用。</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="option配置详解" h3 />
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>title</td>
                            <td>设置后，会展示表单标题</td>
                            <td>String</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>tip</td>
                            <td>设置后，会展示表单提示信息</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>tip.title</td>
                            <td>表单提示信息的标题</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>tip.content</td>
                            <td>表单提示信息的内容，可以为html。<strong>内部使用了v-html，注意XSS攻击风险</strong></td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>labelWidth</td>
                            <td>表单标签的宽度</td>
                            <td>Number</td>
                            <td>如果inline为true，则默认为80；否则默认为0。</td>
                        </tr>
                        <tr>
                            <td>labelPosition</td>
                            <td>标签的位置，可选<code>left</code>、<code>right</code>、<code>top</code></td>
                            <td>String</td>
                            <td>right</td>
                        </tr>
                        <tr>
                            <td>itemWidth</td>
                            <td>每个表单项的宽度</td>
                            <td>String，Number</td>
                            <td>如果inline为false，则默认为100%，否则由labelWidth和控件宽度决定</td>
                        </tr>
                        <tr>
                            <td>inline</td>
                            <td>是否为内联，如果为true则表单项会顺次平铺，否则会折行。</td>
                            <td>Boolean</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>apiBase</td>
                            <td>数据查询的基础地址。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>extraType</td>
                            <td>有默认不展示的项时，'更多'项的展示位置。可选<code>right</code>、<code>button</code></td>
                            <td>Number</td>
                            <td>right</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="事件" h3 />
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>on-field-change</td>
                            <td>表单项数据变更时</td>
                            <td>(model, value) model；表单项的标识；value：表单项的值；</td>
                        </tr>
                        <tr>
                            <td>on-submit</td>
                            <td>点击提交按钮时</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-reset</td>
                            <td>点击重置按钮时</td>
                            <td>-</td>
                        </tr>
                        <!-- <tr>
                            <td>on-button-event</td>
                            <td>点击按钮事件时</td>
                            <td><a href="/doc/Button">Button</a></td>
                        </tr> -->
                    </tbody>
                </table>
                <inAnchor title="方法" h3 />
                <table>
                    <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                            <th>参数</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>submit</td>
                            <td>提交表单</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>reset</td>
                            <td>重置表单</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>resetField</td>
                            <td>重置单个表单项</td>
                            <td>要重置的表单项的标识 String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>resetFields</td>
                            <td>要重置的表单项的标识，Array</td>
                            <td>重置多个表单项</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>validate</td>
                            <td>验证表单</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>validateField</td>
                            <td>验证单个表单项</td>
                            <td>要验证的表单项的标识 String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>validateField</td>
                            <td>验证多个表单项</td>
                            <td>要验证的表单项的标识 Array</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <inAnchor title="示例" h2 />
            <Demo title="简单示例">
                <div slot="demo">
                    <FormGenerator
                        ref="simple"
                        :fields="code.simple.data.fields"
                        :model="code.simple.data.model"
                        :options="code.simple.data.options"
                        @on-submit="handleSubmit('simple')"
                    />
                </div>
                <div slot="desc">
                    <p>FormGenerator组件依赖三个属性: <code>fields</code>, <code>model</code>, <code>options</code>。</p>
                    <p>通过设置<code>fields</code>, <code>model</code>, <code>options</code>即可生成一个表单UI。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="表单控件">
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
                    <!-- <p>FormGenerator组件依赖三个属性: <code>fields</code>, <code>model</code>, <code>options</code>。</p> -->
                    <!-- <p>通过设置<code>fields</code>, <code>model</code>, <code>options</code>即可生成一个表单UI。</p> -->
                </div>
                <i-code slot="code" lang="html">{{ code.form.code }}</i-code>
            </Demo>
            <Demo title="校验">
                <div slot="demo">
                    <FormGenerator
                        :fields="code.validate.data.fields"
                        :model="code.validate.data.model"
                        :options="code.validate.data.options"
                    />
                </div>
                <div slot="desc">
                    <!-- <p>validateGenerator组件依赖三个属性: <code>fields</code>, <code>model</code>, <code>options</code>。</p> -->
                    <!-- <p>通过设置<code>fields</code>, <code>model</code>, <code>options</code>即可生成一个表单UI。</p> -->
                </div>
                <i-code slot="code" lang="html">{{ code.validate.code }}</i-code>
            </Demo>
            <Demo title="分割线">
                <div slot="demo">
                    <FormGenerator
                        :fields="code.divider.data.fields"
                        :model="code.divider.data.model"
                        :options="code.divider.data.options"
                    />
                </div>
                <div slot="desc">
                    <!-- <p>dividerGenerator组件依赖三个属性: <code>fields</code>, <code>model</code>, <code>options</code>。</p> -->
                    <!-- <p>通过设置<code>fields</code>, <code>model</code>, <code>options</code>即可生成一个表单UI。</p> -->
                </div>
                <i-code slot="code" lang="html">{{ code.divider.code }}</i-code>
            </Demo>
            <Demo title="联动">
                <div slot="demo">
                    <FormGenerator
                        :fields="code.hiddenOn.data.fields"
                        :model="code.hiddenOn.data.model"
                        :options="code.hiddenOn.data.options"
                    />
                </div>
                <div slot="desc">
                    <!-- <p>validateGenerator组件依赖三个属性: <code>fields</code>, <code>model</code>, <code>options</code>。</p> -->
                    <!-- <p>通过设置<code>fields</code>, <code>model</code>, <code>options</code>即可生成一个表单UI。</p> -->
                </div>
                <i-code slot="code" lang="html">{{ code.hiddenOn.code }}</i-code>
            </Demo>
            <Demo title="label添加tip信息">
                <div slot="demo">
                    <FormGenerator
                        :fields="code.labelTip.data.fields"
                        :model="code.labelTip.data.model"
                        :options="code.labelTip.data.options"
                    />
                </div>
                <div slot="desc">
                    <!-- <p>validateGenerator组件依赖三个属性: <code>fields</code>, <code>model</code>, <code>options</code>。</p> -->
                    <!-- <p>通过设置<code>fields</code>, <code>model</code>, <code>options</code>即可生成一个表单UI。</p> -->
                </div>
                <i-code slot="code" lang="html">{{ code.labelTip.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/formGenerator';
export default {
    components: {
        iArticle,
        inAnchor,
        iCode,
        Demo
    },
    data() {
        return {
            code: Code
        };
    },
    methods: {
        handleSubmit(formName) {
            // eslint-disable-next-line no-console
            console.log(this.$refs[formName].model);
            this.$Message.success(JSON.stringify(this.$refs[formName].model));
        }
    }
};
</script>

<style lang="less">
.ivu-icon-ios-help-circle-outline, .ivu-icon-ios-alert-outline {
    position: absolute;
    top: 7px;
    left: -23px;
}
.wrap {
    width: 30px;
    height: 40px;
    pointer-events: none;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 2;
    img {
        width: 138px;
        height: 129px;
    }
}
.ruleWrap {
    width: 180px;
    padding: 5px;
    box-sizing: border-box;
    height: auto;
    line-height: 1;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    pointer-events: none;
    position: absolute;
    top: -35px;
    left: -104px;
    z-index: 2;
    word-wrap: break-word;
    border-radius: 4px;
    border: 1px solid #333;
    span {
        display: block;
        width: 0;
        height: 0;
        border-width: 5px 5px 0;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.7) transparent transparent;
        position: absolute;
        top: 34px;
        left: 50%;/* 三角形居中显示 */
        margin-left: -5px;/* 三角形居中显示 */
    }
}
</style>
