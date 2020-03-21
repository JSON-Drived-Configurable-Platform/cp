<template>
  <Sider
    class="layout-default-slider"
    hide-trigger
  >
    <Menu
      class="layout-default-slider-menu"
      :active-name="activeName"
      :open-names="openNames"
      theme="light"
      width="auto"
      @on-select="handleSelect"
    >
      <template v-for="(menu, i) in menuList">
        <Submenu v-if="menu.submenu" :key="i" :name="menu.path">
          <template slot="title">
            {{ menu.label }}
          </template>
          <MenuItem
            v-for="(item, j) in menu.submenu"
            :key="j"
            :name="item.path"
          >
            {{ item.label }}
          </MenuItem>
        </Submenu>
        <MenuItem v-else :key="i" :name="menu.path">
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
    /**
     * @param {String} name select item name
     */
    handleSelect(name) {
      this.$emit("on-select", name);
    }
  }
};
</script>
<style lang="less">
.layout-default-slider {
  background: #fff;
  width: 240px;

  &-menu {
    height: 100%;
  }
}
</style>
