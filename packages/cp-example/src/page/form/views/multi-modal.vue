<template>
  <div>
    <Button type="primary" @click="handleEditClick">
      展示Multi Modal Form
    </Button>
    <div id="multi-modal-container"></div>
  </div>
</template>

<script>
import pageConfig from "./simple.js";
import Vue from "vue";
import modalCom from "./modalCom.vue";
function generateModal(fields, model, title) {
  Vue.component("dynimicModal", {
    render(h) {
      return h(modalCom, {
        props: {
          fields,
          model,
          title
        }
      });
    }
  });

  const modalGenerator = (fields = [], model = {}, title = "") => {
    const dynimicModal = Vue.component("dynimicModal");
    const component = new dynimicModal({
      props: {
        fields,
        model,
        title
      }
    }).$mount();
    document.getElementById("multi-modal-container").appendChild(component.$el);
  };
  modalGenerator(fields);
}
export default {
  data() {
    return {
      model: {},
      pageConfig: {
        form: {}
      },
      open: false
    };
  },
  computed: {
    fields() {
      return this.pageConfig.form.fields;
    },
    options() {
      return this.pageConfig.form.options;
    }
  },
  mounted() {
    this.pageConfig = pageConfig;
  },
  methods: {
    handleEditClick() {
      generateModal(this.fields, {}, "编辑");
    },
    handleSave() {
      this.$refs.FormGenerator.submit()
        .then(data => {
          console.log("update model", data);
          this.open = false;
          this.$Message.info("update success!");
        })
        .catch(valid => {
          console.log("valid", valid);
        });
    },
    handelReset() {}
  }
};
</script>

<style></style>
