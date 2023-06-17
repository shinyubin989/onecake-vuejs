<template>
  <div class="card mb-3" style="width: 100%; heigth:300px">
    <div class="row g-0">
      <div class="col-md-3">
        <img :src="this.image" class="rounded-start cake-img" style="width:300px; heigth:300px !important;"/>
      </div>
      <div class="col-md-8" >
        <div class="card-body" style="padding:50px;">
          <div style="display: flex;">
            <div class="profiles" >
              <img class="profile" v-if="this.profileImg !== null" :src="profileImg" />
              <img class="profile" v-else src="@/assets/no-profileImg.png" />
            </div>
            <div style="margin-left:10px; margin-top:10px;">
              <h5>{{userName}}</h5>
              <h5>{{timeHistory}}</h5>
            </div>
          </div>
          <div class="align-middle" style="margin-top:40px; height:100%; ">
            <h5 class="overflow-scroll">{{this.content}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreReview",
  props: {
    content: {
      type: String,
      required: true
    },
    profileImg: {
      type: String,
      required: true
    },
    timeHistory: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.profile{
  width: 80px;
  height: 80px;
  border-radius: 70%;
  object-fit: cover;
}
.cake-img{
  height: 300px;
  width: 300px;
  object-fit: cover;
}
</style>
