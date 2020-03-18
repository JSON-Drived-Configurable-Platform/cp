// CSS
let css = {};

css.code = `
<template>
  <div class="layout-default-demo-header">
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-default-header-logo"></div>
        <div class="layout-default-header-nav">
      </Menu>
    </Header>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.layout-default-demo-header {
  &-logo {
    width: 70px;
    height: 30px;
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
  .ivu-menu-submenu-title {
    color: red;
  }
  .ivu-menu-dark {
    background: #000;
  }
  .ivu-menu-horizontal {
    height: 41px;
    line-height: 41px;
  }
}
</style>
`;


let cssScoped = {};
cssScoped.code = `

.layout-default-demo-header-logo[data-v-5d2efd6e] {
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
  .layout-default-demo-header-nav[data-v-5d2efd6e] {
    float: right;
    margin: 0 40px;
  }
  .layout-default-demo-header
    .ivu-layout-header[data-v-5d2efd6e] {
        background: #000;
        padding: 0 !important;
        height: 41px;
        line-height: 41px;
    }
  .layout-default-demo-header
    .ivu-menu-dark[data-v-5d2efd6e] {
        background: #000;
    }
  .layout-default-demo-header
    .ivu-menu-submenu-title[data-v-5d2efd6e] {
        color: red;
    }
  .layout-default-demo-header
    .ivu-menu-horizontal[data-v-5d2efd6e] {
        height: 41px;
        line-height: 41px;
    }
`;


let templateScoped = {};
templateScoped.code = `

<div data-v-5d2efd6e=""
     class="layout-default-demo-header"
>
    <div data-v-5d2efd6e=""
         class="ivu-layout-header"
    >
        <ul data-v-5d2efd6e=""
            class="ivu-menu ivu-menu-dark ivu-menu-horizontal"
        >
            <div data-v-5d2efd6e=""
                class="layout-default-demo-header-logo"
            >LOGO</div>
            <div data-v-5d2efd6e=""
                class="layout-default-demo-header-nav"
            >
                <li data-v-5d2efd6e=""
                    class="ivu-menu-submenu"
                >
                    <div class="ivu-menu-submenu-title">
                        生态
                        <i class="ivu-icon
                            ivu-icon-ios-arrow-down
                            ivu-menu-submenu-title-icon"
                        ></i>
                    </div>
                    <div class="ivu-select-dropdown"
                        style="display: none;"
                    >
                        <ul class="ivu-menu-drop-list">
                            <li data-v-5d2efd6e=""
                                class="ivu-menu-item"
                            >
                                Configurable Plaform
                            </li>
                            <li data-v-5d2efd6e=""
                                class="ivu-menu-item"
                            >
                                form-generator-iview
                            </li>
                            <li data-v-5d2efd6e=""
                                class="ivu-menu-item"
                            >
                                data-vis-iview
                            </li>
                        </ul>
                    </div>
                </li>
            </div>
        </ul>
    </div>
</div>
`;
export default {
    css,
    cssScoped,
    templateScoped
};
