<template>
  <div class="page-form-con">
    <template v-for="(talkConfig, index) in formsConfig">
      <div
        v-if="index <= current"
        class="page-form-con-talk" :key="index"
      >
        <div class="page-form-con-talk-question">
          <div class="page-form-con-talk-question-asker">智能小护士:</div>
          <FormGenerator
            :ref="'FormGenerator-' + index"
            class="page-form-con-talk-question-field"
            :fields="talkConfig.questionFields"
            :model="model"
            :options="options"
            @on-submit="handleSave(index)"
          />
        </div>
        <div class="page-form-con-talk-anwser">
          <div class="page-form-con-talk-anwser-user">
            :兔百万和汤圆
          </div>
          <div class="page-form-con-talk-anwser-detail">
            {{model[talkConfig.answerField]}}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import pageConfig from "./page-config.js";
export default {
  data() {
    return {
      pageConfig,
      model: {},
      current: 0
    };
  },
  computed: {
    formsConfig() {
      return this.pageConfig.forms;
    },
    options() {
      return this.pageConfig.formOptions;
    }
  },
  methods: {
    handleSave(index) {
      this.$refs[`FormGenerator-${index}`][0].submit()
        .then(data => {
          console.log(`FormGenerator-${index}`, data);
          this.current < 2 && this.current++;
        });
    },

    handleButtonEvent(event) {
      this[event.name]();
    },

    // 上一步
    prev() {
      this.current--;
    }
  }
};
</script>
<style lang="less">
.page-form-con {
  width: 70%;
  margin: 30px;
  padding: 30px;
  border: solid 1px #e4e4e4;
  border-radius: 10px;
  overflow: hidden;

  &-talk{
    margin: 20px 0px;
    &-question {
      &-asker {
        height: 40px;
        font-size: 12px;
        font-weight: bold;
      }

      &-field {
        width: 70%;
        border: solid 1px #e4e4e4;
        border-radius: 10px;
        padding: 10px;
        // background: #e4e4e4;
      }
    }

    &-anwser {
      float: right;
      text-align: right;

      &-user {
        height: 40px;
        font-size: 12px;
        font-weight: bold;
      }

      &-detail {
        border: solid 1px #e4e4e4;
        border-radius: 10px;
        padding: 10px;
        font-weight: bold;
      }
    }
  }
}
</style>
