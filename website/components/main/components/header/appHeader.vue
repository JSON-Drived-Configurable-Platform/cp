<template>
    <Header>
        <Menu
            mode="horizontal"
            theme="dark"
            active-name="1"
        >
            <div class="layout-logo">
                <div class="layout-logo-img" />
                <router-link to="/home">{{ title }}</router-link>
            </div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <router-link to="/intro">简介</router-link>
                </MenuItem>
                <MenuItem name="1">
                    <router-link to="/practice">思考与实践</router-link>
                </MenuItem>
                <MenuItem name="2">
                    <router-link to="/doc">组件配置文档</router-link>
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        生态
                    </template>
                    <MenuItem name="3-1">
                        <a target="_blank" href="https://json-drived-configurable-platform.github.io/cp">Configurable Plaform</a>
                    </MenuItem>
                    <MenuItem name="3-2">
                        <a target="_blank" href="https://json-drived-configurable-platform.github.io/data-vis-iview">Data Vis IView</a>
                    </MenuItem>
                </Submenu>
                <MenuItem name="GitHub">
                    <a target="_blank" href="https://github.com/JSON-Drived-Configurable-Platform/form-generator-iview">
                        <Icon type="logo-github" />
                        GitHub
                    </a>
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {};
    }
};
</script>
<style lang="less" scoped>
.layout-logo{
    height: 64px;
    border-radius: 3px;
    float: left;
    line-height: 24px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &-img {
        display: inline-block;
        width: 60px;
        height: 35px;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url("./logo.png");
    }
}

.layout-nav{
    float: right;
    margin: 0 40px;
}
</style>
