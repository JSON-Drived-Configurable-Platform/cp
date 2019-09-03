<template>
    <Header>
        <Menu
            mode="horizontal"
            theme="dark"
            active-name="1"
        >
            <div class="layout-logo">
                form-generator-iview
            </div>
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
    data() {
        return {};
    }
};
</script>
<style lang="less" scoped>
.layout-logo{
    width: 150px;
    height: 40px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 0px;
    line-height: 40px;
    text-align: center;
    color: #fff;
}

.layout-nav{
    float: right;
    margin: 0 40px;
}
</style>
