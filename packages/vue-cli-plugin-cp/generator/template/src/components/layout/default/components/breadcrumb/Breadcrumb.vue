<template>
  <Breadcrumb :style="{ margin: '24px 0' }">
    <BreadcrumbItem v-for="(item, index) in cat" :key="index">
      {{ item }}
    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
export default {
  props: {
    cat: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped></style>
