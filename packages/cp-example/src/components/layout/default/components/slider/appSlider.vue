<template>
  <Sider hide-trigger :style="{ background: '#fff', width: '240px' }">
    <Menu
      :active-name="activeName"
      :open-names="openNames"
      theme="light"
      width="auto"
      @on-select="handleSelect"
    >
      <template v-for="(menu, i) in menuList">
        <Submenu v-if="menu.submenu" :key="i" :name="menu.name">
          <template slot="title">
            {{ menu.label }}
          </template>
          <MenuItem
            v-for="(item, j) in menu.submenu"
            :key="j"
            :name="item.name"
          >
            {{ item.label }}
          </MenuItem>
        </Submenu>
        <MenuItem v-else :key="i" :name="menu.name">
          {{ menu.label }}
        </MenuItem>
      </template>
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
      default: ""
    },
    openNames: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleSelect(name) {
      this.$emit("on-select", name);
    }
  }
};
</script>
<style lang="less" scoped></style>
