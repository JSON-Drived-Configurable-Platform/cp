<template>
    <div class="page-home">
        <h3 class="page-home-header">
            <div class="page-home-header-logo" />
        </h3>
        <div class="page-home-container">
            <div class="page-home-container-content">
                <div class="page-home-container-content-title">Configurable Platform</div>
                <!-- <div class="page-home-container-content-slogon">同样的场景，我们只写一次</div> -->
                <div class="page-home-container-content-desc">
                    <p>
                        服务于企业级应用前端开发，基于vue-cli插件机制的模板复用方案。
                    </p>
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
    font-family: Avenir,-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',sans-serif;

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

            &-title {
                color: #314659;
                margin: 8px 0 28px;
                font-weight: 500;
                font-size: 68px;
            }

            &-desc {
                color: #314659;
                font-weight: 500;
                font-size: 20px;
                line-height: 40px;
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
