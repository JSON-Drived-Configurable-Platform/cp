<template>
    <i-article>
        <article>
            <h1>Upload 上传</h1>
            <inAnchor title="概述" h2 />
            <p>文件选择上传和拖拽上传控件</p>
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
                            <td>type</td>
                            <td>上传组件的类型</td>
                            <td>String</td>
                            <td>Upload/ImgUpload/VideoUpload</td>
                        </tr>
                        <tr>
                            <td>model</td>
                            <td>索引名称（必填）</td>
                            <td>String</td>
                            <td>不为空</td>
                        </tr>
                        <tr>
                            <td>action</td>
                            <td>上传的地址，必填</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>subtype</td>
                            <td>上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）</td>
                            <td>String</td>
                            <td>select</td>
                        </tr>
                        <tr>
                            <td>maxSize</td>
                            <td>
                                文件大小限制，单位 kb
                            </td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>默认是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>headers</td>
                            <td>设置上传的请求头部</td>
                            <td>Object</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>paste</td>
                            <td>是否支持粘贴上传文件</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>data</td>
                            <td>上传时附带的额外参数</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>上传的文件字段名</td>
                            <td>String</td>
                            <td>file</td>
                        </tr>
                        <tr>
                            <td>withCredentials</td>
                            <td>支持发送 cookie 凭证信息</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>showUploadList</td>
                            <td>是否显示已上传文件列表</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>accept</td>
                            <td>凭证信息接受上传的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">文件类型</a></td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>tip</td>
                            <td>辅助提示内容，动画时长可能会引起占位的闪烁</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>suffix</td>
                            <td>去掉文件名后缀(上传成功后)</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>needDealUploadData</td>
                            <td>是否需要处理接口返回的数据</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>accessKey</td>
                            <td>需要单独获取的接口返回数据的key(需要处理后端数据时，必传)</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法">
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Upload。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="图片上传">
                <div slot="demo">
                    <Form :model="code.image.data.model">
                        <FieldGenerator
                            :field="code.image.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Upload。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.image.code }}</i-code>
            </Demo>
            <Demo title="视频上传">
                <div slot="demo">
                    <Form :model="code.video.data.model">
                        <FieldGenerator
                            :field="code.video.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Upload。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.video.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/upload';

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
        handleFieldChange(model, value) {
            // eslint-disable-next-line no-console
            console.log(model, value);
        }
    }
};
</script>
