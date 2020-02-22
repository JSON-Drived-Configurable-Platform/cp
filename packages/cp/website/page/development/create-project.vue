<template>
    <i-article>
        <article>
            <h1>创建项目</h1>
            <inAnchor
                title="使用vue-cli创建一个空项目"
                h2
            />
            <i-code>vue create cp-demo</i-code>
            <p>创建项目的时候的配置项可以如下设置：</p>
            <div class="api">
                <table>
                    <thead>
                        <tr>
                            <th>选项</th>
                            <th>选择</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>preset</td>
                            <td>Manually select features</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>features</td>
                            <td>Babel、CSS Pre-processors、Linter / Formatter</td>
                            <td>必须选择Babel</td>
                        </tr>
                        <tr>
                            <td>CSS pre-processor</td>
                            <td>Less</td>
                            <td>必须选择Less、模板都基于Less开发。</td>
                        </tr>
                        <tr>
                            <td>linter / formatter</td>
                            <td>ESLint with error prevention only</td>
                            <td>可自主选择</td>
                        </tr>
                        <tr>
                            <td>additional lint features</td>
                            <td>Lint on save</td>
                            <td>可自主选择</td>
                        </tr>
                        <tr>
                            <td>config for Babel</td>
                            <td>In dedicated config files</td>
                            <td>可自主选择</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>安装完成后，我们将得到一个初始化的项目。</p>
            <alert>
                <code>CP</code>依赖<code><a href="https://cli.vuejs.org/">vue-cli</a></code>，需要在全局安装<code>vue-cli</code>，详见<a href="https://cli.vuejs.org/guide/installation.html">Vue CLI Installation</a>
            </alert>

            <inAnchor
                title="安装vue-cli-plugin-cp"
                h2
            />
            <p>到项目的目录中执行:</p>
            <i-code>vue add cp</i-code>
            <alert>如果需要使用百度编码规范，请安装vue add cp-baidu</alert>
            <alert>绿色的为新增文件或者文件夹，黄色的表示有变更，可以通过编辑器查看详细的变更。</alert>
            <p>安装完毕后，执行：</p>
            <i-code>yarn serve</i-code>
            <p>
                路由到<strong>/home</strong>页面，可以看到打开的页面上展示了很多模板。
                现在我们已经创建完了一个CP项目，在后续的项目开发中，你可以根据自己的需要选择模板添加。
            </p>

        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
import iCode from '../../components/code';
export default {
    components: {
        iArticle,
        inAnchor,
        iCode
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
