<template>
  <div class="page-form">
    <ul class="page-form-navs">
      <li>
        <router-link to="/form/simple">
          <img src="./images/sectioned.jpeg" alt="simple" />
          <span>simple</span>
        </router-link>
      </li>
      <li>
        <router-link to="/form/modal">
          <img src="./images/modal.jpeg" alt="modal" />
          <span>modal</span>
        </router-link>
      </li>
      <li>
        <router-link to="/form/multi-modal">
          <img src="./images/multi-modal.jpeg" alt="multi-modal" />
          <span>multi-modal</span>
        </router-link>
      </li>
      <li>
        <router-link to="/form/slideout">
          <img src="./images/slideout.jpeg" alt="slideout" />
          <span>slideout</span>
        </router-link>
      </li>
      <li>
        <router-link to="/form/inline">
          <img src="./images/inline.jpeg" alt="inline" />
          <span>inline</span>
        </router-link>
      </li>
      <li>
        <router-link to="/form/editable-table">
          <img src="./images/editable-table.jpeg" alt="editable-table" />
          <span>editable-table</span>
        </router-link>
      </li>
      <li>
        <router-link to="/form/takeover">
          <img src="./images/takeover.jpeg" alt="takeover" />
          <span>takeover</span>
        </router-link>
      </li>
      <li>
        <router-link to="/form/wizard">
          <img src="./images/wizard.jpeg" alt="wizard" />
          <span>wizard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/form/sectioned">
          <img src="./images/sectioned.jpeg" alt="sectioned" />
          <span>sectioned</span>
        </router-link>
      </li>
      <li>
        <router-link to="/form/conversational">
          <img src="./images/conversational.jpeg" alt="conversational" />
          <span>conversational</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less">
.page-form {
  &-navs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      display: inline-block;
      margin: 20px;
      width: 300px;
      height: auto;
      font-size: 16px;
      text-align: center;
      img {
        width: 100%;
      }
    }
  }
}
</style>
