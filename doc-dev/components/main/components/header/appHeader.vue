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
    width: 420px;
    margin: 0 140px;
}
</style>
