<template>
  <div class="page-home">
    <h3>当前登录用户角色、权限信息如下：</h3>
    <pre>{{ homeData }}</pre>
  </div>
</template>
<script>
import services from "@/service";
const { getRbacUserInfo } = services.rbac;
export default {
  data() {
    return {
      current: 0,
      data: {}
    };
  },
  computed: {
    homeData() {
      return JSON.stringify(this.data, null, 4);
    }
  },
  mounted() {
    getRbacUserInfo().then(res => {
      const { errno, data } = res;
      if (+errno === 0) {
        this.data = data;
      }
    });
  }
};
</script>
<style lang="less"></style>
