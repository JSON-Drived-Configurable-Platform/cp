<template>
    <div>
        <h3>basic-component-tools</h3>
        <ul>
            <li>
                <div>
                    <router-link :to="{path: '/component-tools/query-conditions-generator'}">
                        query-conditions-generator
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    }
};
</script>
<style lang="less" scoped>
    .container {
        padding: 10px;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
</style>
