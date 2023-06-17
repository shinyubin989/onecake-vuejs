<template>
  <div class="flex-container" style="height: 320px;">
    <div class="store-image" >
      <div class="card card-cover overflow-hidden rounded-4 shadow-lg">
        <img :src="image" style="width:250px; height:250px; object-fit: cover;"/>
      </div>
    </div>
    <!-- <img :src="this.image" /> -->
    <div class="description">
      <h2 style="font-weight: 700; margin-top:50px"> {{ this.menuName }}</h2>
      <h4 style="font-weight: 500; margin-top:25px">{{ this.menuDescription }}</h4>
      <h4 style="font-weight: 500; margin-top:25px">{{ this.price }}원~</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreMenu",
  props: {
    image: {
      type: String,
      required: true
    },
    menuDescription: {
      type: String,
      required: true
    },
    menuName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.flex-container{
  display: flex;
  
}
.store-image{
  padding: 20px;
}
.description{
  padding: 20px;
}
</style>
