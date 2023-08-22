<template>
  <Header/>
  <div style="margin: 100px 200px; ">
    <h1 style="text-align: center; font-weight: 700; margin-bottom: 70px">주문 상담</h1>
    <div style="display: flex; justify-content : center;">
      <div>
        <Chat v-for="item in items"
              :key="item.id"
              :storeImg="item.storeImg"
              :storeName="item.storeName"
              :storeLocation="item.storeLocation"
              :kakaoUrl="item.kakaoUrl"
              @click="pressChat(item.kakaoUrl)"
         style="margin-bottom: 30px;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Chat from "@/views/components/Chat.vue";
import Header from "@/views/Header.vue";

export default {
  name: "Chats",
  components: {
    Chat, Header
  },
  data() {
    return {
      items: []
    };
  },
  props: {},
  methods: {
    pressChat(kakaoUrl){
      window.open(kakaoUrl, '_blank');
    }
  },
  mounted() {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    axios.get('/api/v1/consumer/chat', {
      headers : headers,
    })
    .then(response => {
      this.items = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  }
}
</script>

<style scoped>

</style>