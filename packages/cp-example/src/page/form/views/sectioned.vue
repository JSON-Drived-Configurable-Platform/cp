<template>
  <div class="container">
    <FormGenerator
      ref="FormGenerator"
      :fields="fieldsData"
      :model="model"
      :options="optionsData"
      @on-submit="handleSave"
    />
  </div>
</template>
<script>
import services from "@/service";
const { getSenctionedFormData } = services["form"];
export default {
  data() {
    return {
      pageConfig: {},
      model: {}
    };
  },
  mounted() {
    this.handleSectionedFormData();
  },
  computed: {
    fieldsData() {
      if (this.pageConfig) {
        return this.pageConfig.fields;
      }
      return [];
    },
    optionsData() {
      if (this.pageConfig) {
        return this.pageConfig.options;
      }
      return [];
    }
  },
  methods: {
    handleSectionedFormData() {
      getSenctionedFormData().then(res => {
        if (res.msg === "ok") {
          this.pageConfig = res.data;
        }
      });
    },
    handleSave() {
      this.$refs.FormGenerator.submit()
        .then(data => {
          // eslint-disable-next-line no-console
          console.log("update model", data);
          this.value = false;
        })
        .catch(valid => {
          // eslint-disable-next-line no-console
          this.valid = valid;
          console.log("valid", valid);
        });
    }
  }
};
</script>
<style lang="less">
.container {
  width: 70%;
  margin: 10px 50px;
}
</style>
