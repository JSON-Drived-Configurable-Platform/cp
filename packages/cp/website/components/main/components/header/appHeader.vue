<template>
    <Header>
        <Menu
            mode="horizontal"
            theme="dark"
            active-name="1"
        >
            <div class="layout-logo" />
            <div class="layout-nav">
                <MenuItem name="1">
                    开始
                </MenuItem>
                <MenuItem name="1">
                    思考与实践
                </MenuItem>
                <MenuItem name="2">
                    文档
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        生态
                    </template>
                    <MenuItem name="3-1">
                        Configurable Plaform
                    </MenuItem>
                    <MenuItem name="3-2">
                        data-vis-iview
                    </MenuItem>
                </Submenu>
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
