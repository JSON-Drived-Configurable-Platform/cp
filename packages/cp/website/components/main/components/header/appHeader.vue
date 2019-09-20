<template>
    <Header>
        <Menu
            mode="horizontal"
            theme="dark"
            active-name="1"
        >
            <router-link to="/home">
                <div class="layout-logo" />
            </router-link>
            <div class="layout-nav">
                <MenuItem name="doc">
                    <router-link to="/doc">文档</router-link>
                </MenuItem>
                <MenuItem name="templates-gallery">
                    Templates Gallery
                </MenuItem>
                <Submenu name="Modules">
                    <template slot="title">
                        Modules
                    </template>
                    <MenuItem name="FormGeneratorIView">
                        <a target="_blank" href="https://github.com/BingBlog/form-generator-iview">
                            FormGeneratorIView
                        </a>
                    </MenuItem>
                    <MenuItem name="FormGeneratorIView">
                        <a target="_blank" href="https://github.com/BingBlog/data-vis-iview">
                            DataVisIView
                        </a>
                    </MenuItem>
                </Submenu>
                <MenuItem name="GitHub">
                    <a target="_blank" href="https://github.com/BingBlog/cp">
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
        appTitle: {
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
.layout-logo {
  width: 90px;
  height: 50px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 6px;
  left: 20px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("./logo.png");
}

.layout-nav{
    float: right;
    margin: 0 40px;
}
</style>
