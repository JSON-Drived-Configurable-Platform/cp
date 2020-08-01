<template>
  <div class="layout-default-container">
    <Layout>
      <appHeader />
      <Layout class="layout-default-body ivu-layout-default-has-sider">
        <appSlider
          :menu-list="menuList"
          :active-name="pagePath"
          :open-names="openNames"
          @on-select="turnToPage"
        />
        <Layout class="layout-default-body-right">
          <Breadcrumb v-if="breadcrumb.length > 1" :data="breadcrumb" />
          <Content class="layout-default-body-right-content">
            <router-view />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import appHeader from "./components/header/appHeader";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import appSlider from "./components/slider/appSlider";
import config from "../../../config";
import { computeBreadCrumbList } from "../../../libs/utils";
export default {
  components: {
    appHeader,
    Breadcrumb,
    appSlider
  },
  data() {
    return {};
  },

  computed: {
    menuList() {
      return this.$store.state.app.menuList || [];
    },

    pagePath() {
      return this.$store.state.page.pagePath || "";
    },

    breadcrumb() {
      return computeBreadCrumbList(this.pagePath, this.menuList);
    },

    openNames() {
      return config.defaultOpenNames ? [config.defaultOpenNames] : [];
    }
  },

  methods: {
    turnToPage(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>
<style lang="less" scoped>

.layout-default {
  border: 1px solid #d7dde4;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  &-body {
    display: flex;
    flex-direction: row;
    &-right {
      background: #fff;
      &-content {
        margin: 0 32px;
        min-height: 700px;
      }
    }
  }
}
</style>
