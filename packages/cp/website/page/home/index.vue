<template>
    <div class="page-home">
        <h3 class="page-home-header">
            <div class="page-home-header-logo" />
        </h3>
        <div class="page-home-container">
            <div class="page-home-container-content">
                <div class="page-home-container-content-slogon">同样的场景，我们只写一次</div>
                <div class="page-home-container-content-advantages">
                    <ul>
                        <li><strong>开发环境基于<a href="https://cli.vuejs.org/">vue-cli</a>，组件库基于<a href="https://iviewui.com/">iview</a>。都是社区很成熟的项目</strong></li>
                        <li><strong>多种场景下的模板可供选择，即插即用。</strong></li>
                        <li><strong>提供了多种场景下的基础工具库，是你可以高效的开发自己的页面模板。</strong></li>
                    </ul>
                </div>
                <div class="page-home-container-content-actions">
                    <Button to="/doc/introduce" target="_blank" type="primary" size="large">文档</Button>
                    <Button to="/doc/start" target="_blank" type="primary" size="large">快速开始</Button>
                    <!-- <Button type="primary">模板</Button> -->
                </div>
            </div>
            <!-- <div class="page-home-carousel-content">For the same scenario, we only write it once.</div> -->
        </div>
    </div>
</template>
<script>
export default {

};
</script>
<style lang="less">
.page-home {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: url('./cool-background.svg') no-repeat;
    background-size: cover;
    &-header {
        &-logo {
            margin: 20px 0 0 60px;
            width: 140px;
            height: 140px;;
            background: url('./logo.png') no-repeat;
            background-size: cover;
        }
    }

    &-container {
        position: relative;
        height: 100%;
        &-content {
            position: absolute;
            top: 10%;
            left: 10%;

            &-slogon {
                height: 100px;
                font-size: 50px;
            }

            &-advantages {
                font-size: 18px;
                font-weight: 200;
                li {
                    line-height: 32px;
                }
            }

            &-actions {
                margin-top: 20px;

                .ivu-btn {
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>
