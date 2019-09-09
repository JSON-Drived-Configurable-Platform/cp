<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"></div>
      <div class="layout-nav">
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
        <MenuItem name="2">
          <user />
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>

<script>
import user from "../user";
export default {
  components: {
    user
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.layout-logo {
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
  background-image: url("./images/logo.png");
}

.layout-nav {
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
.ivu-menu-horizontal {
  height: 41px;
  line-height: 41px;
}
</style>
