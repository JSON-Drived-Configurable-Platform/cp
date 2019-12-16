<template>
    <div class="page-home">
        <app-header />
        <div class="page-home-container">
            <div class="page-home-container-content">
                <div class="page-home-container-content-title">Form Generator</div>
                <!-- <div class="page-home-container-content-slogon">同样的场景，我们只写一次</div> -->
                <div class="page-home-container-content-desc">
                    <p>
                        <!-- JSON Drived Configurable Form Generator based on iView -->
                        基于iView的JSON驱动的可配置表单生成工具
                    </p>
                </div>
                <div class="page-home-container-content-actions">
                    <Button type="primary" size="large" shape="circle">
                        <router-link :style="{color: '#f8f8f8'}" to="/doc">快速开始</router-link>
                    </Button>
                    <Button type="primary" size="large" shape="circle">
                        <router-link :style="{color: '#f8f8f8'}" to="/group-form">预览</router-link>
                    </Button>
                    <Button
                        to="https://github.com/JSON-Drived-Configurable-Platform/form-generator-iview"
                        icon="logo-github"
                        target="_blank"
                        size="large"
                        shape="circle"
                    >
                        GitHub
                    </Button>
                    <!-- <Button type="primary">模板</Button> -->
                </div>
            </div>
            <!-- <div class="page-home-carousel-content">For the same scenario, we only write it once.</div> -->
        </div>
    </div>
</template>
<script>
import appHeader from '../../components/main/components/header/appHeader';
export default {
    components: {
        appHeader
    }
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
    background: url('./assets/cool-background.svg') no-repeat;
    background-size: cover;
    font-family: Avenir,-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',sans-serif;

    .ivu-layout-header {
        background: none;
    }
    .ivu-menu-dark {
        background: none;
    }

    .layout-nav {
        a {
            color: #f8f8f8;
        }
        .ivu-menu-item {
            color: #f7dada;
        }
        .ivu-menu-submenu-title {
            color: #f8f8f8;
        }
        .ivu-select-dropdown {
            background-color: blue
        }

        .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item:hover {
            background-color: blue;
            a {
                color: rgb(65, 140, 255);
            }
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
                margin: 8px 0 58px;
                font-weight: 500;
                font-size: 68px;
            }

            &-desc {
                margin: 8px 0 58px;
                color: #314659;
                font-weight: 500;
                font-size: 20px;
                line-height: 40px;
            }

            &-actions {
                margin-top: 20px;

                .ivu-btn {
                    margin-right: 20px;
                    width: 100px;
                }
            }
        }
    }
}
</style>
