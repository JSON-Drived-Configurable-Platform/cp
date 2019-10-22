<template>
  <div>
    <Steps :current="current" style="margin-left: 13%;">
      <Step :title="item.name" v-for="(item, index) in data" :key="index">
      </Step>
    </Steps>
    <template v-if="this.current === 0">
      <div
        class="page-form-takeover-form"
        style="margin:30px auto; width:760px;"
      >
        <FormGenerator
          ref="FormGenerator"
          :fields="fieldsData[0]"
          :model="model"
          @on-submit="handleSave"
          @on-button-event="handelButtonEvent($event)"
        />
      </div>
    </template>
    <template v-if="this.current === 1">
      <div
        class="page-form-takeover-form"
        style="margin:30px auto; width:760px;"
      >
        <FormGenerator
          ref="FormGenerator"
          :fields="fieldsData[1]"
          :model="model"
          @on-submit="handleSave"
          @on-button-event="handelButtonEvent($event)"
        />
      </div>
    </template>
    <template v-if="this.current === 2">
      <div
        class="page-form-takeover-form"
        style="margin:30px auto; width:760px;"
      >
        <FormGenerator
          ref="FormGenerator"
          :fields="fieldsData[2]"
          :model="model"
          @on-submit="handleSave"
          @on-button-event="handelButtonEvent($event)"
        />
      </div>
    </template>
    <!-- <div style="width: 18%; margin:0 auto;">
        <Button type="primary" @click="handLast" style="margin-right:20px">上一步</Button>
        <Button type="primary" @click="handeNext" v-if="current === 0 || current === 1" style="margin-right:20px">下一步</Button>
        <Button type="primary" v-if="current === 2" @click="handSub" >提交</Button>
    </div> -->
  </div>
</template>

<script>
import services from "@/service";
const { getTakeoverFormData, getTakeoverModel, getList } = services["form"];
export default {
  data() {
    return {
      current: Number(this.$route.query.inx) || 0,
      model: {},
      diffData: {},
      pageConfig: [],
      data: [
        {
          name: "第一步",
          value: "1"
        },
        {
          name: "第二步",
          value: "2"
        },
        {
          name: "第三步",
          value: "3"
        }
      ]
    };
  },
  computed: {
    fieldsData() {
      if (this.pageConfig) {
        return this.pageConfig || [];
      }
      return [];
    }
  },
  mounted() {
    this.handTakeoverData();
    this.$router.push({
      query: {
        type: "add",
        inx: this.current
      }
    });
  },
  methods: {
    handTakeoverData() {
      getTakeoverFormData().then(res => {
        if (res.msg === "ok") {
          this.pageConfig = res.data.fields;
        }
      });
    },
    handTakeoverModel() {
      getTakeoverModel().then(res => {
        if (res.msg === "ok") {
          this.model = res.data.modelData;
        }
      });
    },
    handelButtonEvent(e) {
      this[e.name]();
    },
    prev() {
      if (this.current !== 0) {
        this.current -= 1;
        this.$router.push({
          query: {
            type: this.$route.query.type,
            inx: this.current
          }
        });
      } else {
        this.current = 0;
      }
      if (Object.keys(this.model).length === 0 && this.current !== 0) {
        this.handTakeoverModel();
      }
    },
    next() {
      if (this.current !== 2) {
        this.handleSave();
        if (this.valid) {
          this.current += 1;
        }
      }
    },
    handleSave() {
      this.$refs.FormGenerator.submit()
        .then(data => {
          // eslint-disable-next-line no-console
          console.log("update model", data);
          this.value = false;
          let obj = {};
          this.pageConfig[this.current].map(ret => {
            obj[ret.model] = "";
          });
          for (let k in obj) {
            obj[k] = this.model[k];
          }
          this.getFormData(obj);
        })
        .catch(valid => {
          // eslint-disable-next-line no-console
          this.valid = valid;
          console.log("valid", valid);
        });
    },
    getFormData(data) {
      getList(data).then(res => {
        if (this.current !== 2 && res.msg === "ok") {
          this.current += 1;
          this.$router.push({
            query: {
              type: this.$route.query.type,
              inx: this.current
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="less">
.page-form-takeover-form {
  .ivu-form .ivu-form-item-label {
    width: 100px;
  }
}
</style>
