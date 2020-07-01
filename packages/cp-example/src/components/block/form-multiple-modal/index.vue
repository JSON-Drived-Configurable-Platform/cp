<template>
  <div id="multi-modal-container"></div>
</template>

<script>
import Vue from "vue";
import modalCom from "./modal.vue";

export default {
  props: {
    formFields: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      value: true
    };
  },
  methods: {
    open(model, title = '', fields = [], options = {}) {
      console.log(model, fields = [], title = '');
      if (fields.length === 0) {
        fields = this.formFields;
      }
      this.modalGenerator(fields, model, title, options);
    },

    close() {

    },

    closeAll() {

    },

    modalGenerator(formFields = [], formModel = {}, formTitle = "", formOptions = {}) {
      // const self = this;
      // const dynimicModal = Vue.component("dynimicModal", {
      //   render(h) {
      //     return h(modalCom, {
      //       props: {
      //         formFields,
      //         formModel,
      //         formTitle,
      //         formOptions
      //       },
      //       on: {
      //         'on-submit': function(data) {
      //           self.$emit('on-submit', data);
      //         }
      //       }
      //     });
      //   }
      // });
      // const instance = new dynimicModal().$mount();

      const modalComponentClass = Vue.extend(modalCom);
      const instance = new modalComponentClass({
        propsData: {
          formFields,
          formModel,
          formTitle,
          formOptions
        },
      });
      instance.$mount();
      instance.$on('on-submit', data => {
        this.$emit('on-submit', data);
      });
      this.$el.appendChild(instance.$el);
    }
  }
};
</script>

<style></style>
