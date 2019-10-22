<template>
  <div class="wizard">
    <Steps :current="current" direction="vertical">
      <div class="wizard-name" @click="handelTab('0')">
        <Step title="项目一" content="这里是该步骤的描述信息"></Step>
      </div>
      <div class="wizard-name" @click="handelTab('1')">
        <Step title="项目二" content="这里是该步骤的描述信息"></Step>
      </div>
      <div class="wizard-name" @click="handelTab('2')">
        <Step title="项目三" content="这里是该步骤的描述信息"></Step>
      </div>
    </Steps>
    <template>
      <div class="page-form-takeover-form">
        <FormGenerator
          ref="FormGenerator"
          :fields="fieldsData"
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
const { getWizardFormData, getTakeoverModel, getList } = services["form"];
export default {
  data() {
    return {
      current: Number(this.$route.query.inx) || 0,
      model: {},
      valid: true,
      pageConfig: [],
      diffData: {},
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
        return this.pageConfig[this.current] || [];
      }
      return [];
    }
  },
  mounted() {
    this.handTakeoverData();
    this.handTakeoverModel();
    this.$router.push({
      query: {
        type: "add",
        inx: this.current
      }
    });
  },
  methods: {
    handelTab(ev) {
      console.log(ev);
      this.current = Number(ev);
      this.$router.push({
        query: {
          type: "add",
          inx: Number(ev)
        }
      });
    },
    handTakeoverData() {
      getWizardFormData().then(res => {
        if (res.msg === "ok") {
          this.pageConfig = res.data.fields;
        }
      });
    },
    handTakeoverModel() {
      getTakeoverModel().then(res => {
        if (res.msg === "ok") {
          this.diffData = this.deepClone(res.data.modelData);
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
    },
    next() {
      if (this.current !== 2) {
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
        if (this.valid) {
          this.current += 1;
          this.$router.push({
            query: {
              type: this.$route.query.type,
              inx: this.current
            }
          });
        }
      }
    },
    handleSave() {
      let obj = {};
      for (let k in this.model) {
        if (Array.isArray(this.model[k]) || Array.isArray(this.diffData[k])) {
          if (this.model[k].join(",") !== this.diffData[k].join(",")) {
            obj[k] = this.model[k];
          }
        } else {
          if (this.model[k] !== this.diffData[k]) {
            obj[k] = this.model[k];
          }
        }
      }
      getList(obj).then(res => {
        console.log(res);
      });
    },
    deepClone(obj) {
      let _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj);
      return objClone;
    }
  }
};
</script>
<style lang="less">
.wizard {
  &-name {
    cursor: pointer;
  }
  .ivu-steps {
    width: 200px;
    float: left !important;
  }
  .page-form-takeover-form {
    margin: 30px auto;
    width: 500px;
  }
  .page-form-simple-form {
    float: left;
  }
}
</style>
