<template>
    <i-article>
        <article>
            <h1>Divider</h1>
            <inAnchor title="概述" h2 />
            <p>分割线</p>
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
                            <td>水平还是垂直类型，可选值为 horizontal 或 vertical</td>
                            <td>String</td>
                            <td>horizontal</td>
                        </tr>
                        <tr>
                            <td>orientation</td>
                            <td>分割线标题的位置，可选值为 left、right 或 center</td>
                            <td>String</td>
                            <td>center</td>
                        </tr>
                        <tr>
                            <td>dashed</td>
                            <td>是否虚线</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>尺寸，可选值为 small 或 default</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
// import iCode from '../../../components/code';
// import Demo from '../../../components/demo';
import Code from '../../../code/doc/tag';

export default {
    components: {
        iArticle,
        inAnchor,
        // iCode,
        // Demo
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
