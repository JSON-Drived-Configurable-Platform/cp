<template>
    <i-article>
        <article>
            <h1>CheckboxCard 选择框卡片</h1>
            <inAnchor title="概述" h2 />
            <p>基本组件-选择框卡片。主要用于可选的卡片-支持图片和视频显示</p>
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
                            <td>options</td>
                            <td>选项列表,如
                                <pre>
[
    {
        header: '',
        type: '',
        url: '',
        footer: '',
        showCheckBox: true,
        disabled: false
    }
]
                                </pre>

                            </td>
                            <td>Array(option) | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>optionsType</td>
                            <td>内容类型(图片:image,视频:video)</td>
                            <td>String</td>
                            <td>image</td>
                        </tr>
                        <tr>
                            <td>api</td>
                            <td>获取选项的接口</td>
                            <td>String</td>
                            <td>''，api的返回值格式为:
                                <pre>
{
    status: 0,
    data: [
        {
            "id": "",
            "url": "",
            "footer": "",
            "header": ""
        }
    ]
}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>checkAll</td>
                            <td>是否展示全选</td>
                            <td>Boolean	</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>showCheckBox</td>
                            <td>是否展示卡片checkbox</td>
                            <td>Boolean</td>
                            <td>true</td>
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
                        <tr>
                            <td>pageLation</td>
                            <td>是否分页</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>pageSize</td>
                            <td>每页条数</td>
                            <td>Number</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>headerEditable</td>
                            <td>头部文案是否可编辑</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>footerEditable</td>
                            <td>尾部文案是否可编辑</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>videoControl</td>
                            <td>视频源是否展示播放控件</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>openCarousel</td>
                            <td>开启走马灯。true：开启，需要配置options.urls</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>carouselOptions</td>
                            <td>走马灯配置信息，如
                                <pre>
{
    value: 0,
    loop: false,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: inside,
    radiusDot: false,
    trigger: click,
    arrow: hover,
    easing: ease
}
                                </pre>
                            </td>
                            <td>Object</td>
                            <td>-</td>
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
                            <td>options.url</td>
                            <td>内容地址（默认，不启用走马灯）</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>options.header</td>
                            <td>头部信息</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>options.footer</td>
                            <td>尾部信息</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>options.disabled</td>
                            <td>是否禁用该选项</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>options.urls</td>
                            <td>走马灯数据（启用走马灯）</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>carouselOptions.value</td>
                            <td>幻灯片的索引，从 0 开始</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>carouselOptions.loop</td>
                            <td>是否开启循环</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>carouselOptions.autoplay</td>
                            <td>是否自动切换</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>carouselOptions.autoplaySpeed</td>
                            <td>自动切换的时间间隔，单位为毫秒</td>
                            <td>Number</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td>carouselOptions.dots</td>
                            <td>指示器的位置，可选值为 inside （内部），outside（外部），none（不显示）</td>
                            <td>String</td>
                            <td>inside</td>
                        </tr>
                        <tr>
                            <td>carouselOptions.radiusDot</td>
                            <td>是否显示圆形指示器</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>carouselOptions.trigger</td>
                            <td>指示器的触发方式，可选值为 click（点击），hover（悬停）</td>
                            <td>String</td>
                            <td>click</td>
                        </tr>
                        <tr>
                            <td>carouselOptions.arrow</td>
                            <td>切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）</td>
                            <td>String</td>
                            <td>hover</td>
                        </tr>
                        <tr>
                            <td>carouselOptions.easing</td>
                            <td>动画效果</td>
                            <td>String</td>
                            <td>ease</td>
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
                            <td>on-checkboxCard-click</td>
                            <td>点击卡片时触发</td>
                            <td>当前options</td>
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
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个checkboxCard。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="全选" vertical>
                <div slot="demo">
                    <Form :model="code.checkAll.data.model">
                        <FieldGenerator
                            :field="code.checkAll.data.field"
                            @on-checkboxCard-click="handleClick"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.checkAll</code>可以控制是否展示全选。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.checkAll.code }}</i-code>
            </Demo>
            <Demo title="分页" vertical>
                <div slot="demo">
                    <Form :model="code.page.data.model">
                        <FieldGenerator
                            :field="code.page.data.field"
                            @on-checkboxCard-click="handleClick"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.pageLation</code>可以控制是否本地分页。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.page.code }}</i-code>
            </Demo>
            <Demo title="api" vertical>
                <div slot="demo">
                    <Form :model="code.api.data.model">
                        <FieldGenerator
                            :field="code.api.data.field"
                            @on-checkboxCard-click="handleClick"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.options</code>可以是接口地址</p>
                </div>
                <i-code slot="code" lang="html">{{ code.api.code }}</i-code>
            </Demo>
            <Demo title="走马灯" vertical>
                <div slot="demo">
                    <Form :model="code.carousel.data.model">
                        <FieldGenerator
                            :field="code.carousel.data.field"
                            @on-checkboxCard-click="handleClick"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.openCarousel</code>可以开启走马灯</p>
                </div>
                <i-code slot="code" lang="html">{{ code.carousel.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/checkboxCard';
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
    computed: {
        pageModel() {
            return this.code.page.data.model;
        }
    },
    watch: {
        pageModel: {
            handler() {
                // console.log(this.pageModel);
            },
            deep: true
        }
    },
    methods: {
        handleClick() {
            // eslint-disable-next-line no-console
            // console.log();
        }
    }
};
</script>
