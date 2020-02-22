<template>
    <i-article>
        <article>
            <h1>目录结构</h1>
            <p>CP项目中的目录结构将主题(Layout)，模板代码(Template)都进行的比较好的归纳。具体目录结构和功能如下：</p>
            <i-code>
                |____src
                | |____main.js                          // 入口文件
                | |____App.vue                          // 模板主文件
                | |____page                             // 项目页面
                | | |____home
                | | | |____index.vue
                | | | |____service.js
                | | | |____index.js
                | | | |____router.js
                | |____config                           // 项目配置文件
                | | |____index.js
                | |____template                         // 模板目录
                | | |____curd
                | | | |____index.vue                    // 模板的Vue Template代码
                | | | |____mock                         // 模板的JSON配置文件
                | | | | |____curd
                | | | | | |____post
                | | | | | | |____page-config.json
                | | | | | | |____data.json
                | | | |____index.js
                | |____libs
                | |____components                       // 项目的公共组件目录
                | | |____layout                         // 主题模板(Layout)目录
                | | | |____default                      // 默认主题
                | | | | |____layout.less
                | | | | |____index.js
                | | | | |____components                 // 默认主题组件
                | | | | | |____slider
                | | | | | |____user
                | | | | | |____breadcrumb
                | | | | | |____header
                | | | | |____Layout.vue
                | |____service                          // 全局服务
                | |____store                            // 全局的store
                | |____router                           // 全局的路由配置
                |____.npmrc
                |____README.md
                |____public
                | |____favicon.ico
                | |____index.html
                |____babel.config.js
                |____.gitignore
                |____package.json
                |____vue.config.js
                |____.eslintrc.js
                |____.eslintignore
                |____.browserslistrc
                |____postcss.config.js
            </i-code>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
// import inAnchor from '../../components/anchor';
import iCode from '../../components/code';
import Code from '../../code/guide';
export default {
    components: {
        iArticle,
        // inAnchor,
        iCode
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
