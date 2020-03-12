<template>
  <Breadcrumb class="layout-default-breadcrumb">
    <BreadcrumbItem
      v-for="(item, index) in data"
      :key="index">
      {{ item }}
    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {}
};
</script>
<style lang="less">
.layout-default-breadcrumb {
  margin: 24px 32px
}
</style>
