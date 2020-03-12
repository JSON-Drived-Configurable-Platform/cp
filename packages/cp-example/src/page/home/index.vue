<template>
  <div class="page-home">
    <h2 v-if="pageTitle" class="page-home-page-title">{{ pageTitle }}</h2>
    <!-- search conditions area -->
    <FormGenerator
      v-if="searchFormConfig.formFields.length > 0"
      ref="searchConditionsFormGenerator"
      class="page-home-conditions"
      :fields="searchFormConfig.formFields || []"
      :model="searchFormModel"
      :options="searchFormConfig.options || {}"
    />
    <div class="page-home-templates">
      <Card
        class="page-home-templates-card"
        v-for="(template, index) in templates"
        :key="index"
      >
        <router-link :to="template.path">
          <div class="page-home-templates-card-img">
            <img :src="template.img" :alt="template.title">
          </div>
          <div class="page-home-templates-card-content">
            <h3>{{template.title}}</h3>
            <p>
              {{template.desc}}
            </p>
          <!-- <div class="page-home-templates-card-content-author">
            <a href="/orgs/JSON-Drived-Configurable-Platform/people/BingBlog">
              BingBlog
            </a>
            <img class="avatar"
                 src="https://avatars1.githubusercontent.com/u/22095959?s=96&amp;v=4"
                 width="48"
                 height="48"
                 alt="@BingBlog"
            >
          </div> -->
          </div>
        </router-link>
      </Card>
    </div>
  </div>
</template>
<script>
import pageConfig from "./page-config.js";
export default {
  data() {
    return {
      searchFormModel: {}
    };
  },
  computed: {
    pageTitle() {
      return pageConfig.title || "";
    },
    // search conditions form config
    searchFormConfig() {
      return pageConfig.search || {};
    },
    templates() {
      return pageConfig.templates || [];
    }
  }
};
</script>
<style lang="less">
.page-home {
  &-page-title {
    font-size: 20px;
    margin: 10px auto 20px;
  }

  &-conditions {
    padding: 24px 32px 0 32px;
    border: solid 1px #e4e4e4;
    border-radius: 10px;
  }

  &-templates {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 32px 0;

    &-card {
      margin-bottom: 32px;
      width: 266px;
      overflow: hidden;

      .ivu-card-body {
        padding: 0;
      }

      &-img {
        display: block;
        width: 264px;
        height: 160px;
        border-bottom: solid 1px #e4e4e4;
        border-radius: 10px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }

      &-content {
        padding: 20px;

        h3 {
          font-size: 16px;
          color: rgba(0,0,0,0.85);
          line-height: 24px;
        }
        p {
          height: 44px;
          margin: 4px 0 0 0;
          font-size: 14px;
          color: rgba(0,0,0,0.45);
          line-height: 22px;
          overflow: hidden;
        }
      }

    }
  }
}
</style>
