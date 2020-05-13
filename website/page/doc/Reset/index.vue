<template>
    <i-article>
        <article>
            <h1>Reset</h1>
            <inAnchor title="概述" h2 />
            <p>表单重置</p>
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
                            <td>标签的类型，不可改</td>
                            <td>String</td>
                            <td>Reset</td>
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
