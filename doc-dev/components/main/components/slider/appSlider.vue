<template>
    <Sider
        hide-trigger
        :style="{background: '#fff'}"
    >
        <Menu
            :active-name="activeName"
            theme="light"
            width="auto"
            @on-select="handleSelect"
        >
            <MenuItem
                v-for="(item, i) in menuList"
                :key="i"
                :name="item.name"
            >
                <Icon type="md-document" />
                {{ item.label }}
            </MenuItem>
        </Menu>
    </Sider>
</template>

<script>
export default {
    props: {
        menuList: {
            type: Array,
            default() {
                return [];
            }
        },
        activeName: {
            type: String,
            default: ''
        }
    },
    data() {
        return {};
    },
    methods: {
        handleSelect(name) {
            this.$emit('on-select', name);
        }
    }
};
</script>
<style lang="less" scoped>
</style>
