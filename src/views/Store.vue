<template>
  <div class="container" style="overflow:scroll;">
    <Header />
    <StoreMain v-bind:id=this.id />
    <div style="padding-left: 30px; padding-right:30px; margin-top: 50px;">
      <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" style="color: grey;">메뉴</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false" style="color: grey">가게 정보</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false" style="color: grey">리뷰</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          <StoreMenus v-bind:id=this.id />
        </div>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <StoreInfo v-bind:id=this.id />
        </div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
          <StoreReviews v-bind:id=this.id />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from '@/views/Sidebar.vue';
import Header from '@/views/Header.vue';
import StoreMain from "@/views/components/StoreMain.vue";
import StoreMenus from "@/views/components/StoreMenus.vue";
import StoreInfo from "@/views/components/StoreInfo.vue";
import StoreReviews from "@/views/components/StoreReviews.vue";
import '@/index.css'

export default {
  name: "Store",
  components: {
    Sidebar,
    Header,
    StoreMain,
    StoreMenus,
    StoreInfo,
    StoreReviews
  },
  data() {
    return {
      items: [],
      id: null
    };
  },
  created() {
    this.id = this.$route.params.id
  },
  methods: {
  },
}
</script>

<style scoped>

.nav-item{
  font-size: 25px;
}

.nav-item > .active{
  color: #000 !important;
  background-color: #f7f7f7 !important;
}

.nav-item {
  color: grey !important;
}
</style>
