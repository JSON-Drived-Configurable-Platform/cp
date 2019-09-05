<template>
  <div class="page-home">
    <Carousel v-model="current" loop>
      <CarouselItem v-for="(item, index) in carouselData" :key="index">
        <div class="page-home-carousel-content">{{ item }}</div>
      </CarouselItem>
    </Carousel>
    <div class="page-home-hot-templates">
      <h1 class="page-home-hot-templates-header">Hot Templates</h1>
      <div class="page-home-hot-templates-cards">
        <Card
          v-for="(item, index) in hotTemplates"
          :key="index"
          class="page-home-hot-templates-card"
        >
          <p slot="title">{{ item.title }}</p>
          <p>
            {{ item.description }}
          </p>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import service from "@/service";
export default {
  data() {
    return {
      current: 0,
      carouselData: [],
      hotTemplates: []
    };
  },
  mounted() {
    service.getHomeData().then(res => {
      console.log();
      const { carouselData, hotTemplates } = res.data;
      this.carouselData = carouselData;
      this.hotTemplates = hotTemplates;
    });
  }
};
</script>
<style lang="less">
.page-home {
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
