<template>
    <i-article>
        <article>
            <h1>模板复用</h1>
            <inAnchor
                title="重复开发太多"
                h2
            />
            <p>增删该查、权限管理、数据报表、信息监控、信息审核这些场景作为中台开发的常见需求，在无数个平台中被一遍又一遍的实现。</p>
            <p>比如在一个平台中，有多个增删该查的页面需求，他们仅仅是内部数据和表单编辑项不一样。在页面结构上都是由列表、分页、弹框表单等元素组成。而且大多有这下图这样的结构：</p>
            <ul class="form-template-example">
                <li>
                    <img src="./assets/form-template/modal.jpeg" alt="modal">
                    <span>modal</span>
                </li>
                <li>
                    <img src="./assets/form-template/multi-modal.jpeg" alt="multi-modal">
                    <span>multi-modal</span>
                </li>
                <li>
                    <img src="./assets/form-template/slideout.jpeg" alt="slideout">
                    <span>slideout</span>
                </li>
                <li>
                    <img src="./assets/form-template/inline.jpeg" alt="inline">
                    <span>inline</span>
                </li>
                <li>
                    <img src="./assets/form-template/editable-table.jpeg" alt="editable-table">
                    <span>editable-table</span>
                </li>
                <li>
                    <img src="./assets/form-template/takeover.jpeg" alt="takeover">
                    <span>takeover</span>
                </li>
                <li>
                    <img src="./assets/form-template/wizard.jpeg" alt="wizard">
                    <span>wizard</span>
                </li>
                <li>
                    <img src="./assets/form-template/sectioned.jpeg" alt="sectioned">
                    <span>sectioned</span>
                </li>
            </ul>

            <inAnchor
                title="模板复用的问题"
                h2
            />
            <p>多个增删改查的页面，具有相同的页面结构和基础组件。但因数据和业务的需要，仍然存在很大的差异。</p>
            <p>如何剥离变化的部分，如数据，表单的编辑项，将页面的基本结构沉淀下来，是解决模板复用的首要问题。</p>

            <inAnchor
                title="可配置模板"
                h2
            />
            <p class="img-list">
                <ul>
                    <li>
                        <img src="./assets/temlalte-desc.svg" alt="常规的增删改查页面布局">
                        <span>模板沉淀的过程</span>
                    </li>
                </ul>
            </p>

            <p>通过JSON配置将数据、页面中频繁变化的部分，如不同表单控件的形式进行剥离。剩下的模板代码就变的非常简洁。</p>
            <p>将特定场景下的JSON配置方式与剥离可变部分后剩下的模板代码进行沉淀，并提供配置说明，就可以用来解决同样场景下的不同需求。这就是一个可以解决特定场景需求的模板。</p>

            <inAnchor
                title="模板的分类"
                h2
            />
            <p>根据不同的功能，CP将模板分为主题模板(Layout Template)和页面模板(Page Template)。</p>
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
.form-template-example {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    li {
        margin: 20px;
        width: 200px;
        img {
            width: 100%;
        }
    }
}
</style>>
