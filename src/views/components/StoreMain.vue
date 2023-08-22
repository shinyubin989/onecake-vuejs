<template>
  <div>
    <div class="flex-container">
      <div class="store-image">
        <!-- <img :src="item.storeImage" style="width:100%;"/> -->
        <div class="card card-cover overflow-hidden rounded-4 shadow-lg">
          <img :src="item.storeImage" style="width:100%; height: 500px; object-fit: cover;"/>
        </div>
      </div>
      <div class="store-description">
        <h1 style="font-weight: 800; margin-top:150px; color: rgb(50,50,50);">{{ item.storeName }} </h1>
        <h4 style="margin-top:30px">{{ item.storeDescription }}</h4>
        <div class="card-group" style="margin-top:50px;">
          <div class="card" @click="pressHeart(item, $event)">
              <div class="card-body">
                <span style="margin-left:10px;">
                  <img v-if="item.isLiked" src="@/assets/heart-fill.svg" />
                  <img v-else src="@/assets/heart.svg" />
                  <span> 찜 {{item.likeNum}} </span>
                </span>
                
              </div>
          </div>
          <div class="card" @click="pressChat()">
              <div class="card-body">
                <span style="margin-left:10px;">
                  <img src="@/assets/chat-dots.svg" @click="pressChat(item, $event)" />
                  <span> 상담하기 </span>
                </span>
              </div>
          </div>
        </div>
        
<!--        <button class="btn btn-primary mx-auto btn-lg" type="button" style="background-color: #ff3096; border: none; width:100%; margin-top:30px;">주문서 작성하러가기</button>-->
      </div>
    </div>

    
    
  </div>
</template>

<script>
import axios from "axios";
import '@/index.css'

export default {
  name: "StoreMain",
  components: {
  },
  data() {
    return {
      item: []
    };
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    pressHeart(item, event) {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      axios.post('/api/v1/consumer/stores/' + this.id + '/like', {}, {headers})
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
    pressChat(){
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      axios.post('/api/v1/consumer/chat',{"storeId":this.id}, {
        headers : headers,
      })
      .then(response => {
        window.open(this.item.chatUrl, '_blank');
      })
      .catch(error => {
        console.error(error);
      });
    }
  },
  mounted() {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    axios.get('/api/v1/consumer/stores/' + this.id + '/mainInfo', {
      headers : headers,
      })
      .then(response => {
        this.item = response.data;
      })
      .catch(error => {
        console.error(error);
      });
    // this.filterPopular();
  }
}
</script>

<style scoped>
.flex-container{
  display: flex;
  
}
.store-image{
  width:50%;
  padding: 40px;
}
.store-description{
  width:50%;
  padding: 40px;
  align-content: space-evenly;
}
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
