<template>
    <i-article>
        <article>
            <h1>List 列表</h1>
            <inAnchor title="概述" h2 />
            <p>基本组件-列表。主要用于列表数据的展示-支持图片和视频显示</p>
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
                            <td>绑定的值的名称</td>
                            <td>String</td>
                            <td>不可为空</td>
                        </tr>
                        <tr>
                            <td>optionsType</td>
                            <td>内容类型(图片:image,视频:video)</td>
                            <td>String</td>
                            <td>image</td>
                        </tr>
                        <tr>
                            <td>cardWidth</td>
                            <td>Card宽度</td>
                            <td>String</td>
                            <td>220px</td>
                        </tr>
                        <tr>
                            <td>cardHeight</td>
                            <td>Card高度</td>
                            <td>String</td>
                            <td>220px</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="选项配置" h3 />
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
                            <td>value.url</td>
                            <td>内容地址</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>value.header</td>
                            <td>头部信息</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>value.footer</td>
                            <td>尾部信息</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="事件" h3 />
                <table>
                    <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-list-item-click</td>
                            <td>点击列表项时触发</td>
                            <td>当前项</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法" vertical>
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.field"
                            @on-checkboxCard-click="handleClick"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个List。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/list';
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
        handleClick() {
            // eslint-disable-next-line no-console
            // console.log();
        }
    }
};
</script>
