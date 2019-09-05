<template>
  <Breadcrumb :style="{ margin: '24px 0' }">
    <BreadcrumbItem v-for="(item, index) in data" :key="index">
      {{ item.label }}
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
<style lang="less" scoped></style>
