<template>
  <div>
    <Row class="container">
      <iCol span="10">
        <div class="container">
          <FormGenerator
            ref="FormGenerator"
            :fields="fields"
            :model="model"
            :options="options"
            :request-interceptor="requestInterceptor"
          />
        </div>
      </iCol>
      <iCol span="5" :style="{ margin: '60px 10px' }">
        <Input
          :value="JSON.stringify(model, null, 8)"
          type="textarea"
          :rows="50"
          placeholder="请输入表单配置项"
          :style="{ fontSize: '12px' }"
          disabled
        />
      </iCol>
      <iCol span="7" :style="{ margin: '60px 10px' }">
        <Form :model="form">
          <FormItem>
            <Input
              :value="form.config"
              type="textarea"
              :rows="50"
              placeholder="请输入表单配置项"
              :style="{ fontSize: '12px' }"
              @on-change="handleConfigChange"
            />
          </FormItem>
        </Form>
      </iCol>
    </Row>
  </div>
</template>

<script>
import { Col } from "iview";
import { config, model, fields, options } from "./config";
import axios from "axios";
export default {
  components: {
    iCol: Col
  },
  data() {
    return {
      form: {
        config: JSON.stringify(config, null, 8)
      },
      model,
      fields,
      options,
      // requestInterceptor: null
      requestInterceptor: function(url, params) {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          if (process.env.NODE_ENV === "production") {
            url = `website-data-api/${url}.json`;
          }
          axios
            .get(url, {
              query: params
            })
            .then(res => {
              resolve(res.data);
            })
            .catch(error => {
              reject(error);
            });
        });
      }
    };
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    handleConfigChange(e) {
      let config;
      try {
        config = JSON.parse(e.target.value || "") || [];
      } catch (error) {
        this.$Message("配置信息不是一个合法的json数据");
      }

      let model = {};
      config.fields.forEach(item => {
        model[item.model] = item.defaultValue;
      });
      this.model = model;
      this.fields = config.fields;
      this.options = config.options;
    },
    submit() {
      this.$refs.FormGenerator.submit().then(data => {
        // eslint-disable-next-line no-console
        console.log("submit", data);
        const conditons = [];
        Object.keys(data).map(key => {
          conditons.push({
            key,
            value: data[key]
          });
        });
        // eslint-disable-next-line no-console
        console.log("submit", JSON.stringify(conditons));
      });
    },
    reset() {
      this.$refs.FormGenerator.reset();
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  margin: 10px;
}
</style>
