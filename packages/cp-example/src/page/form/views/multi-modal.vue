<template>
  <div>
    <Table :loading="tableLoading" :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="handleEditButtonClick(row)"
          >编辑</Button
        >
      </template>
    </Table>
    <div class="page-form-modal-pagenation">
      <Page :total="total" show-total />
    </div>
    <div id="multi-modal-container"></div>
  </div>
</template>

<script>
import services from "@/service";
const { getPageConfig, getList } = services["form"];
import Vue from "vue";
import modalCom from "./multi-modal-com.vue";
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
      loading: true,
      tableLoading: true,
      data: [],
      editModel: {},
      pageConfig: {},
      pageSize: 10,
      pageNumber: 1,
      total: 0,
      model: {}
    };
  },
  computed: {
    options() {
      return this.pageConfig.form.options;
    },
    columns() {
      return this.pageConfig.columns;
    },
    editFormFields() {
      return this.pageConfig.editFormFields;
    }
  },
  mounted() {
    const { pageId } = this.$route.params;
    getPageConfig({
      pageId
    }).then(res => {
      this.pageConfig = res.data;
      this.loading = false;
      this.getTableData();
    });
  },
  methods: {
    getTableData() {
      this.tableLoading = true;
      const { pageId } = this.$route.params;
      const params = {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
        pageId
      };
      getList(params).then(res => {
        const { list, pageSize, pageNumber, total } = res.data;
        this.data = list || [];
        this.pageSize = pageSize || this.pageSize;
        this.pageNumber = pageNumber || this.pageNumber;
        this.total = total || this.total;
        this.tableLoading = false;
      });
    },
    handleEditButtonClick(row, index) {
      // eslint-disable-next-line no-console
      this.editModel = row;
      this.editModel.index = index;
      generateModal(
        this.editFormFields,
        this.editModel,
        `编辑-${this.editModel.name}`
      );
    },
    handleSave() {
      this.$refs.FormGenerator.submit()
        .then(data => {
          // eslint-disable-next-line no-console
          console.log("update model", data);
          this.$Message.info("update success!");
        })
        .catch(valid => {
          // eslint-disable-next-line no-console
          console.log("valid", valid);
        });
    },
    handleEditClick() {
      generateModal(this.fields, {}, "编辑");
    }
  }
};
</script>

<style lang="less">
.page-form-modal {
  &-pagenation {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
