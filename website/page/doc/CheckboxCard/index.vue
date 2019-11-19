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
                            <td>选项列表,如[{header: '',type: '',url: '',footer: '', showCheckBox: true, disabled: false}]</td>
                            <td>Array(option) | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>checkAll</td>
                            <td>是否展示全选</td>
                            <td>Boolean	</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>尺寸</td>
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
                            <td>options.type</td>
                            <td>内容类型(图片:image,视频:video)</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>options.url</td>
                            <td>内容地址</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>options.header</td>
                            <td>自定义头部信息，可以使用html</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>options.footer</td>
                            <td>自定义尾部信息，可以使用html</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>options.showCheckBox</td>
                            <td>是否展示checkbox</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>options.disabled</td>
                            <td>是否禁用该选项</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size.itemWidth</td>
                            <td>Card宽度('270px'/'20%')</td>
                            <td>String</td>
                            <td>270px</td>
                        </tr>
                        <tr>
                            <td>size.itemHeight</td>
                            <td>Card高度('270px'/'20%')</td>
                            <td>String</td>
                            <td>270px</td>
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
                            <td>on-click</td>
                            <td>点击卡片时触发</td>
                            <td>当前options</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </article>
        <Form :model="model">
            <FieldGenerator
                :field="field"
                @on-click="handleClick"
            />
        </Form>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
import Code from '../../../code/doc/checkbox';
export default {
    components: {
        iArticle,
        inAnchor,
        iCode,
        Demo
    },
    data() {
        return {
            code: Code,
            model: {"card":["11"]},
            field: {
                "type": "CheckboxCard",
                "model": "card",
                "checkAll": true,
                "size": {
                    "itemWidth": "270px",
                    "itemHeight": "270px"
                },
                "options": [
                    {
                        "type": "image",
                        "label": "11",
                        "url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",
                        "footer": "<p style='color:red'>文案：这是北京鸟巢</p>",
                        "header": "<p>上传者：阿甘</p>"
                    },
                    {
                        "type": "image",
                        "label": "22",
                        "url": "https://hao123-online-img.cdn.bcebos.com/materials/result.haokan.high.ctr.20191114/haokan.high.ctr/%E7%A4%BE%E4%BC%9A_%E6%B3%95%E5%88%B6_%E5%84%BF%E5%AD%90%E6%83%8A%E6%85%8C%E5%A4%B1%E6%8E%AA%E8%B7%91%E5%9B%9E%E9%99%A2%E5%AD%90%EF%BC%8C%E8%BA%AB%E4%B8%AD%E6%95%B0%E5%88%80%E5%80%92%E4%B8%8B%EF%BC%8C%E6%AF%8D%E4%BA%B2%E7%9B%AE%E7%9D%B9%E5%84%BF%E5%AD%90%E6%AD%BB%E5%9C%A8%E7%9C%BC%E5%89%8D/8280197377059154923-660-370_1.jpg",
                        "footer": "<p>文案：老太太</p>",
                        "header": "<p>上传者：阿W</p>"
                    },
                    {
                        "type": "image",
                        "label": "33",
                        "showCheckBox": true,
                        "disabled": false,
                        "url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",
                        "footer": "<p>文案：这是上海</p>",
                        "header": "<p>上传者：阿Q</p>"
                    }
                ]
            }
        };
    },
    watch: {
        model: {
            handler() {
                // console.log(this.model, 'model');
            },
            deep: true
        }
    },
    methods: {
        handleClick(value) {
            // eslint-disable-next-line no-console
            // console.log(value, 'handleClick');
        }
    }
};
</script>
<style lang="less" scoped>
</style>