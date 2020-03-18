<template>
    <i-article class="doc-code-conventions">
        <article>
            <h1>代码约定</h1>
            <p>本文介绍<code><strong>CP</strong></code>的<code><strong>一些代码约定</strong></code>。主要包含：</p>
            <inAnchor
                title="CSS代码约定"
                h2
            />
            <p>
                CSS的编写建议使用BEM规范，不建议使用scoped方案。主要原因是：
                <ul>
                    <li>(1)、由于CP中的模板都依赖IView，FormGenerator，DataVis这样的基础组件及模块，常常需要对这些模块的CSS进行覆盖， 使用scoped会需要额外处理；</li>
                    <li>(2)、BEM方案本身的优越性；</li>
                </ul>
            </p>
            <Demo title="输入框" vertical>
                <div slot="demo">
                    <div class="layout-default-demo-header">
                        <Header>
                            <Menu mode="horizontal" theme="dark" active-name="1">
                                <div class="layout-default-demo-header-logo">LOGO</div>
                                <div class="layout-default-demo-header-nav">
                                    <Submenu name="3">
                                        <template slot="title">
                                            生态
                                        </template>
                                        <MenuItem name="3-1">
                                            Configurable Plaform
                                        </MenuItem>
                                        <MenuItem name="3-2">
                                            form-generator-iview
                                        </MenuItem>
                                        <MenuItem name="3-2">
                                            data-vis-iview
                                        </MenuItem>
                                    </Submenu>
                                </div>
                            </Menu>
                        </Header>
                    </div>
                </div>
                <div slot="desc">
                    <p>
                        使用BEM方案，基于IView的Header和Menu组件实现的网站导航栏。
                    </p>
                </div>
                <i-code slot="code" lang="html">{{ code.css.code }}</i-code>
            </Demo>
            <p>
                下面的代码是采用scoped之后的，编译产出的代码。我们在CSS和HTML中都发现了类似<strong><code>data-v-5d2efd6e</code></strong>这样的标记。
                <br>
                但是我们发现HTML的<strong>ivu-menu-submenu-title</strong>元素并没有类似的标记，而CSS文件中却有<strong>.ivu-menu-submenu-title[data-v-5d2efd6e]</strong>
                <br>
                scoped在编译时对当前文件的template增加标记，但是无法处理不是直接在当前文件中声明的元素。比如ivu-menu-submenu-title，就是menu组件内部的元素，所以编译时无法添加上标记。
                <br>
                从而导致<code>color: red;</code>未生效。

                对于这个问题，当然也有解决方案，可以参考
                <a href="https://vue-loader-v14.vuejs.org/zh-cn/features/scoped-css.html#">vue-loader:有作用域的 CSS</a>

                <Alert>由于这个原因，我们不建议在CP方案中使用scoped方式。</Alert>
            </p>
            <div class="doc-code-conventions-codes">
                <div class="doc-code-conventions-codes-item">
                    <i-code slot="code" lang="css">{{ code.cssScoped.code }}</i-code>
                </div>
                <div class="doc-code-conventions-codes-item">
                    <i-code slot="code" lang="html">{{ code.templateScoped.code }}</i-code>
                </div>
            </div>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
import Demo from '../../components/Demo';
import iCode from '../../components/code';
import Code from '../../code/code-conventions';
export default {
    components: {
        iArticle,
        inAnchor,
        Demo,
        iCode
    },
    data() {
        return {
            code: Code
        };
    }
};
</script>

<style lang="less">
.doc-code-conventions {
    .layout-default-demo-header {
        &-logo {
            width: 70px;
            height: 30px;
            border-radius: 3px;
            float: left;
            position: relative;
            top: 6px;
            left: 20px;
            line-height: 30px;
            text-align: center;
            color: #fff;
            background-repeat: no-repeat;
            background-size: contain;
            background-color: #e4e4e4;
        }
        &-nav {
            float: right;
            margin: 0 40px;
        }
        .ivu-layout-header {
            background: #000;
            padding: 0 !important;
            height: 41px;
            line-height: 41px;
        }
        .ivu-menu-dark {
            background: #000;
        }

        .ivu-menu-submenu-title {
            color: red;
        }

        .ivu-menu-horizontal {
            height: 41px;
            line-height: 41px;
        }
    }

    &-codes {
        display: table;
        width: 100%;
        &-item {
            display: table-cell;
            background: #f8f8f8;
        }

        &-item:first-child {
            border-right: dashed 1px #e4e4e4;
        }
    }

}
</style>>
