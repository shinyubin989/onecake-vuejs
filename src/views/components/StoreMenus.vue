<template>
  <div style="margin-top:20px; padding-left:10px; padding-right:10px;">
    <ul class="list-group list-group-flush">
      <StoreMenu class="list-group-item" v-for="item in items" :key="item.id" :image="item.image" :menuName="item.menuName" :menuDescription="item.menuDescription" :price="item.price" @click="selectMenu(item.storeId)"></StoreMenu>
    </ul>
  </div>
</template>
<!--
[
  {
    "image": "string",
    "menuDescription": "string",
    "menuName": "string",
    "price": 0
  }
]
-->
<script>
import axios from "axios";
import '@/index.css'
import StoreMenu from "@/views/components/StoreMenu.vue"

export default {
  name: "StoreMenus", 
  components: {
    StoreMenu
  },
  data() {
    return {
      items: []
    };
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    selectMenu(item, event) {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      axios.post('api/v1/consumer/stores/' + this.id + '/like', {}, {headers})
      .then(response => {
        // this.items = response.data;
        if(item.isLiked){
          item.isLiked = false;
          item.likeNum = item.likeNum - 1;
        } else {
          item.isLiked = true;
          item.likeNum = item.likeNum + 1;
        }
      })
      .catch(error => {
        // 회원가입 실패 시 처리
        console.log(error); // 에러 메시지 출력
      });
    },
  },
  mounted() {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    axios.get('api/v1/consumer/stores/' + this.id + '/menuList', { 
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
