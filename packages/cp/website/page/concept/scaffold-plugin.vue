<template>
    <i-article>
        <article>
            <h1>Scaffold Plugin</h1>
            <p>本文介绍<code><strong>CP</strong></code>的主要代码库<code><strong>vue-cli-plugin-cp</strong></code>。主要包含：</p>
            <ul>
                <li>在模板复用中，<code>vue-cli-plugin-cp</code>要解决哪些问题。</li>
                <li>在模板复用中，<code>vue-cli-plugin-cp</code>如何解决这些问题。</li>
                <li><code>vue-cli-plugin-cp</code>的代码实现。</li>
            </ul>
            <inAnchor
                title="模板复用中有哪些技术问题"
                h2
            />
            <p>模板复用中有哪些技术问题</p>

            <inAnchor
                title="vue-cli-plugin-cp如何解决模板复用的问题"
                h2
            />
            <p>vue-cli-plugin-cp如何解决模板复用的问题</p>

            <inAnchor
                title="vue-cli-plugin-cp的代码实现"
                h2
            />
            <p>vue-cli-plugin-cp的代码实现</p>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
import Code from '../../code/guide';
export default {
    components: {
        iArticle,
        inAnchor
    },
    data() {
        return {
            code: Code
        };
    }
};
</script>

<style lang="less" scoped>
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
</style>>
