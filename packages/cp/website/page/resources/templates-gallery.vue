<template>
    <i-article>
        <article>
            <h1>模板汇总</h1>
            <p>Modules汇总</p>
            <inAnchor
                title="表单开发-FormGeneratorIView"
                h2
            />
            <p>表单开发-FormGeneratorIView</p>

            <inAnchor
                title="可视化报表-FormGeneratorIView"
                h2
            />
            <p>可视化报表-FormGeneratorIView</p>
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
