<template>
  <main class="container" style="overflow:scroll;">
    <Header />
    <div class="album py-5">
      <div class="container">
        <div class="dropdown float-right" style="margin-bottom:10px">
          <button class="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
            필터
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" v-on:click="filterPopular">인기순</a></li>
            <li><a class="dropdown-item" href="#" v-on:click="filterReview">리뷰많은순</a></li>
          </ul>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          
          <StoreItem v-for="item in items" :key="item.storeId" :storeImage="item.storeImage" :storeName="item.storeName" @click="selectItem(item.storeId)" />
        </div>
      </div>
    </div>
  </main>
    
  
</template>

<script>
import axios from "axios";
import Sidebar from '@/views/Sidebar.vue';
import Header from '@/views/Header.vue';
import StoreItem from '@/views/components/StoreItem.vue';
import '@/index.css'

export default {
  name: "Stores",
  components: {
    Sidebar,
    Header,
    StoreItem
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    filterPopular() {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      axios.get('/api/v1/consumer/stores/main', {headers})
      .then(response => {
        this.items = response.data;
      })
      .catch(error => {
        // 회원가입 실패 시 처리
        console.log(error); // 에러 메시지 출력
      });
    },
    filterReview() {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      axios.get('/api/v1/consumer/stores/review', {headers})
      .then(response => {
        this.items = response.data;
      })
      .catch(error => {
        // 회원가입 실패 시 처리
        console.log(error); // 에러 메시지 출력
      });
    },
    selectItem(item) {
      this.$router.push('/store/' + item);
    }
  },
  mounted() {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    axios.get('/api/v1/consumer/stores/main', {
      headers : headers,
      })
      .then(response => {
        this.items = response.data;
      })
      .catch(error => {
        console.error(error);
      });
    this.filterPopular();
    this.filterReview();
  }
}
</script>

<style scoped>


</style>
