<template>
  <main class="container" style="overflow:scroll;">
    <Header />
    <StoreMain v-bind:id=this.id />

  </main>
</template>

<script>
import axios from "axios";
import Sidebar from '@/views/Sidebar.vue';
import Header from '@/views/Header.vue';
import StoreMain from "@/views/StoreMain.vue";
import '@/index.css'

export default {
  name: "Store",
  components: {
    Sidebar,
    Header,
    StoreMain
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
    // filterPopular() {
    //   const accessToken = localStorage.getItem('accessToken');
    //   const headers = {
    //     Authorization: `Bearer ${accessToken}`
    //   };
    //   axios.get('api/v1/consumer/stores/main', {headers})
    //   .then(response => {
    //     this.items = response.data;
    //   })
    //   .catch(error => {
    //     // 회원가입 실패 시 처리
    //     console.log(error); // 에러 메시지 출력
    //   });
    // },
  },
  // mounted() {
  //   const accessToken = localStorage.getItem('accessToken');
  //   const headers = {
  //     Authorization: `Bearer ${accessToken}`
  //   };
  //   axios.get('api/v1/consumer/stores/main', { 
  //     headers : headers,
  //     })
  //     .then(response => {
  //       this.items = response.data;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //   this.filterPopular();
  //   this.filterReview();
  // }
}
</script>

<style scoped>


</style>
