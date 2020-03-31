<template>
    <i-article class="doc-powerful-f">
        <article>
            <h1>强大的fieldGenerator</h1>
            <p>在开发中，输入并不总是以一个完整的表单形式出现，在复杂场景下。输入控件会内嵌至表格中，形成更复杂的如表格行内编辑、表格展开编辑场景。</p>
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
            对于这样的场景，如何实现表单控件输入，并保持代码的优雅，是一个很头疼问题。但是这在我们的开发中却常常遇到。
        </article>
    </i-article>
</template>

<script>

import iArticle from '../../../components/article';
const templates = [
    {
        path: '/form-inline-table',
        img: require('./images/inline.jpeg'),
        title: '表格行扩展编辑',
        desc: '表格的行可展开编辑'
    },
    {
        path: '/form-editable-table',
        img: require('./images/editable-table.jpeg'),
        title: '可编辑表格',
        desc: '直接在表格中进行编辑'
    }
];
export default {
    components: {
        iArticle,
    },
    data() {
        return {
            templates
        };
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
            width: 266px;
            overflow: hidden;

            .ivu-card-body {
                padding: 0;
            }

            &-img {
                display: block;
                width: 264px;
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
}

</style>
