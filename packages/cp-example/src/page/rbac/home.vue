<template>
  <div class="page-home">RBAC Home</div>
</template>
<script>
import service from "@/service";
const { getHomeData } = service.home;
export default {
  data() {
    return {
      current: 0,
      carouselData: [],
      hotTemplates: []
    };
  },
  mounted() {
    getHomeData().then(res => {
      const { carouselData, hotTemplates } = res.data;
      this.carouselData = carouselData;
      this.hotTemplates = hotTemplates;
    });
  }
};
</script>
<style lang="less">
.page-rbac {
  &-carousel-content {
    border-radius: 4px;
    height: 300px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #506b9e;
    color: #fff;
  }

  &-hot-templates {
    margin-top: 30px;
    &-header {
      text-align: center;
    }

    &-cards {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    &-card {
      width: 30%;
      display: inline-block;
      margin: 20px;
      height: 120px;
    }
  }
}
</style>
